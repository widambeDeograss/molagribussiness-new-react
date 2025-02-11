import axios from "axios";
import  {useEffect, useState} from "react";
import PostEditor from "../components/PostEditor";
import {BASE_URL} from "../constants/BaseUrl";
import { useParams } from "react-router-dom";

const Loading = () => {
    return (
        <div className="h-[calc(100dvh_-_150px)] flex items-center justify-center">
            Loading...
        </div>
    );
};


const EditPostRef = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false)
    const params = useParams();

    const LoadPosts =async () => {
        setIsLoading(true);
        const response =await axios.get(BASE_URL + `/api/posts/${params.postid}`);
        setData(response.data)
        setIsLoading(false);
    }

    useEffect(() => {
        LoadPosts();
    }, []);


    if (isLoading) {
        return <Loading />;
    }

    return (
        <main className=" ">
            {data && Object.entries(data).length > 0 && <PostEditor post={data} />}
        </main>
    );
};

export default EditPostRef;
