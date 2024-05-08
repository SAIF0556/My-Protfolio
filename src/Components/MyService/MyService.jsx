import { useRef } from 'react'
import './MyService.scss'
import { motion, useInView } from 'framer-motion'

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
}

function MyService() {
  const ref = useRef()
  const isInView = useInView(ref, { margin: '-100px' })

  return (
    <motion.div
      id="services"
      variants={variants}
      initial="initial"
      // whileInView="animate"
      ref={ref}
      animate={isInView && 'animate'}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I love challaenges <br /> and solving problems.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="people" />
          {/*Don't let yourself make excuses for not doing the things you want to do */}
          <h2>
            Don't let
            <motion.b whileHover={{ color: 'orange' }}> yourself</motion.b> make
            excuses for
          </h2>
        </div>
        <div className="title">
          <h2>
            <motion.b whileHover={{ color: 'orange' }}> not doing</motion.b> the
            things you want to do.
          </h2>
          <button>Sam Altman</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Computer Science Enthusiast</h2>
          <p>
            I'm a passionate Computer Science graduate from Jamia Millia Islamia
            (GPA: 9.1) with a strong foundation in programming languages and web
            development frameworks.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Tech-Savvy Problem Solver</h2>
          <p>
            I enjoy tackling challenges and building innovative solutions. My
            skills encompass C++, C, JavaScript, SQL, and popular libraries like
            React.js, Node.js, and more.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Lifelong Learner</h2>
          <p>
            I'm constantly seeking opportunities to expand my knowledge and
            explore new technologies. This includes ventures into Machine
            Learning and Natural Language Processing.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Passionate Creator</h2>
          <p>
            I bring my skills to life through personal projects. From building
            responsive web applications to tackling complex data structures, I
            enjoy the process of creation.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default MyService
