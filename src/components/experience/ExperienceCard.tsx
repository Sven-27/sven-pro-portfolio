import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import author from '../../../public/media/images/author.jpg';


type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[700px] snap-center bg-[#292929] p-5 hover:opacity-100
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden" 
    >
      <motion.img
        initial={{
          x: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className="w-32 h-32 ml-[180px] rounded-full xl:w-[150px] xl:h-[150px]"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2X77DbHd2shrBl643087z-JFSjCIwBeYBYg&usqp=CAU"
        alt="image"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Frontend Engineer</h4>
        <p className="font-bold text-2xl mt-1">Bee Ideas</p>
        <div className="flex space-x-2 my-2">
          <Image 
            src={ author }
            alt=""
            className="h-10 w-10 rounded-full"
          />
          <Image 
            src={ author }
            alt=""
            className="h-10 w-10 rounded-full"
          />
          <Image 
            src={ author }
            alt=""
            className="h-10 w-10 rounded-full"
          />
          <Image 
            src={ author }
            alt=""
            className="h-10 w-10 rounded-full"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">Started work... - Ended work...</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points Summary points Summary points Summary points</li>
          <li> Summary points Summary points Summary points Summary points</li>
          <li> Summary points Summary points Summary points Summary points</li>
          <li> Summary points Summary points Summary points Summary points</li>
          <li> Summary points Summary points Summary points Summary points</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard;