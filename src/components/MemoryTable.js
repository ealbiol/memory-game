import * as React from "react"
import "../styles/MemoryTable.scss"
import { getAllPieces } from "../data/data"

export const MemoryTable = () => {

    const [pieces, setPieces] = React.useState([])
    const [buttonUncovered, setButtonUncovered] = React.useState(false)
    const [idPressedList, setIdPressedList] = React.useState([])
    const [numPiecesPressed, setNumPiecesPressed] = React.useState(0)
    const [buttonNamesPressedList, setButtonNamesPressedList] = React.useState([])




    React.useEffect(() => {
        getAllPieces().then((result) => {
            setPieces(result)
        })
    }, [])

    const handleButtonPiece = (params) => {
        console.log("Button id:", params.id);
        console.log("Full Object", params);
        setNumPiecesPressed(numPiecesPressed + 1);
        console.log("Number Buttons pressed:", numPiecesPressed);
        buttonNamesPressedList.push(params.name)
        console.log("Planets pressed:", buttonNamesPressedList);
        setButtonUncovered(!buttonUncovered);
        if (!idPressedList.includes(params.id)) {
            idPressedList.push(params.id)
        }
        console.log("ID Pressed List:", idPressedList);
        // params.isActive = "Yes"
        // console.log("AA", params.isActive);

    }

    const nextTry = () => {
        setNumPiecesPressed(0);
        setIdPressedList([]);
        setButtonNamesPressedList(buttonNamesPressedList.splice(buttonNamesPressedList.length - 2, 2))
        console.log("List of planets after Pressing Tra Again:", buttonNamesPressedList.length);
    }

    const findNextPair = () => {

    }

    return (
        <div className="main-table">
            <div className="table-buttons">

                <div>
                    {
                        numPiecesPressed === 2
                            ?
                            <div>
                                <div>Number of buttons pressed: {numPiecesPressed}</div>
                                <div>Evaluation Moment</div>
                            </div>
                            :
                            <div>Number of buttons pressed: {numPiecesPressed}</div>
                    }
                </div>


                {
                    pieces.map((piece, index) => {
                        return (
                            <div key={index}>

                                {
                                    numPiecesPressed >= 2 ?
                                        //YES, equal or higher than 2
                                        <div
                                            className={idPressedList.includes(piece.id) ? "pieceBoxUncovered" : "pieceBoxCovered"}
                                        >
                                            {piece.name}{" "}{piece.id}
                                        </div>

                                        :

                                        //NO
                                        <div
                                            className={idPressedList.includes(piece.id) ? "pieceBoxUncovered" : "pieceBoxCovered"}
                                            // className={buttonUncovered ? "pieceBoxUncovered" : "pieceBoxCovered"}
                                            onClick={() => handleButtonPiece(piece)}
                                        >
                                            {piece.name}{" "}{piece.id}
                                        </div>
                                }
                            </div>)
                    })
                }
            </div>
            <div>
                <div className="evaluationWindow">
                    <div>EVALUATION TIME</div>
                    <div>{buttonNamesPressedList[0]}</div>
                    <div>{buttonNamesPressedList[1]}</div>
                </div>
                <div>
                    <div>Number of buttons pressed: {" "}{buttonNamesPressedList.length}</div>
                    {
                        buttonNamesPressedList[0] && buttonNamesPressedList[1] !== 0 ?
                            <div>
                                {
                                    buttonNamesPressedList.length === 2 ?
                                        <div>
                                            {
                                                buttonNamesPressedList[0] === buttonNamesPressedList[1] ?
                                                    <div>
                                                        <h1>MATCH!</h1>
                                                        <button
                                                            onClick={() => findNextPair()}
                                                        >
                                                            FIND NEXT PAIR
                                                        </button>
                                                    </div>
                                                    :
                                                    <div>
                                                        <button
                                                            onClick={() => nextTry()}
                                                        >
                                                            TRY AGAIN
                                                        </button>
                                                    </div>
                                            }
                                        </div>
                                        :
                                        <div>Press one more button...</div>
                                }
                            </div>
                            :
                            <div></div>
                    }
                </div>
            </div>
        </div>

    )
}

