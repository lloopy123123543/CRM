import React from 'react'

export default function HUEDER(props : any) {

  return (
    <div>{props.name == "" ? <div>Нету</div> : <div>Есть</div>}</div>
    )
}
