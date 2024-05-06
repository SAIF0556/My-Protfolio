import React, { useRef } from 'react'
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
  {
    id: 1,
    title: 'React Meet Up',
    img:
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    desc:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minus, quibusdam molestias odio provident amet aut maiores saepe sunt distinctio?',
  },
  {
    id: 2,
    title: 'Next js App',
    img: './pexels-fauxels-3183150.jpg',
    desc:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minus, quibusdam molestias odio provident amet aut maiores saepe sunt distinctio?',
  },
  {
    id: 3,
    title: 'Tic Tac Toe',
    img: './pexels-fauxels-3183150.jpg',
    desc:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minus, quibusdam molestias odio provident amet aut maiores saepe sunt distinctio?',
  },
  {
    id: 4,
    title: 'Food Order',
    img: './pexels-fauxels-3183150.jpg',
    desc:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minus, quibusdam molestias odio provident amet aut maiores saepe sunt distinctio?',
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
            <button>See Project</button>
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
