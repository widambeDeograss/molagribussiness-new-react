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
                            code: {
                                className: "language-js"
                            },
                            delimiter: {
                                className: "border border-2 w-16 mx-auto"
                            },
                            embed: {
                                className: "border-0"
                            },
                            header: {
                                className: "font-bold"
                            },
                            image: {
                                className: "w-full max-w-screen-md",
                                actionsClassNames: {
                                    stretched: "w-full h-80 object-cover",
                                    withBorder: "border border-2",
                                    withBackground: "p-2",
                                }
                            },
                            list: {
                                className: "list-inside list-disc pl-5",
                                type: {
                                    ordered: "list-decimal",
                                    unordered: "list-disc",

                                }
                            },
                            paragraph: {
                                className: "text-base text-opacity-75",
                                actionsClassNames: {
                                    alignment: "text-left", // This is a substitution placeholder: left or center.
                                }
                            },
                            quote: {
                                className: "py-3 px-5 italic font-serif"
                            },
                            table: {
                                className: "table-auto w-full border-collapse border-spacing-2 border border-gray-300",
                                actionsClassNames: {
                                    cell: "border-2 border-gray-300 p-4",
                                }
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
