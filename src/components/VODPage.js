/**
 * ...
 */

import React from 'react'
import configs from './../settings/vimeoConfig'
import VODPricing from './VODPricing'

const VODPage = (props) => {
  
  const { id, video } = props
  const uri = `https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=${configs.app_id}`

  return (
    <div>
      <div className="iframe-container">
        <iframe
          src={uri}
          width="100%"
          height="620"
          frameBorder="0"
          title={video.film.name}
          allow="autoplay;
          fullscreen"
          allowFullScreen
        />
      </div>

      <h1 className="title">
        {video.film.name}
      </h1>
      <VODPricing
        {...video.rent}
      />
      <p>{video.description}</p>
    </div>
  )
}
 
export default VODPage
