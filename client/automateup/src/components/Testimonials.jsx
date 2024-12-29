import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import profileImage from '../assets/profile.jpg'
import face1 from '../assets/face1.jpg'
import face2 from '../assets/face2.jpg'
import face3 from '../assets/face3.jpg'
import face4 from '../assets/face4.jpg'
import face5 from '../assets/face5.jpg'

const testimonialsData = [
  {
    id: 1,
    name: "Riya Malhotra",
    image: profileImage, 
    backgroundColor: "bg-blue-400", 
    description: "The team at AutomateUp delivered a stunning and fully functional website for my business within a short span. Their attention to detail and responsiveness were top-notch. I couldn't be happier with the results!"
  },
  {
    id: 2,
    name: "Jane Smith",
    image: face1,
    backgroundColor: "bg-green-400",
    description: "The UI/UX design for my app was beyond what I imagined. AutomateUp truly understands how to blend aesthetics with functionality, creating an experience that my users love!"
  },
  {
    id: 3,
    name: "Alice Johnson",
    image:face2,
    backgroundColor: "bg-red-400",
    description: "Thanks to AutomateUp, my daily business operations are now fully automated. They streamlined my workflow, saving me hours of manual work each week. Highly recommend!"
  },
  {
    id: 4,
    name: "Aarohi Mishra",
    image: face3,
    backgroundColor: "bg-yellow-400",
    description: "Exceptional service! AutomateUp not only built a great website for my e-commerce store but also implemented automation that simplifies my order management process. Fantastic!."
  },
  {
    id: 5,
    name: "Aarav Sharma",
    image: face4,
    backgroundColor: "bg-gray-400",
    description: "From concept to completion, AutomateUp created a visually appealing and intuitive design for my platform. Their expertise in design and branding made all the difference!"
  },
  {
    id: 6,
    name: "James H.",
    image: face5,
    backgroundColor: "bg-purple-400",
    description: "Whether it's web development, task automation, or design, AutomateUp has been my go-to agency. They bring innovative solutions and deliver them efficiently every time."
  },
];

const Testimonials = () => {
  return (
    <div className='h-auto md:h-screen bg-bgColor z-[-1] relative' id='testimonials'>
      <div>
        <h1 className="relative z-10 mt-20 text-4xl font-semibold text-center top-5 md:text-5xl">
          Testimonials
        </h1>
      </div>

      <div className='w-full md:h-[90vh] mt-10 bg-gray-50 h-[70vh] flex justify-center items-center'>
        <div className='w-5/6 p-6 bg-gray-50 h-5/6 '>

          <Swiper
            spaceBetween={30}
            slidesPerView={1} // Default for small screens
            pagination={{ clickable: true }}
            navigation
            loop={true}
            autoplay={{
              delay: 2000,  // Auto-slide delay (2 seconds)
              disableOnInteraction: false,  // Auto-slide continues after interaction
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="h-full"
            breakpoints={{
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
                <div className={`h-full p-6 ${testimonial.backgroundColor} rounded-customRadius`}>
                  <div className='flex flex-row items-center gap-4'>
                    <div className='flex justify-between w-10 h-10 bg-white rounded-full md:w-20 md:h-20'>
                      <img src={testimonial.image} alt={testimonial.name} className="rounded-full" />
                    </div>
                    <h2 className="text-xl font-semibold md:text-2xl">{testimonial.name}</h2>
                  </div>
                  
                  <p className="mt-6 font-medium text-center md:text-3xl md:mt-10">
                    "{testimonial.description}"
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Testimonials;
