import Header from 'components/Header';
import Hero from 'components/Hero'; 
import About from 'components/About';
import Experience from 'components/experience/Experience';
import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="bg-stone-900 text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Sven-Pro Portfolio</title>
      </Head>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Experience */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      {/* Skills */}
      {/* Projects */}
      {/* Contact Me */}
    </div>
  )
}

export default Home;
