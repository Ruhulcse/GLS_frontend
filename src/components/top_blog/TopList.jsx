import React from 'react'
import TopItem from './TopItem'
function TopList({item}) {
  return (
    <div className="">
      {item.map((item, i) => (
        <TopItem key={i} item={item} />
      ))}
    </div>
  )
}

export default TopList