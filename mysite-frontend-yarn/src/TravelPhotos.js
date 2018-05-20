
import React, {Component} from 'react'

import Lightbox from 'react-images';


const travel_images = [
  {src: './images/tokyo-shrine.jpg',
  caption: 'Shrine in Tokyo'
  }
]

class TravelPhotos extends React {

  render(){
    return(
      <div>
        <Lightbox
          images={travel_images}
        />
      </div>
    )
  }
}

export default TravelPhotos
