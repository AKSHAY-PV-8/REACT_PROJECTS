import { useState } from "react"
import "./SideBar.css"

const icons = ["Home", "About", "Services", "Contact"]
const SideBar = () => {
    const [isShown, setIsShown] = useState(false)
    return (
        <div className="con">
            {isShown ?
                <>
                    <div className="showicon" onClick={() => setIsShown(false)}>
                        <img src="../../public/application.png" alt="" />
                    </div>
                    <div className="sideBar">
                        {icons.map(icon => (
                            <div className="text">{icon}</div>
                        )
                        )}
                    </div>

                </> :
                <div className="icon" onClick={() => setIsShown(true)}>
                    <img src="../../public/application.png" alt="" />
                </div>}

        </div>
    )
}

export default SideBar

