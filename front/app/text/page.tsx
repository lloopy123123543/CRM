"use client"
import React, { useEffect, useState } from 'react'
import HUEDER from '../components/hueder'
import Cars from './cars'
import CAR from './car'

export default function TEST() {
  const [Cures, setCures] = useState([{}])
  const [name, setname] = useState('')
  const [cost, setcost] = useState('')

  useEffect(() => {
    setCures(CAR)

  }, [])

  const checkName = (e:any) => {
    setname(e.target.value)
  }

  const checkCost = (e:any) => {
    setcost(e.target.value)
  }

  const sendCar = (e:any) => {
    e.preventDefault();

    const newCar = {
      id: Cures.length + 1,
      name: name,
      cost: cost
    }

    setCures(prev => [...prev, newCar])
  }

  return (
    <div>
      <HUEDER name="ы" />
      <div>
        <form>
          <input placeholder='name' onChange={checkName}></input>
          <input placeholder='cost' onChange={checkCost}></input>
          <button onClick={sendCar}>privet</button>
 </form>
        <Cars car={Cures} />
      </div>
    </div>
  )
}