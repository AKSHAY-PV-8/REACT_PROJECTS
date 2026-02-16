import { useState } from "react"

const AgeCalculator = () => {
    
    const [DOB, setDOB] = useState(new Date())
    const [age, setAge] = useState({year: null, month: null})

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const currentDay = new Date().getDate()
    let selectedDay = new Date(DOB).getDate()
    let selectedMonth = new Date(DOB).getMonth() + 1


    let year = selectedMonth <= currentMonth ? currentYear - new Date(DOB).getFullYear() : (currentYear - new Date(DOB).getFullYear()) - 1
    let month = selectedDay <= currentDay ? ((12 - selectedMonth) + currentMonth) % 12 : ((12 - selectedMonth) + currentMonth) - 1
    let days = currentDay == selectedDay ? 0 : currentDay > selectedDay ? currentDay - selectedDay : selectedDay - currentDay

    console.log(selectedDay)
    console.log("current", currentDay)



    function handleCalculate(){
        setAge({year: year, month: month, days: days})
    }
    
  return (
    <div className="container">
        <h2>Age Calculator</h2>
        <input type="date" onChange={e => setDOB(e.target.value)}/>
        <button onClick={() => handleCalculate()}>Calculate Age</button>
        {age.year ? <p>{age.year + " years " + age.month + " month " + days + "days"}</p> : ""}
    </div>
  )
}

export default AgeCalculator






