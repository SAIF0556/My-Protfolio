import Sidebar from '../SideBar/Sidebar'

import { motion } from 'framer-motion'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { FaTwitter } from 'react-icons/fa'
import './Navbar.scss'
function NavBar() {
  return (
    <div className="navbar">
      <Sidebar />

      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          SM SAIF
        </motion.span>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/syed-mohd-saif-b46671217/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/SAIF0556"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://leetcode.com/SAIF0556/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLeetcode />
          </a>
          <a
            href="https://twitter.com/SMSaif86121972"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  )
}

export default NavBar
