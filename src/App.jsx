import styles from "./style";
import { Billing, Business, CardDeal,ContactUs, Footer, Navbar, Testimonials, Hero } from "./components";
import {motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from "react";


export default function App () {

  const ref = useRef(null)
  const isInView = useInView(ref)
  const mainAnimate= useAnimation()

  useEffect(() => {
    if (isInView){
      mainAnimate.start("visible")
    }
  } ,[isInView])


  return(
  <div   className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <motion.div ref={ref} variants={{hidden:{opacity:0 , x:75 },visible:{opacity:1 , x:0 }}} initial="hidden" animate={mainAnimate} transition={{duration: 1 }} className={`${styles.boxWidth}`}>
        <Navbar />
      </motion.div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <motion.div className={`${styles.boxWidth}`}>
        <Hero />
      </motion.div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <motion.div className={`${styles.boxWidth}`}>
        <Business />
        <Testimonials />
        <Footer />
      </motion.div>
    </div>
  </div>
);
}

