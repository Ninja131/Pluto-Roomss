import Map from '@/components/propertyListComp/Map'
import SearchComp from '@/components/propertyListComp/SearchComp'
import React from 'react'

import PropertyListing from '@/components/propertyListComp/PropertyList'

const PropertyList = () => {
  return (
    <>
    <SearchComp/>
    <Map/>
    <PropertyListing/>
    </>
  )
}

export default PropertyList