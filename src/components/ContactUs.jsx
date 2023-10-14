import {motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from "react";



export default function ContactUs () {
    

  const ref = useRef(null)
  const isInView = useInView(ref)
  const mainAnimate= useAnimation()

  useEffect(() => {
    if (isInView){
      mainAnimate.start("visible")
    }
  } ,[isInView])



    return (
    <motion.div>
    </motion.div>
    )
}