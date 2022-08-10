import * as React from "react"
import "../styles/MemoryTable.scss"
import { getAllPieces } from "../data/data"

export const MemoryTable = () => {

    const [pieces, setPieces] = React.useState([])
    const [buttonStatus, setButtonStatus] = React.useState(false)
    const [buttonUncovered, setButtonUncovered] = React.useState(false)


    React.useEffect(() => {
        getAllPieces().then((result) => {
            setPieces(result)
        })
    }, [])

    const handleButtonPiece = (params) => {
        setButtonStatus(!buttonStatus)
        console.log("Boolean Status", buttonStatus, params.id);
        setButtonUncovered(!buttonUncovered)
    }

    return (
        <div className="table">
            {
                pieces.map((piece, index) => {
                    return (
                        <div key={index}>
                            {/* <div style={{ backgroundColor: "salmon" }}>{piece.name !== "Earth" ? piece.name : ""}</div>
                        {piece.name !== "Earth" && <div>{piece.name}</div>} */}
                            <div className={buttonUncovered ? "pieceBoxUncovered" : "pieceBoxCovered"} onClick={() => handleButtonPiece(piece)}>{piece.name} {piece.id}</div>
                        </div>)
                })
            }
        </div>
    )
}

