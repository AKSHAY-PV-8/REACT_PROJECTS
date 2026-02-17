import { useState } from "react"
import "./ToggleBtn.css"

function useToggle(initialValue = false){
    const[value, setValue] = useState(initialValue)

    const toggle = () => {
        setValue(!value)
    }
    return[value, toggle]
}


const ToggleBtn = () => {
    const [isOn, toggle] = useToggle(false)
  return (
    <div>
        <button onClick={toggle}>{isOn ? "ON" : "FALSE"}</button>
    </div>
  )
}

export default ToggleBtn
