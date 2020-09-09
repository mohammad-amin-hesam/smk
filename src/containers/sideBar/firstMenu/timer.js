import React, { useState, useEffect } from 'react'

const Timer = () => {
  const [time, setTime] = useState('')
  const timeClock = setInterval(() => {
    const date = new Date()
    setTime(`${date.getMinutes()}:${date.getSeconds()} : ${date.getHours()}`)
  }, 1000)

  useEffect(() => {
    return () => {
      clearInterval(timeClock)
    }
  }, [timeClock])

  return <div style={{ fontSize: '10px' }}>{time}</div>
}

export default Timer
