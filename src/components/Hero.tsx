import React from 'react';
import BackgroundCircles from 'components/BackgroundCircles';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import author from '../../public/media/images/author.jpg';

type Props = {}

const Hero = ({ }: Props) => {
  const [ text, count ] = useTypewriter({
    words: [
      'Hi, The name\'s Sven', 
      'A Frontend Developer', 
      '<WhoLovesToCode />',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={author}
        alt="Picture of the author"
        width={300}
        className="rounded-full z-40"
      />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor='#ddd' />
      </h1>
    </div>
  )
}

export default Hero;