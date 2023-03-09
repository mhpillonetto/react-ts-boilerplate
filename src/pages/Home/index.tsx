import React from 'react'
import Heading from '../../components/Heading'
import Button from '../../components/ui/button'

const Home = () => {
  const click = () => {
    console.log('====================================');
    console.log('cliquei');
    console.log('====================================');
  }

  return (
    <>
      <Heading title={"Hello Trainer!"} />
      <Button click={click} title={"Login"} />
    </>
  )
}

export default Home
