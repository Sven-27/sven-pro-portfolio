import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article>
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
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQva_sHsMKH0SirWFOulRg4Ve0I4cyetMzBIA&usqp=CAU"
        alt="image"
      />
    </article>
  )
}

export default ExperienceCard;