import React from 'react'
import DescriptionCard from './DescriptionCard'
import AmenitiesCard from './AmenitiesCard'

import ContainerRight from './ContainerRight'

const SectionContent = () => {
  return (
    <>
    <section className='max-container border-red mt-10 flex gap-4 relative'>


      {/* left container */}
      <div className='flex flex-col gap-4 flex-1/4'>
        <DescriptionCard/>
        {/* <AmenitiesCard/> */}
      </div>

      {/* right container */}
      {/* <ContainerRight/> */}
        

    </section>
    </>
  )
}

export default SectionContent