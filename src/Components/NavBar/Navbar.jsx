import Sidebar from '../SideBar/Sidebar'

import { motion } from 'framer-motion'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { FaTwitter } from 'react-icons/fa'
import './Navbar.css'
function NavBar() {
  return (
    <div className="nav">
      <Sidebar />

      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          SM Saif
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/syed-mohd-saif-b46671217/">
            <FaLinkedin />
          </a>
          <a href="FaTwitter">
            <FaGithub />
          </a>
          <a href="https://leetcode.com/SAIF0556/">
            <SiLeetcode />
          </a>
          <a href="https://twitter.com/SMS_20BCS">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  )
}

export default NavBar
