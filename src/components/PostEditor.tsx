import React, { useCallback, useEffect, useRef, useState } from "react";
import { convertImageToBase64 } from '../utils/convertImageTObase64';
import EditorJS from "@editorjs/editorjs";
import {Button} from "antd";
import { TPost } from "../utils/postTypes";

import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import toast, {Toaster} from "react-hot-toast";

import TextareaAutosize from "react-textarea-autosize";
import { useParams, useNavigate } from "react-router-dom";
import {BASE_URL} from "../constants/BaseUrl";

type TForm = {
    title: string;
    image: Blob | MediaSource;
    postType: "DRAFT" | "PUBLISHED";
  };

const PostEditor = ({ post }: { post: TPost | null }) => {
    const router = useNavigate();
    const params = useParams();
  const [csrfToken, setCsrfToken] = useState('');

  const getCsrfToken = async () => {
    const response = await axios.get('http://127.0.0.1:8000/token');
    console.log(response.data)
    setCsrfToken(response.data);
  };

  useEffect(() => {
  getCsrfToken();
  }, []);


  const {
        register,
        handleSubmit,
        reset,
        resetField,
        setValue,
        watch,
        formState: { isSubmitting, errors },
      } = useForm<TForm>({ defaultValues: { title: post?.title } });
      const postType = watch("postType");


      const [imageFile, setImageFile] = useState<any>(null);
      const [isMounted, setIsMounted] = useState(false);

      const ref = useRef<EditorJS | undefined>(undefined);

      useEffect(() => {
        if (errors.title) {
          toast.error("Title can't be empty!");
        }
      }, [errors.title]);


  const onSubmitHandler: SubmitHandler<TForm> = async (data) => {
    try {
      const blocks = await ref.current?.save();


      if (params.postId) {
        //@ts-ignore 
        const res = await axios.patch(BASE_URL + `/api/posts/${post?.id}`, {
          title: data.title,
          path:"Kilimo bora",
          content: JSON.stringify(blocks),
          image: imageFile !== null ? imageFile : post?.image,
          type: data.postType,
          author:"Moses Warioba",
          category_id:1
        });
        // message(res.data.message);
        router(`/wariobanew/create`);
      } else {
        console.log(csrfToken)
        const res = await axios.post(BASE_URL +"/api/posts/", {
          title: data.title,
          path:"Kilimo bora",
          content: JSON.stringify(blocks),
          image: imageFile,
          type: data.postType,
          author:"Moses Warioba",
              category_id:1
        },
           {
             headers: {
               'Content-Type': 'application/json',
               'X-CSRF-TOKEN': csrfToken,
             },
        },);

        toast.success("Blog Post created successfully");
        if (res.status === 201) {
          router(`/wariobanew/create`);
        } else {
          return;
        }
      }
      reset();
      setImageFile(null);
      ref?.current?.clear();
    } catch (error: any) {
      if (error.response) {
        toast.error("Failed to add post image too large");
      } else {
        toast.error("Failed to add post image too large");
      }
      console.log(error);
    }
  };

  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    const convertedImage = await convertImageToBase64(file);
    setImageFile(convertedImage);
  };


  const initEditor = useCallback(async () => {
    const EditorJS = (await import("@editorjs/editorjs")).default;
    const Header = (await import("@editorjs/header")).default;
    //@ts-ignore 
    const Table = (await import("@editorjs/table")).default;
    //@ts-ignore 
    const Embed = (await import("@editorjs/embed")).default;
    //@ts-ignore 
    const List = (await import("@editorjs/list")).default;
    //@ts-ignore 
    const Code = (await import("@editorjs/code")).default;
    //@ts-ignore 
    const LinkTool = (await import("@editorjs/link")).default;
    //@ts-ignore 
    const InlineCode = (await import("@editorjs/inline-code")).default;
    //@ts-ignore 
    const Quote = (await import("@editorjs/quote")).default;
    //@ts-ignore 
    const Raw = (await import("@editorjs/raw")).default;
    //@ts-ignore 
    const CheckList = (await import("@editorjs/checklist")).default;

    if (!ref.current) {
      const editor = new EditorJS({
        holder: "editor",
        placeholder: "Write your post content here...",
        inlineToolbar: true,
        data: post?.content,
        tools: {
          header: {
            //@ts-ignore 
            class: Header,
            inlineToolbar: true,
            config: {
              placeholder: "Enter a header",
              levels: [2, 3, 4, 5, 6],
              defaultLevel: 2,
            },
          },
          list: List,
          checkList: CheckList,
          embed: Embed,
          linkTool: LinkTool,
          inlineCode: InlineCode,
          table: Table,
          quote: Quote,
          code: Code,
          raw: Raw,
        },
        onReady: () => {
          ref.current = editor;
        },
      });
    }
  }, [post]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      initEditor();

      return () => {
        ref.current && ref.current.destroy;
        ref.current === undefined;
      };
    }
  }, [isMounted, initEditor]);



  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="h-full">
      <Toaster />
    <nav className="bg-transparent flex justify-between md:px-6 px-2 py-2 items-center">
      <Button
        aria-label="Back button"
        onClick={() => {}}
      >
         back
      </Button>

      {post && post.type === "PUBLISHED" ? (
        <div>
          <Button
            type="primary"
            color="primary"
            htmlType="submit"
            disabled={
              postType === "PUBLISHED" && isSubmitting ? true : false
            }
            loading={
              postType === "PUBLISHED" && isSubmitting ? true : false
            }
            onClick={() => setValue("postType", "PUBLISHED")}
          >
            {postType === "PUBLISHED" && isSubmitting
              ? "Saving..."
              : "Save changes"}
          </Button>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Button
            // variant="light"
            color="primary"
            // radius="sm"
            htmlType="submit"
            disabled={postType === "DRAFT" && isSubmitting ? true : false}
            loading={postType === "DRAFT" && isSubmitting ? true : false}
            onClick={() => setValue("postType", "DRAFT")}
          >
            {postType === "DRAFT" && isSubmitting
              ? "Saving..."
              : "Save Draft"}
          </Button>
          <Button
            color="primary"
            htmlType="submit"
            disabled={
              postType === "PUBLISHED" && isSubmitting ? true : false
            }
            loading={
              postType === "PUBLISHED" && isSubmitting ? true : false
            }
            onClick={() => setValue("postType", "PUBLISHED")}
          >
            {postType === "PUBLISHED" && isSubmitting
              ? "publishing..."
              : "Publish"}
          </Button>
        </div>
      )}
    </nav>

    <div className="max-md:px-4 h-full overflow-y-auto">
      <div className="max-w-[650px] m-auto">
        <div className="flex gap-8 ">
          {!imageFile && (
            <input
              type="file"
              {...register("image")}
              onChange={handleImage}
            />
          )}
          {imageFile && (
            <figure className="relative w-full h-[300px] pt-2">
              <Button
                // isIconOnly
                // variant="light"
                className="absolute -top-2 -right-4 text-red-500 "
                onClick={() => {
                  setImageFile(null), resetField("image");
                }}
              >
                X
                {/* <Icon name="x" /> */}
              </Button>
              <img
                src={imageFile}
                width={100}
                height={100}
                alt="post image"
                className="w-full h-full object-cover"
              />
            </figure>
          )}
          {post && post.image !== null && !imageFile && (
            <img
              src={post.image}
              alt={post.title}
              width={100}
              height={100}
            />
          )}
        </div>
        <TextareaAutosize
          {...register("title", { required: true })}
          aria-label="Post Title"
          placeholder="New post title here..."
          className="lg:text-5xl md:text-4xl text-3xl leading-tight resize-none w-full md:font-extrabold font-bold outline-none text-[rgb(68, 64, 60)]"
        />
      </div>
      <div id="editor" className="prose max-w-full" />
    </div>
  </form>
  )
}

export default PostEditor
