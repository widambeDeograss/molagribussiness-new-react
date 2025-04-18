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
            <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center justify-between px-10">
                <div className="flex items-center space-x-4">
                    <button                        className="group bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 rounded-full text-white text-sm font-medium shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-shadow"
                            onClick={() => { window.location.href = 'https://www.instagram.com/mol_agribusiness_ltd?igsh=MjhiemVyZjR4YXM3'; }}
                    >
                        Follow us
                    </button>
                    <div>
                        <p className="text-sm font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Follow us</p>
                        <h2 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Follow us on Instagram</h2>
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
