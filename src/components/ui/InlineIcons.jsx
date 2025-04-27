import React from 'react'
import { FaLinkedin, FaGithub, FaDiscord, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const InlineIcons = () => {

  const aClass = () =>
    "w-[28px] h-[28px] flex items-center justify-center rounded-full bg-white hover:bg-gray-200 shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400";
  
  const iconsclass = () => "w-[15px] h-[15px] text-gray-700";

  return (
    <div className="flex items-center gap-4">
      <a href="https://www.linkedin.com/in/jhon-rexey-cabera-a2b8a22ba/" className={aClass()} target="_blank" rel="noopener noreferrer">
        <FaLinkedin className={iconsclass()} />
      </a>
      <a href="https://github.com/hikaru432" className={aClass()} target="_blank" rel="noopener noreferrer">
        <FaGithub className={iconsclass()} />
      </a>
      <a href="https://discord.com/users/hikaru3495" className={aClass()} target="_blank" rel="noopener noreferrer">
        <FaDiscord className={iconsclass()} />
      </a>
      <a href="https://web.facebook.com/jhon.rexey/" className={aClass()} target="_blank" rel="noopener noreferrer">
        <FaFacebook className={iconsclass()} />
      </a>
      <a href="https://www.instagram.com/jhon_rexey/" className={aClass()} target="_blank" rel="noopener noreferrer">
        <FaInstagram className={iconsclass()} />
      </a>
      <a href="https://web.facebook.com/jhon.rexey/" className={aClass()} target="_blank" rel="noopener noreferrer">
        <FaTwitter className={iconsclass()} />
      </a>
    </div>
  )
}

export default InlineIcons;