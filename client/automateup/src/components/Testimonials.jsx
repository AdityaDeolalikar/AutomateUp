import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "/src/assets/face1.jpg",
      description: "AutomateUp transformed our business processes. Their automation solutions saved us countless hours and improved accuracy significantly.",
      backgroundColor: "bg-gradient-to-br from-blue-50 to-indigo-100"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Director",
      image: "/src/assets/face2.jpg",
      description: "The social media automation tools provided by AutomateUp have revolutionized our marketing strategy. Highly recommended!",
      backgroundColor: "bg-gradient-to-br from-purple-50 to-pink-100"
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Operations Manager",
      image: "/src/assets/face3.jpg",
      description: "Their custom chatbot solution has significantly improved our customer service efficiency and satisfaction rates.",
      backgroundColor: "bg-gradient-to-br from-green-50 to-emerald-100"
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Tech Lead",
      image: "/src/assets/face1.jpg",
      description: "The web development team at AutomateUp delivered beyond our expectations. The result was simply outstanding.",
      backgroundColor: "bg-gradient-to-br from-orange-50 to-amber-100"
    }
  ];

  return (
    <div className='py-20 bg-gradient-to-b from-white to-gray-50' id='testimonials'>
      <div className='container px-4 mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
            Discover why businesses trust AutomateUp for their automation and development needs
          </p>
        </motion.div>

        <div className='w-full'>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="testimonials-swiper !pb-16"
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonialsData.map(testimonial => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className={`h-full p-8 ${testimonial.backgroundColor} rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
                >
                  <div className='relative'>
                    <FaQuoteLeft className="absolute -top-2 -left-2 text-3xl text-indigo-400 opacity-50" />
                    <div className='flex gap-4 items-center mb-6'>
                      <div className='overflow-hidden w-16 h-16 rounded-full ring-4 ring-white shadow-lg md:w-20 md:h-20'>
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 md:text-2xl">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
                      "{testimonial.description}"
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx>{`
        .testimonials-swiper .swiper-pagination-bullet {
          background: #6366f1;
          opacity: 0.5;
          width: 10px;
          height: 10px;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
