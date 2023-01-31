import React from 'react'

import sunBible from "../../images/bible.png"

const StudyGuideMCImage = () => {
  return (
    <>
      <div className="bg-lightgray grid place-content-center pb-8">
        <img
          className="w-16 pt-8 mb-[-50px]"
          src={sunBible}
          alt="An open Bible with a cross and sun in the background"
        />
      </div>
    </>
  )
}

export default StudyGuideMCImage