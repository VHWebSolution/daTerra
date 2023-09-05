import React from 'react'
import BuffetHeader from '../components/buffetheader'
import BuffetContent from '../components/buffetcontent'
import BuffetChoices from '../components/buffetchoices'


const Buffet = () => {
  return (
    <>
    <BuffetHeader />
    <BuffetChoices />
    <BuffetContent />
    </>
  )
}

export default Buffet