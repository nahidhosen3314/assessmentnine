import { useLoaderData, useParams } from "react-router-dom";
import useTitle from "../components/useTitle";

const BlogDetails = () => {
    const blogs = useLoaderData();
    const { slug } = useParams();

    const blog = blogs.find((item) => item.slug === slug);

    const { author, title, tag, published_date, img_url, min_read, content } =
        blog;

    useTitle({ title });
    return (
        <div className="bg-slate-100 py-20">
            <div className="container">
                <div className="max-w-4xl mx-auto flex flex-col gap-6 text-sm text-slate-800">
                    <div className="uppercase flex items-center gap-4">
                        Published on — {published_date}
                        <span className="text-3xl">&bull;</span>
                        <div>{tag}</div>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl">
                        {title}
                    </h1>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-x-3">
                            <div className="h-12 w-12 rounded-full overflow-hidden">
                                <img src={author.avatar} alt={title} />
                            </div>
                            <span className="capitalize">{author.name}</span>
                        </div>
                        {min_read} min read
                    </div>
                </div>
                <img src={img_url} alt={title} className="aspect-video mt-6" />
                <div className="mt-8 prose max-w-4xl mx-auto text-lg">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
