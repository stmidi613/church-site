import React from 'react'

import AUimage from "../../images/HandHeartSun.jpg"

const AboutUsImage = () => {
  return (
    <>
      <div className="grid place-content-center pb-8">
        <img
          className="w-full pt-8 px-8"
          src={AUimage}
          alt="Hands in a heart shape around the sun"
        />
      </div>
    </>
  )
}

export default AboutUsImage