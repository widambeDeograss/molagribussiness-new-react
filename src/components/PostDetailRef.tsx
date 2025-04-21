import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios from "axios";
import PostArticle from "../components/PostArticle";
import { BASE_URL } from "../constants/BaseUrl";

const fetchPost = async (postid:any) => {
  const response = await axios.get(`${BASE_URL}/api/posts/${postid}`);
  return response.data;
};

const PostDetailRef = () => {
  const { postid } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["post", postid],
    queryFn: () => fetchPost(postid),
    enabled: !!postid, 
    staleTime: 1000 * 60 * 5, 
  });

  if (isLoading) {
    return (
      <div className="sm:h-[calc(100vh_-_100px)] h-[calc(100dvh_-_100px)] text-xl flex items-center justify-center">
        <div>Loading...</div>
      </div>
    );
  }

  if (isError || !data || Object.entries(data).length === 0) {
    return (
      <div className="sm:h-[calc(100vh_-_100px)] h-[calc(100dvh_-_100px)] text-xl flex items-center justify-center">
        <div>BlogPost not found</div>
      </div>
    );
  }

  return (
    <div className="max-w-screen-2xl mx-auto text-justify">
      <section>
        <PostArticle post={data} />
      </section>
    </div>
  );
};

export default PostDetailRef;
