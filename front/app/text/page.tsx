"use client"
import React, { useEffect, useState } from 'react'
import HUEDER from '../components/hueder'
import Cars from './cars'
import CAR from './car'

export default function TEST() {
  const [CarsOut, setCarsOut] = useState([{}])
  const [name, setname] = useState('')
  const [cost, setcost] = useState('')

  const checkName = (e:any) => {
    setname(e.target.value)
  }

  const checkCost = (e:any) => {
    setcost(e.target.value)
  }

  const sendCar = (e: any) => {
    e.preventDefault();
    
    let newCar = {
      id: CAR.length + 1,
      name: name,
      cost: cost
    }

    setCarsOut(prev => [...prev , newCar])
  }

  useEffect(() => {
    setCarsOut(CAR)
  },[])

  return (
    <div>
      <HUEDER name="ы" />
      <div>
        <form>
          <input placeholder='name' onChange={e => checkName(e)}></input>
          <input placeholder='cost' onChange={e => checkCost(e)}></input>
          <button onClick={e => sendCar(e)}>privet</button>
 </form>
        <Cars car={CarsOut} />
      </div>
    </div>
  )
}