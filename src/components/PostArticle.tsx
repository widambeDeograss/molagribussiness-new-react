import Blocks from "editorjs-blocks-react-renderer";
import { Image } from "antd";

const PostArticle = ({ post }: any) => {
    console.log(JSON.parse(post.content))

    return (
        <>
            <article className="pb-4">
                <header>
                    {post.image !== null && (
                        <figure className="w-full max-h-[350px] mb-4 ">
                            <Image
                                src={post.image}
                                // width={400}
                                // height={200}
                                className="w-full h-full object-cover max-h-[350px] md:aspect-[5/2] aspect-[4/2]"
                                alt={post.title}
                            />
                        </figure>
                    )}
                    <h1 className="mb-6 mt-4 scroll-m-20 lg:text-5xl md:text-4xl text-3xl sm:font-extrabold font-bold tracking-tight ">
                        {post.title}
                    </h1>
                </header>
                <div className="">
                    <Blocks
                        data={JSON.parse(post.content)}
                        config={{
                            paragraph: {
                              className: "mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300",
                            },
                            header: {
                              className: "mt-5 mb-4 font-bold",
                              levels: {
                                1: "text-4xl",
                                2: "text-3xl",
                                3: "text-2xl",
                                4: "text-xl",
                                5: "text-lg",
                                6: "text-base"
                              }
                            },
                            image: {
                              className: "img-fluid rounded mb-4"
                            },
                            list: {
                              className: "mb-4 list-disc pl-5",
                              item: "mb-2"
                            },
                            checklist: {
                              className: "mb-4 list-none pl-5",
                              item: "flex items-center mb-2",
                              checkbox: "mr-2"
                            },
                            // table: {
                            //   className: "w-full mb-4 border-collapse",
                            //   row: "border-b",
                            //   cell: "p-2 border"
                            // },
                        
                              table: {
                                className: " mt-5 table table-striped"
                              },
                            quote: {
                              className: "border-l-4 border-gray-300 pl-4 mb-4 italic py-3 px-5"
                            },
                            // code: {
                            //   className: "bg-gray-100 p-2 rounded mb-4 font-mono text-sm"
                            // },
                            delimiter: {
                              className: "my-8 border-t-2 border-gray-200"
                            },
                            embed: {
                              className: "mb-4"
                            },
                            warning: {
                              className: "bg-yellow-100 p-4 rounded mb-4 border-l-4 border-yellow-500"
                            }
                          }}
                        renderers={{
                            checkList: Checklist,
                        }}
                    />
                </div>
            </article>
            <hr className="pb-8" />
            {/*<Comments post={post} />*/}
        </>
    );
};

export default PostArticle;

const Checklist = ({ data, className = "my-2" }: any) => {
    return (
        <>
            {data?.items.map((item: any, i: any) => (
                <p key={i} className={className}>
                    <label>
                        <input type="checkbox" checked={item.checked} readOnly /> {item.text}
                    </label>
                </p>
            ))}
        </>
    );
};
