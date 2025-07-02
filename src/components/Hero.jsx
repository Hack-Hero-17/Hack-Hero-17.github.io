import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto pb-20`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX}  flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Hariharan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop MERN Stack Web Applications, train{" "}
            <br className="sm:block hidden" />
            various AI & ML models.
          </p>
        </div> */}

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Hariharan</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <Typewriter
              words={[
                "I develop MERN Stack Web Applications.",
                "I train AI & ML models.",
                "I build interactive Web UIs.",
                "I love solving Real-life Problems with code.",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </p>
        </div>
      </div>

      <div className="h-[50px]" />

      <ComputersCanvas className="mt-10 mb-50" />

      <div className="h-[600px]">
        <div className="absolute mt-20 xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px]  h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
