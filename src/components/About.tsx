import React from 'react';
import { motion } from 'framer-motion';

// https://cdn.sanity.io/images/tuexkre/production/kldfjnvuir5e9toyuo6yjtiohthjroin-1173x1458.jpg

type Props = {}

const About = (props: Props) => {
  return (
    <div className=" flex flex-col md:flex-row relative h-screen text-center md:text-left
    max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
    </div>
  )
}

export default About;