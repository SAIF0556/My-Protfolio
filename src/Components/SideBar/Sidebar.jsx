import './sidebar.scss'
const variants = {
  open: {
    clipPath: 'circle(1200px at 50px 50px)',
    transition: {
      type: 'spring',
      stiffness: 20,
    },
  },
  close: {
    clipPath: 'circle(30px at 50px 50px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

import { useState } from 'react'
import { motion } from 'framer-motion'
import ToggleButton from './ToggleButton/ToggleButton'
import Links from './links/Links'
function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.div className="sidebar" animate={open ? 'open' : 'close'}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  )
}

export default Sidebar
