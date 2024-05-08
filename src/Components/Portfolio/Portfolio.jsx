import React, { useRef } from 'react'
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
  {
    id: 1,
    title: 'Food Order App',
    img:
      'https://images.pexels.com/photos/4344573/pexels-photo-4344573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    desc: `Developed a full-stack website using React hooks and custom hooks, enabling users to manage all states in a single component using useContext and useReducer hooks. Implemented a reusable modal component using useEffect for displaying cart items and checkout form, enhancing user interaction. Handled HTTP loading and error states to ensure smooth data fetching and updating processes within React components.`,
    link: 'https://saif-food-order-app.netlify.app/',
  },
  {
    id: 2,
    title: 'Event Management App',
    img: './pexels-fauxels-3183150.jpg',
    desc: `Developed a responsive and production-ready web application using React.js and Node.js,
featuring React Router for seamless navigation. Implemented a custom hook for handling API calls to the backend from different
components. Utilized Tanstack Query for fetching and updating the data and implemented optimistic updating by caching the
data, optimizing network requests. User can also search the data.`,
    link: 'https://smsaif.netlify.app/events',
  },
  {
    id: 3,
    title: 'The Final Coundown',
    img:
      'https://images.pexels.com/photos/1209999/pexels-photo-1209999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    desc: `This countdown app uses React's useEffect and useRef for efficient timer management and avoids unnecessary re-renders. It might even utilize usePortals for a unique display `,
    link: 'https://final-countdown-game.vercel.app/',
  },
  {
    id: 4,
    title: 'Many more',
    img:
      'https://images.pexels.com/photos/11035539/pexels-photo-11035539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    desc: `For more projects visit my github account`,
    link: 'https://github.com/SAIF0556',
  },
]

const Single = ({ item }) => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
  })

  const y = useTransform(scrollYProgress, [0, 1], [-35, 35])

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <motion.div className="imgContainer" ref={ref}>
            <img src={item.img} alt="img" />
          </motion.div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noreferrer">
              <button>See Project</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Portfolio() {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Work</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Portfolio
