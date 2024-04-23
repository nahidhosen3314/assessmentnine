import { FaLocationDot } from "react-icons/fa6";
import { useParams, useLoaderData } from "react-router-dom";
import useTitle from "../components/useTitle";

const Property = () => {
    const { id } = useParams();
    const properties = useLoaderData();
    const property = properties.find((item) => item.id === id);
    
    useTitle({title: property.title})

    return (
        <div className="py-14 bg-primary/10">
            <div className="container">
                <img
                    src={property.image}
                    alt={property.title}
                    className="aspect-video object-cover mb-10"
                />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="bg-white border p-5 md:col-span-2">
                        <div className="flex flex-wrap gap-5 border-b mb-5 pb-5">
                            <div className="sm:flex-1">
                                <div className="capitalize text-sm bg-primary text-white px-2 py-1 inline-block mb-2">
                                    for {property.status}
                                </div>
                                <h3>{property.title}</h3>
                                <div className="text-sm flex gap-2 mt-3">
                                    <FaLocationDot />
                                    {property.location}
                                </div>
                            </div>
                            <div className="">
                                <h3 className="text-primary">
                                    {property.price}
                                </h3>
                                <span>( Price only )</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            <div className="">
                                <strong>Living Room:</strong>{" "}
                                {property.facilities[1].bed_room}
                            </div>
                            <div className="">
                                <strong>Baths:</strong>{" "}
                                {property.facilities[2].bath}
                            </div>
                            <div className="">
                                <strong>Swimming Pool:</strong>{" "}
                                {property.facilities[0].swimming_pool ? "Yes" : "No"}
                            </div>
                            <div className="">
                                <strong>Area:</strong> {property.area}
                            </div>
                        </div>
                        <div className="mt-10">
                            <h4>Description</h4>
                            {property.description}
                        </div>
                    </div>
                    <div className="bg-white border p-5 w-full max-w-sm mx-auto">
                        <h4 className="mb-4 text-center">Get a free quote</h4>
                        <div className="flex flex-col gap-3">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="border w-full p-3"
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="border w-full p-3"
                            />
                            <input
                                type="text"
                                placeholder="Contact Number"
                                className="border w-full p-3"
                            />
                            <textarea
                                className="border w-full p-3"
                                placeholder="Message"
                            ></textarea>
                            <input
                                type="submit"
                                value="Get a quote"
                                className="tw-btn-primary cursor-pointer tw-btn"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Property;
