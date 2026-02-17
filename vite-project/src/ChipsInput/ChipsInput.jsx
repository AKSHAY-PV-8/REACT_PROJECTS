import { useEffect, useState } from "react"
import "./ChipsInput.css"

let index = 0

const ChipsInput = () => {

    const [chip, setChip] = useState("")
    const [chips, setChips] = useState([{id: null, chip: null}])

    

    function handleDelete(id){
        let fileterd = chips.filter(item => item.id !== id)
        setChips(fileterd)

    }

    useEffect(() => {
        window.addEventListener("keydown", handlePress)

        function handlePress(event) {
            if (event.key == "Tab") {
                if (chip) {
                    setChips([...chips, {id: index ++, chip: chip}])
                    setChip("")
                }
            }
        }

        return () => window.removeEventListener("keydown", handlePress)
    })

    return (
        <div className="container">
            <h1>Chips Input</h1>
            <input type="text" value={chip} onChange={e => setChip(e.target.value)} placeholder="Type a chip and press Tab"/>
            <div>
                {chips.map(item =>
                    item.chip? 
                    <span className="chip" key={item.id}>
                        <span>{item.chip}</span>
                        <span onClick={() => handleDelete(item.id)}>❌</span>
                    </span>: ""
                    )}
            </div>
        </div>
    )
}

export default ChipsInput
