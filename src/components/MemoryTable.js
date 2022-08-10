import * as React from "react"
import "../styles/MemoryTable.scss"
import { getAllPieces } from "../data/data"

export const MemoryTable = () => {

    const [pieces, setPieces] = React.useState([])
    const [buttonStatus, setButtonStatus] = React.useState(false)

    React.useEffect(() => {
        getAllPieces().then((result) => {
            setPieces(result)
        })
    }, [])

    const handleButtonPiece = () => {
        setButtonStatus(!buttonStatus)
        console.log("AA", buttonStatus);
    }

    return (
        <div className="table">
            {
                pieces.map((piece, index) => {
                    return (
                        <div key={index}>
                            {/* <div style={{ backgroundColor: "salmon" }}>{piece.name !== "Earth" ? piece.name : ""}</div>
                        {piece.name !== "Earth" && <div>{piece.name}</div>} */}
                            <div className="pieceBox" onClick={() => handleButtonPiece()}>{piece.name}</div>
                        </div>)
                })
            }
        </div>
    )
}

