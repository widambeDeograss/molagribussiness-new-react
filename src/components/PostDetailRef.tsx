import axios from "axios";
import{ useEffect, useState } from "react";
import PostArticle from "../components/PostArticle";
import { BASE_URL } from "../constants/BaseUrl";
import { useParams } from "react-router-dom";


const PostDetailRef = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const params = useParams();
    
    
    const loadPost = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${BASE_URL}/api/posts/${params.postid}`);
            setData(response.data);
        } catch (error) {
            console.error("Error fetching post data:", error);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        loadPost();
    }, [params.postid]);

    if (isLoading) {
        return (
            <div className="sm:h-[calc(100vh_-_100px)] h-[calc(100dvh_-_100px)] text-xl flex items-center justify-center">
                <div>Loading...</div>
            </div>
        );
    }

    return (
        <div className="max-w-screen-xl mx-auto text-justify">
            <section>
                {data && Object.entries(data).length > 0 ? (
                    <PostArticle post={data} />
                ) :    <div className="sm:h-[calc(100vh_-_100px)] h-[calc(100dvh_-_100px)] text-xl flex items-center justify-center">
                <div>BlogPost not found</div>
            </div> }
            </section>
        </div>
    );
};

export default PostDetailRef;