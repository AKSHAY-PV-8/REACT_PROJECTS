import {useEffect, useState } from "react"
import "./DynamicGreeting.css"

const DynamicGreeting = () => {
    const[time, setTime] = useState(new Date())

    useEffect(() => {
        let timer = setInterval(() => {
            setTime(new Date())
        },1000)

        return () => clearInterval(timer)
    },[])
  return (
    <div>
      {time.toLocaleTimeString()}
    </div>
  )
}

export default DynamicGreeting



