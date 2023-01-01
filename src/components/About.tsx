import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" flex flex-col md:flex-row relative h-screen text-center md:text-left
      max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
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
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a {" "}
          <span className="underline decoration-[#F7ABBA]/50">little</span>{" "}
           background
         </h4>
        <p className="text-base">
          Hi, I am Sven Notermans. I am from the Netherlands and it is my pleasure to meet you! 
          I like to create projects that are simple and sleek, at the same time I make sure that what I do is of high quality. 
          What I love about frontend development is the fact that it's always moving. 
          Every day is different and because every day is different, the challenges I face are also different, 
          which challenges me to find solutions. That helped me to learn how to think in solutions. 
          Not just with development but in all aspects of my life. So it greatly improved the quality of my life. 
          As a result, I have also grown as an individual. 
          That&rsquo;s what development does for me and that&rsquo;s why I do it with heart and soul.
        </p>
      </div>
    </motion.div>
  )
}

export default About;