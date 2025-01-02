import { useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const KeyFeatures = () => {
  const [countStart, setCountStart] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  if (inView && !countStart) {
    setCountStart(true);
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative py-20 h-auto text-white md:h-2/5 bg-customColor">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-black/30"></div>
      
      <motion.h1 
        className="relative z-10 mb-4 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 md:text-5xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Key Achievements
      </motion.h1>
      
      <motion.p 
        className="px-4 mx-auto mb-16 max-w-2xl text-center text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Delivering excellence through innovation and dedication
      </motion.p>

      <div className="flex flex-col gap-8 items-center px-4 max-w-7xl sm:gap-16 md:flex-row md:justify-center md:mx-auto">
        {[
          {
            count: 700,
            title: "Delivered Solutions",
            description: "Crafting innovative solutions across web development, UI/UX design, and task automation.",
            delay: 0.2
          },
          {
            count: 800,
            title: "Clients Served",
            description: "Empowering businesses globally with cutting-edge technology and expertise.",
            delay: 0.4
          },
          {
            count: 5000,
            title: "Hours Saved",
            description: "Streamlining operations and automating tasks to boost productivity.",
            delay: 0.6
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            ref={ref}
            className="relative p-6 w-full rounded-xl backdrop-blur-sm transition-all duration-300 md:w-1/3 hover:scale-105"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
            transition={{ duration: 0.5, delay: item.delay }}
          >
            <div className="absolute inset-0 bg-gradient-to-br rounded-xl border from-white/10 to-white/5 border-white/10"></div>
            <div className="relative z-10">
              <CountUp
                start={countStart ? 0 : null}
                end={item.count}
                duration={3}
                suffix="+"
                className="block text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 md:text-7xl"
              />
              <h2 className="mt-4 text-2xl font-bold md:text-3xl">
                {item.title}
              </h2>
              <p className="mt-2 text-gray-300">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
