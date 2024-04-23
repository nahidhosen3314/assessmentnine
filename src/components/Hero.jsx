import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import properties from "../../public/properties.json";
import { Link } from "react-router-dom";

const Hero = () => {

    const featuredProperties = properties.filter((item) => item.featured)

    return (
        <div>
            <Swiper
                modules={[Pagination, Autoplay, FreeMode]}
                pagination={{ clickable: true }}
                autoplay={{ autoplay: true }}
                slidesPerView={1}
            >
                {featuredProperties.map((property) => {
                    return (
                        <div key={property.id}>
                            <SwiperSlide key={property.id}>
                                <div className="relative py-20 min-h-[650px] z-10 flex justify-center items-center">
                                    <img
                                        src={property.image}
                                        className="absolute h-full w-full left-0 top-0 object-cover -z-10"
                                    />
                                    <div className="absolute h-full w-full left-0 top-0 bg-gray-800/60"></div>
                                    <div className="container">
                                        <div className="max-w-3xl mx-auto text-center text-white flex flex-col gap-5 bg-white/20 p-10 backdrop-blur">
                                            <h4 className="text-primary">
                                                {property.featured &&
                                                    "Featured"}
                                            </h4>
                                            <h1 className="text-white">
                                                {property.title}
                                            </h1>
                                            <p className="text-white">
                                            {property.description.slice(0, 100)}...
                                            </p>
                                            <div className="">
                                                <Link to={`property/${property.id}`} className="tw-btn tw-btn-primary">
                                                    View Property
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default Hero;
