import { useState } from "react"
import "./TabSwitcher.css"

const TabSwitcher = () => {
  const[selected, setSelected] = useState({ id: 1, btn: "Home", page: "Welcome to the Home tab" })

  function handleOnClick(id){
    let selectedBtn = Data.find(btn => btn.id === id)
    setSelected(selectedBtn)
  }
  return (
    <div className="container">
      <div className="container_wrapper">
        <h2>Tab Switcher</h2>
        <ButtonList data={Data} onSmash={handleOnClick} selected={selected.id}/>
        <div className="page">{selected.page}</div>
      </div>

    </div>
  )
}

export default TabSwitcher

const Data = [
  { id: 1, btn: "Home", page: "Welcome to the Home tab" },
  {
    id: 2, btn: "Profile",
    page: "This is your Profile"
  },
  {
    id: 3, btn: "Settings", page:
      "Ajust Your Settings here"
  }
]


function ButtonList({
  data,
  onSmash,
  selected
}){
  return (
    <div className="btn_container">
      {data.map(btn => (
        <button key={btn.id } 
        className={btn.id == selected ? "selected" : "btn"}
        onClick={() => onSmash(btn.id)}>{btn.btn}</button>
      ))}
    </div>
  )
}
