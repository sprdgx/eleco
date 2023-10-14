import styles from "../style";
import { vector2 } from "../assets";
import GetStarted from "./GetStarted";
import {motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from "react";

const Hero = () => {

  const ref = useRef(null)
  const isInView = useInView(ref)
  const mainAnimate= useAnimation()


  useEffect(() => {
    if (isInView){
      mainAnimate.start("visible")
    }
  } ,[isInView])



  return (
    <motion.section ref={ref} variants={{hidden:{opacity:0 , x:75 },visible:{opacity:1 , x:0 }}} initial="hidden" animate={mainAnimate} transition={{duration: 1 , delay: 0.7}} className={`flex md:flex-row flex-col`}>
      <div id="home" className={` flex-auto flex justify-center items-start flex-col ss:w-[450px] pt-[75px] xl:px-0 sm:px-16 px-6`}>
        <div  className="flex flex-row justify-between items-center w-full ss:w-[100%]">
          <h1 id="home" className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div className="ss:flex hidden ss:pl-[150px] md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[48px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
         Electricity Impliment.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <motion.div ref={ref} variants={{hidden:{opacity:0 , x:75 },visible:{opacity:1 , x:0 }}} initial="hidden" animate={mainAnimate} transition={{duration: 1 , delay: 0.7}} className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={vector2}  alt="billing" className="w-[70%] h-[70%] relative z-[5] rounded-[20%]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </motion.div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </motion.section>
  );
};

export default Hero;
