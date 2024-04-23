import blogs from "../../public/blogs.json";
import BlogCard from "./BlogCard";

const RecentBlogs = () => {
    return (
        <div className="py-20 bg-slate-100">
            <div className="mb-8 text-center">
                <h3>Our Latest Articles</h3>
            </div>
            <div className="container">
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-x-7 gap-y-10">
                    {blogs.slice(0, 3).map((blog) => (
                        <BlogCard postdata={blog} key={blog.id}></BlogCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecentBlogs;
