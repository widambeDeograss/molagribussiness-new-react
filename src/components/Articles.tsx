import {Button, Popconfirm, Image} from "antd";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import {BASE_URL} from "../constants/BaseUrl";

export const CardArticle = ({ imageSrc, tag, title, date, id, view }:any) => {
    const router = useNavigate()
    const deletePost =async (id:any) => {
        const response = view === "cSocial"? await axios.delete(BASE_URL +`/api/social-media/${id}`,) : await axios.delete(`http://127.0.0.1:8000/api/posts/${id}`,);
        if (response.status === 204){
            toast.success("Blog Post deleted successfully");
        }
        console.log(response?.data);
    }



    return (
        <div className="border rounded-lg overflow-hidden shadow-md">

            <div className="relative ">
                <Image src={imageSrc} alt={title} className="h-44 w-full" />
                <span className="absolute top-2 left-2 bg-white text-gray-800 px-2 py-1 rounded">{tag}</span>
            </div>
            <div className="p-4">
                <h3 className="text-base font-bold mb-2">{title}</h3>
                <p className="text-xs italic">{new Date(date).toDateString()}</p>
                {view === "cArticle" &&(
                    <div className="forum-actions">
                        {/*<Button onClick={() => handleViewForum(forum.id)}>View</Button>*/}
                        <Popconfirm
                            title="Are you sure to delete this post?"
                            onConfirm={() => deletePost(id)}
                            okText="Delete"
                            cancelText="Cancel"
                            placement="topRight"
                        >
                            <Button type="dashed" size="small">Delete</Button>
                        </Popconfirm>
                        <Popconfirm
                            title="Are you sure to edit this post?"
                            onConfirm={() => router(`/news/${id}/edit`)}
                            okText="Deactivate"
                            cancelText="Cancel"
                            placement="topRight"
                        >
                            <Button size="small">Edit</Button>
                        </Popconfirm>
                    </div>
                )}

                {
                    view === "cSocial" && (
                        <Popconfirm
                            title="Are you sure to delete this post?"
                            onConfirm={() => deletePost(id)}
                            okText="Delete"
                            cancelText="Cancel"
                            placement="topRight"
                        >
                            <Button type="dashed" size="small">Delete</Button>
                        </Popconfirm>

            )
                }

                {
                    view !== "cSocial" && (
                        <div 
                        onClick={() => router(`/news/${id}`)}
                        className="cursor-pointer"
                        >
                        <p  className="text-[#40574F] font-bold">Read more →</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};


const CardsList = () => {
    const cardsData = [
        {
            imageSrc: '/path-to-image-1.jpg',
            tag: 'News',
            title: 'CALL FOR EXPRESSION OF INTEREST',
            date: 'May 21, 2024',
            link: '/path-to-article-1',
        },
        {
            imageSrc: '/path-to-image-2.jpg',
            tag: 'Article',
            title: 'Revolutionizing Agriculture with SAT Data Management Software',
            date: 'May 13, 2024',
            link: '/path-to-article-2',
        },
        {
            imageSrc: '/path-to-image-3.jpg',
            tag: 'News',
            title: 'We are hiring - Business Developer',
            date: 'May 6, 2024',
            link: '/path-to-article-3',
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {cardsData.map((card, index) => (
                <CardArticle
                    key={index}
                    imageSrc={card.imageSrc}
                    tag={card.tag}
                    title={card.title}
                    date={card.date}
                    link={card.link}
                />
            ))}
        </div>
    );
};

export default CardsList;



