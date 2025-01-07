import React from 'react'
import { useState, useEffect } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardDescription, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import Travel from '../Travel'

const MyTravels = () => {
  const [travels, setTravels] = useState([])


  useEffect(() => {
    const myTravels = JSON.parse(localStorage.getItem('myTravels')) || [];
    setTravels(myTravels);

    console.log(myTravels)
  }, [])

  return (
    <>

      <Travel />

    </>
  )
}

export default MyTravels