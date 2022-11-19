import React from 'react';
import BackgroundCircles from 'components/BackgroundCircles';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

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
      <h2>
        <span>{text}</span>
        <Cursor cursorColor='#ddd' />
      </h2>
    </div>
  )
}

export default Hero;