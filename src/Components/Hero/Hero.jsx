import './hero.scss'
import { motion } from 'framer-motion'
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 3,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 1,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
}

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-20%',
    opacity: 1,
    transition: {
      duration: 10,
      repeat: Infinity,
    },
  },
}
function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>SM SAIF</motion.h2>
          <motion.h1 variants={textVariants}>Software Engineer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              <a href="https://drive.google.com/file/d/1GOVgbLVn8ElawIKGX4OVN2Xk2Zb7hP5M/view?usp=sharing">
                See My Resume
              </a>
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <a href="#Contact">
            <motion.img
              variants={textVariants}
              src="./scroll.png"
              alt="scroll"
              animate="scrollButton"
            />
          </a>
        </motion.div>
      </div>
      <motion.div
        className="slidingText"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        WEB
      </motion.div>
      <div className="imageConatiner">
        <img src="./20240430_122201137_iOS.jpg" alt="profile-pic"></img>
      </div>
    </div>
  )
}

export default Hero
