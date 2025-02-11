import { Image } from "antd";
import {useEffect, useState} from "react";
import axios from "axios";
import {BASE_URL} from "../constants/BaseUrl";

interface blogTs {
    image: any;
    id: number;
    created_at: any;
    title: string;
    description?: string;
    platform: string;
    author:string;
}

const FollowUs = () => {
    // const [isLoading, setIsLoading] = useState(false);
    const [socoalMeadiaPosts, setSocoalMeadiaPosts] = useState<blogTs[]>([]);
    // const router = useNavigate();

    const LoadPosts =async () => {
        const res = await axios.get(BASE_URL + "/api/social-media",);
        setSocoalMeadiaPosts(res?.data);

    }

    useEffect(() => {
        LoadPosts();
    }, []);

    return (
        <div className="py-6 bg-gray-100 dark:bg-black/20">
            <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between px-10">
                <div className="flex items-center space-x-4">
                    <button className="bg-[#40574F] text-white rounded-full py-2 px-6"
                            onClick={() => { window.location.href = 'https://www.instagram.com/mol_agribusiness_ltd?igsh=MjhiemVyZjR4YXM3'; }}
                    >
                        Follow us
                    </button>
                    <div>
                        <p className="text-sm text-gray-600">Follow us</p>
                        <h2 className="text-xl font-bold">Follow us on Instagram</h2>
                    </div>
                </div>
                <div className="mt-6 lg:mt-0 flex space-x-4">
                    {socoalMeadiaPosts.slice(0,4).map((image, index) => (
                        <div key={index} className="relative w-32 h-32">
                            <Image src={image.image} alt={image.title}  className="rounded" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FollowUs;
