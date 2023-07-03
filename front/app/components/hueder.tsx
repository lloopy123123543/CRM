import React from 'react'

export default function HUEDER(props : any) {
    console.log(props)
  return (
    <div>{props.name == "" ? <div>Нету</div> : <div>Есть</div>}</div>
    )
}
