import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

const About = (props: Props) => {
  return (
    <div className=" flex flex-col md:flex-row relative h-screen text-center md:text-left
    max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
      initial={{ 
        x: -200,
        opacity: 0,
      }}
      transition={{ duration: 1.2 }}
      whileInView={{ 
        x: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
        src="https://images.unsplash.com/photo-1668996081584-82a6480d872f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      alt="Picture of the author"
      className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
      md:rounded-lg md::w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
    </div>
  )
}

export default About;