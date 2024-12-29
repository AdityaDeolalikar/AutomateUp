// import React,{useState} from "react";
// import CountUp from "react-countup";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";


// const Testimonials = () => {
//  const[countStart, setCountStart] = useState();
//  const {ref, inView} = useInView({
//   triggerOnce:true,
//   threshold:0.3
//  })
//  if (inView && !countStart) {
//   setCountStart(true);
// }
//   return (
//     <div className="h-auto mt-20 text-white md:h-2/5 bg-customColor">
//       <h1 className="relative z-10 text-4xl font-semibold text-center top-10 md:text-5xl">
//         Testimonials
//       </h1>

//       <div className="flex flex-col items-center gap-2 sm:gap-16 md:flex md:flex-row mt-28 md:mx-10">
//         <div className="relative w-2/3 h-auto p-3 mb-20 transition-transform duration-200 border-2 rounded-lg cursor-pointer border-grey backdrop-blur-sm hover:scale-105">
       
//           <div className="absolute inset-0 bg-white rounded-lg opacity-5"></div>
//           <div className="relative z-10 flex flex-col justify-between h-full">
//             <CountUp
              
//               start={0}
//               end={999}
//               duration={6}
//               suffix="+"
//               className="mt-3 text-5xl md:text-6xl"
//             />

//             <div className="flex-grow"></div>
//             <h2 className="mt-5 text-2xl font-semibold md:text-3xl">
//               Delivered Solutions
//             </h2>
//             <p className="text-base md:text-lg">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//               Doloribus, explicabo.
//             </p>
//           </div>
//         </div>

//         <div className="relative w-2/3 h-auto p-3 mb-20 transition-transform duration-200 border-2 rounded-lg cursor-pointer border-grey backdrop-blur-sm hover:scale-105">
//           <div className="absolute inset-0 bg-white rounded-lg opacity-5"></div>
//           <div className="relative z-10 flex flex-col justify-between h-full">
//             <CountUp
//               start={0}
//               end={999}
//               duration={6}
//               suffix="+"
//               className="mt-3 text-5xl md:text-6xl"
//             />
//             <div className="flex-grow"></div>
//             <h2 className="mt-5 text-2xl font-semibold md:text-3xl">
//               Clients Served
//             </h2>
//             <p className="text-base md:text-lg">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//               Doloribus, explicabo.
//             </p>
//           </div>
//         </div>

//         <div className="relative w-2/3 h-auto p-3 mb-20 transition-transform duration-200 border-2 rounded-lg cursor-pointer border-grey backdrop-blur-sm hover:scale-105">
//           <div className="absolute inset-0 bg-white rounded-lg opacity-5"></div>
//           <div className="relative z-10 flex flex-col justify-between h-full">
//             <CountUp
//               start={0}
//               end={999}
//               duration={6}
//               suffix="+"
//               className="mt-3 text-5xl md:text-6xl"
//             />
//             <div className="flex-grow"></div>
//             <h2 className="mt-5 text-2xl font-semibold md:text-3xl">
//               Time Saved in hrs.
//             </h2>
//             <p className="text-base md:text-lg">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//               Doloribus, explicabo.
//             </p>
//           </div>
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

import React, { useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Testimonials = () => {
  // Hook to trigger count animation on view
  const [countStart, setCountStart] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation once
    threshold: 0.3, // Adjust how much of the component should be visible to trigger (30% in this case)
  });

  // Start counting once the element is in view
  if (inView && !countStart) {
    setCountStart(true);
  }

  return (
    <div className="h-auto mt-20 text-white md:h-2/5 bg-customColor z-[-1] relative">
      <h1 className="relative z-10 text-4xl font-semibold text-center top-10 md:text-5xl">
      Key Achievements
      </h1>

      <div className="flex flex-col items-center gap-2 sm:gap-16 md:flex md:flex-row mt-28 md:mx-10">
        
        {/* First Card */}
        <motion.div
          ref={ref} // Attach ref for inView
          className="relative w-2/3 h-auto p-3 mb-20 transition-transform duration-200 border-2 rounded-lg cursor-pointer border-grey backdrop-blur-sm hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.4 }}
        >
          <div className="absolute inset-0 bg-white rounded-lg opacity-5"></div>
          <div className="relative z-10 flex flex-col justify-between h-full">
            <CountUp
              start={countStart ? 0 : null}
              end={700}
              duration={6}
              suffix="+"
              className="mt-3 text-5xl md:text-6xl"
            />
            <div className="flex-grow"></div>
            <h2 className="mt-5 text-2xl font-semibold md:text-3xl">
              Delivered Solutions
            </h2>
            <p className="text-base md:text-lg">
              Crafting innovative solutions across web development, UI/UX design, and task automation tailored to clients' unique needs.
            </p>
          </div>
        </motion.div>

        {/* Second Card */}
        <motion.div
          ref={ref}
          className="relative w-2/3 h-auto p-3 mb-20 transition-transform duration-200 border-2 rounded-lg cursor-pointer border-grey backdrop-blur-sm hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-white rounded-lg opacity-5"></div>
          <div className="relative z-10 flex flex-col justify-between h-full">
            <CountUp
              start={countStart ? 0 : null}
              end={800}
              duration={6}
              suffix="+"
              className="mt-3 text-5xl md:text-6xl"
            />
            <div className="flex-grow"></div>
            <h2 className="mt-5 text-2xl font-semibold md:text-3xl">
              Clients Served
            </h2>
            <p className="text-base md:text-lg">
            Empowering businesses and individuals globally with cutting-edge technology and design expertise.
            </p>
          </div>
        </motion.div>

        {/* Third Card */}
        <motion.div
          ref={ref}
          className="relative w-2/3 h-auto p-3 mb-20 transition-transform duration-200 border-2 rounded-lg cursor-pointer border-grey backdrop-blur-sm hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-white rounded-lg opacity-5"></div>
          <div className="relative z-10 flex flex-col justify-between h-full">
            <CountUp
              start={countStart ? 0 : null}
              end={5000}
              duration={6}
              suffix="+"
              className="mt-3 text-5xl md:text-6xl"
            />
            <div className="flex-grow"></div>
            <h2 className="mt-5 text-2xl font-semibold md:text-3xl">
              Time Saved in hrs.
            </h2>
            <p className="text-base md:text-lg">
            Streamlining operations and automating tasks to save time and improve productivity for our clients.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
