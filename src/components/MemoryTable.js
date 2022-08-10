import * as React from "react"
import "../styles/MemoryTable.scss"
import { getAllPieces } from "../data/data"

export const MemoryTable = () => {

    const [pieces, setPieces] = React.useState([])
    const [buttonUncovered, setButtonUncovered] = React.useState(false)
    const [idPressedList, setIdPressedList] = React.useState([])


    React.useEffect(() => {
        getAllPieces().then((result) => {
            setPieces(result)
        })
    }, [])

    const handleButtonPiece = (params) => {
        console.log("Button id:", params.id);
        setButtonUncovered(!buttonUncovered);
        if (!idPressedList.includes(params.id)) {
            idPressedList.push(params.id)
        }
        console.log("ID Pressed List:", idPressedList);
        // params.isActive = "Yes"
        // console.log("AA", params.isActive);
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

