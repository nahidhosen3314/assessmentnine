import { useLoaderData } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import useTitle from "../components/useTitle";


const Blog = () => {
    useTitle({title: "Blog"})
    const Blogs = useLoaderData()

    return (
        <div>
            <div className="bg-primary py-20 text-center">
                <div className="container">
                    <h2 className="text-white">Our Latest Blog</h2>
                    <p className="text-white">Stay up to date with our most recent news and updates.</p>
                </div>
            </div>
            <div className="py-20">
                <div className="container">
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-x-7 gap-y-10">
                        {Blogs.map(blog => <BlogCard postdata={blog} key={blog.id}></BlogCard>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;