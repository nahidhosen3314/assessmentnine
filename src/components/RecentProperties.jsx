import properties from "../../public/properties.json";
import { FaLocationDot, FaShower, FaVectorSquare } from "react-icons/fa6";
import { IoIosBed } from "react-icons/io";
import { Link } from "react-router-dom";

const RecentProperties = () => {
    return (
        <div className="bg-primary/10 py-12 md:py-16">
            <div className="container">
                <h3 className="mb-7 animate__animated animate__fadeInUp">Recent Properties</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                    {properties.map((property, idx) => {
                        return (
                            <div key={idx} className={`hover:shadow-xl transition-all duration-300 animate__animated animate__zoomIn animate__delay-${idx}s`}>
                                <div className="relative overflow-hidden">
                                    <div className="capitalize text-sm bg-black text-white px-2 py-1 absolute top-2 left-2 z-10">
                                        for {property.status}
                                    </div>
                                    <img
                                        src={property.image}
                                        alt={property.title}
                                        className="aspect-[1/0.7] w-full object-cover hover:scale-105 hover:transform hover:rotate-2 transition-all duration-500"
                                    />
                                </div>
                                <div className="bg-white p-5">
                                    <h4 className="text-primary mb-2">
                                        {property.price}
                                    </h4>
                                    <h5>{property.title}</h5>
                                    <div className="text-sm flex gap-2 mt-3">
                                        <FaLocationDot />
                                        {property.location}
                                    </div>
                                    <div className="flex gap-x-4 gap-y-2 mt-3 items-center">
                                        <div className="flex gap-1 items-center">
                                            <IoIosBed/>
                                            {property.facilities[1].bed_room}
                                        </div>
                                        <div className="flex gap-1 items-center">
                                            <FaShower/>
                                            {property.facilities[2].bath}
                                        </div>
                                        <div className="flex gap-1 items-center">
                                            <FaVectorSquare />
                                            {property.area}
                                        </div>
                                    </div>
                                    <Link to={`/property/${property.id}`} className="tw-btn tw-btn-primary hover:bg-black mt-5 text-sm rounded-none px-3 py-1.5">View Property</Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default RecentProperties;
