import React from 'react'

import Intro from './Intro'
import Cards from './Cards'

const Features = () => {
  return (
    <>
     <section className='px-6 py-12' aria-labelledby='features'>
        <Intro />
        <Cards />
     </section>
    </>
  )
}

export default Features