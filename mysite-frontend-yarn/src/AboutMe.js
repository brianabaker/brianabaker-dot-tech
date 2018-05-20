
import React from 'react'

import {MeEatingVietnameseNoodles} from './images/me-noodles-vietnam.jpg'

const AboutMe = (props) => {

  return(
    <div>
      <p>I've had a fair amount of adventures in my life thus far.</p>
      <p>Born and raised in Miami, Fl, I remember falling in love with computers at a young age. I was making websites by the time I was 13, building robots by 14, and building computers by 15. I competed in a variety of national robotics competitions throughtout high school, my favorite being BattleBots.
      </p>
      <p>I was all set to pursue a career in tech, but I decided I wanted to see more of the world, and to explore my options. A four year degree was too much commitment for my 18 year old self, and the economy had just crashed. Stories were all about jobless grads with massive student loans, and I didn't feel so commited to any career that I was ready to go to that length. I decided to pursue other interests with my time, and to challenge myself to get out of my comfort zone. I had been pretty dorky my whole life, and I wanted to get out from behind a computer and challenge myself to interact with the world without a screen.</p>
      <p>I started working at restaurants to force myself to socialize, I decided to further break out of my comfort zone by traveling by myself.</p>
      <p>I bought my first one-way plane ticket when I was 21, and got stung by the travel bug hard.</p>
      <img src={MeEatingVietnameseNoodles} alt="Noodles in Vietnam"/>
    </div>
  )
}

export default AboutMe
