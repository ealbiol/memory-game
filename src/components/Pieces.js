import React from "react"
import "../styles/MemoryTable.scss"


export const Pieces = ({
    pieces,
    numPiecesPressed,
    idPressedList,
    setNumPiecesPressed,
    buttonNamesPressedList,
    setButtonUncovered,
    buttonUncovered
}) => {


    const handleButtonPiece = (params) => {
        setNumPiecesPressed(numPiecesPressed + 1);
        buttonNamesPressedList.push(params.name)
        console.log("Planets pressed:", buttonNamesPressedList);
        setButtonUncovered(!buttonUncovered);
        if (!idPressedList.includes(params.id)) {
            idPressedList.push(params.id)
        }
        console.log("ID Pressed List:", idPressedList);
    }


    return (
        <div className="main-table">
            <div className="table-buttons">
                {
                    pieces.map((piece, index) => {
                        return (
                            <div key={index}>
                                {
                                    numPiecesPressed === 2 ?
                                        <div
                                            className={idPressedList.includes(piece.id) ? "pieceBoxUncovered" : "pieceBoxCovered"}
                                        >
                                            {
                                                idPressedList.includes(piece.id) ? piece.animalImage : ""
                                            }
                                            {/* {piece.name.toUpperCase()}{" "} */}
                                            {/* {piece.id} */}
                                        </div>

                                        :

                                        <div
                                            className={idPressedList.includes(piece.id) ? "pieceBoxUncovered" : "pieceBoxCovered"}
                                            onClick={() => handleButtonPiece(piece)}
                                        >
                                            {
                                                idPressedList.includes(piece.id) ? piece.animalImage : ""
                                            }
                                            {/* {piece.name.toUpperCase()}{" "} */}
                                            {/* {piece.id} */}
                                        </div>
                                }
                            </div>)
                    })
                }
            </div>
        </div>
    )
}