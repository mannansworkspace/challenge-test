import { messageThemes } from "../../../constants"
import DeleteIcon from "../../../assets/Images/deleteIcon.svg"
import { useEffect } from "react"

const NotificationBar = ({ message, theme, onClose }) => {

    // clearing notification after 3secs
    useEffect(() => {
        const timeOut = setTimeout(() => {
            onClose()
        }, 3 * 1000)

        return () => {
            clearTimeout(timeOut)
        }
    }, [])

    switch (theme) {
        case messageThemes.INFO: {
            return <div className="messageTheame">
                <div className="SucessMessage">
                    <p className="SucessMessage__text">{message}</p>
                </div>
                <button onClick={onClose} className="DeleteIcon">
                    <img src={DeleteIcon} alt="DeleteIcon" />
                </button>
            </div>
        }
        case messageThemes.ERROR: {
            return <div className="messageTheame">
                <div className="ErrorMessage">
                    <p className="ErrorMessage__text">{message}</p>
                </div>
                <button className="DeleteIcon" onClick={onClose}>
                    <img src={DeleteIcon} alt="DeleteIcon" />
                </button>
            </div>
        }
    }
}

export default NotificationBar