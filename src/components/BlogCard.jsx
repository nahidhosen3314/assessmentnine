const BlogCard = ({ postdata }) => {
    const {
        img_url,
        published_date,
        slug,
        title,
        content,
        tag,
        author,
        min_read,
    } = postdata;

    return (
        <div className="flex flex-col shadow hover:shadow-xl transition-all duration-300 bg-white rounded-bl-md rounded-br-md">
            <a
                href={`blog/${slug}`}
                className="flex relative rounded-tl rounded-tr overflow-hidden"
            >
                <img
                    src={img_url}
                    className="w-full aspect-[6/4] object-cover hover:scale-105 hover:transform hover:rotate-2 transition-all duration-500 wp-post-image entered litespeed-loaded"
                    alt=""
                />
            </a>
            <div className="flex flex-col gap-4 p-5 flex-grow">
                <div className="flex-grow">
                    <div className="flex justify-between items-center text-sm mb-2">
                        <div className="flex flex-wrap items-center gap-6">
                            <div className="flex items-center gap-1">
                                <span className="text-3xl text-primary leading-none">
                                    &bull;
                                </span>
                                <div className="uppercase hover:text-primary text-sm hover:underline underline-offset-2 decoration-2">
                                    {tag}
                                </div>
                            </div>
                        </div>
                        {min_read} min read
                    </div>
                    <h4 className="font-medium mb-2">
                        <a href={`blog/${slug}`}>{title}</a>
                    </h4>
                    <p className="text-base line-clamp-3">
                        {content.slice(0, 100)}
                    </p>
                </div>
                <div className="text-xs mt-2 flex justify-between items-center">
                    <div className="flex items-center gap-x-3 ">
                        <div className="">
                            <img
                                src={author.avatar}
                                alt={author.name}
                                className="avatar avatar-60 photo !rounded-full w-10 h-10 entered litespeed-loaded"
                            />
                        </div>
                        <span className="font-medium text-sm">
                            {author.name}
                        </span>
                    </div>
                    <div className="uppercase">
                        Updated on — {published_date}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
