import  {useEffect, useState} from "react";
import axios from "axios";
import {CardArticle} from "../../components/Articles";
import {Toaster} from "react-hot-toast";
import SocialMediaModal from "../../components/SocialMeadiaAddModal";
import {BASE_URL} from "../../constants/BaseUrl";
import { useNavigate } from "react-router-dom";

interface blogTs {
    image:any;
    id:number;
    created_at:any;
    title:string;
}

const Blogs = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [postData, setPostData] = useState<blogTs[]>([]);
    const [socoalMeadiaPosts, setSocoalMeadiaPosts] = useState<blogTs[]>([]);
    const [addSocialModal, setAddSocialModal] = useState(false);
    const router = useNavigate();

    const LoadPosts =async () => {
        setIsLoading(true);
        const response = await axios.get(BASE_URL +"/api/posts",);
        const res = await axios.get(BASE_URL +"/api/social-media",);
        console.log(response?.data);
        setPostData(response?.data);
        setSocoalMeadiaPosts(res?.data);

        setIsLoading(false);
    }

    useEffect(() => {
        LoadPosts();
    }, []);



    useEffect(() => {
        const tkn = localStorage.getItem('tkn');
        if (tkn === null){
            router("/wariobanew");
        }
        return;
    }, []);


    if (isLoading) {
        return (
            <div className="sm:h-[calc(100vh_-_100px)] h-[calc(100dvh_-_100px)] text-xl flex items-center justify-center">
                <div>Loading...</div>
            </div>
        );
    }

     return (<div>
         <Toaster/>
         <div className="px-10 flex gap-6 max-w-[85rem] mx-auto">
             <a href="/wariobanew/create/agribusinessblog" className=" bg-green-900 text-white rounded-lg text-xs font-light px-2 py-1 hover:bg-green-800">Create Blog</a>
             <a href="#" className=" bg-green-900 text-white rounded-lg text-xs font-light px-2 py-1 hover:bg-green-800" onClick={() => setAddSocialModal(true)}>Create Social Media Post</a>
             <a href="#" className=" bg-green-900 text-white rounded-lg text-xs font-light px-2 py-1 hover:bg-green-800" onClick={() => {
                 localStorage.clear()
                 window.location.reload()
             }}>Log out</a>
         </div>
         <section className="max-w-[85rem] mx-auto px-10">
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                 <div className="col-span-2">
            <span className="flex items-baseline gap-2">
                <div className="border-2 border-green-900 border-t-0 border-r-0 border-l-0 h-10 px-3 w-12"></div>
                <h3 className="text-xs font-bold">All Blogposts</h3>
            </span>
                     <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                         {postData?.map((card, index) => (
                             <CardArticle
                                 key={index}
                                 imageSrc={card?.image ? card.image : "/mol logo.png"}
                                 tag="Blog"
                                 title={card?.title}
                                 date={card?.created_at}
                                 id={card.id}
                                 link="#"
                                 view="cArticle"
                             />
                         ))}
                     </div>
                 </div>
                 <div className="col-span-1">
                     <span className="flex items-baseline gap-2">
                <div className="border-2 border-green-900 border-t-0 border-r-0 border-l-0 h-10 px-3 w-12"></div>
                <h3 className="text-xs font-bold">All Social Media Posts</h3>
            </span>
                     <div className="grid grid-cols-1 gap-6">
                         {socoalMeadiaPosts?.map((card, index) => (
                             <CardArticle
                                 key={index}
                                 imageSrc={card?.image ? card.image : "/mol logo.png"}
                                 tag="Social Media"
                                 title={card?.title}
                                 date={card?.created_at}
                                 id={card.id}
                                 view="cSocial"
                                 link="#"
                             />
                         ))}
                     </div>
                 </div>
             </div>
         </section>
<SocialMediaModal visible={addSocialModal} onClose={()=> setAddSocialModal(false)}/>

     </div>)
}

export default Blogs;
