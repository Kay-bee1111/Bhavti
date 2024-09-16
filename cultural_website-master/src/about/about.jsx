import React from "react";
import { Basic } from "../Clubs/Reveal";
import grides from '../assests/photos/Black marble texture background pattern with high resolution_.jpeg';

function About() {
  return (
    <div  
      style={{backgroundImage:`url(${grides})`}}
      
      id="about"
    >
      
      <Basic>
        <h1 className="text-center text-xl md:text-3xl lg:text-3xl mt-10 md:mt-20 mb-10 md:mb-20 font-bold tracking-widest text-white font-basker">
          ABOUT ME
        </h1>
      </Basic>
      <div className="text-white text-sm md:text-lg px-8 sm:px-12 md:px-24 font-basker">
        <h3 className="mb-6">
          <p>
          In the labyrinth of code and creativity, I am a soul whose spirit dances on the edge of imagination and precision. By day, I am a dedicated coder, unraveling the mysteries of digital landscapes, sculpting lines of code into intricate web applications. But as night falls, I shed the constraints of the screen and embrace my inner poetess, a dream-weaver crafting verses that echo the rhythm of the heart.
          </p>
        </h3>

        <div className="summary2 mb-6">
          <h3 className="py-4">
            <p>
            I am not merely a developer; I am a confluence of artistry and technology. My journey through the world of software is colored by the same passion that fuels my poetry—a quest to blend beauty with function, to transform abstract ideas into tangible, elegant solutions. Each project I undertake is a canvas, each line of code a stroke of a brush, painting a picture of innovation and creativity.
            </p>
          </h3>
        </div>
        <div className="summary3 mb-6">
          <h3 className="py-4">
            <p>
            As you explore my portfolio, know that you are delving into the mind of someone who views the digital realm as a playground for artistic expression. I invite you to join me on this journey where technology meets poetry, and where every creation is a testament to the art of coding and the heart of a poetess.
            </p>
          </h3>
        </div>
        <div className="summary4">
          <h3 className="py-4">
            <p>
              Glad to meet you!
            </p>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default About;
