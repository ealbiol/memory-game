import * as React from "react"
import "../styles/MemoryTable.scss"
import { getAllPieces } from "../data/data"

export const MemoryTable = () => {

    const [pieces, setPieces] = React.useState([])
    const [buttonUncovered, setButtonUncovered] = React.useState(false)
    const [idPressedList, setIdPressedList] = React.useState([])
    const [numPiecesPressed, setNumPiecesPressed] = React.useState(0)
    const [buttonNamesPressedList, setButtonNamesPressedList] = React.useState([])
    const [successMessage, setSuccessMessage] = React.useState("Match!")
    const [failedMessage, setFailedMessage] = React.useState("Failed!")
    const [successButtonMessage, setSuccessButtonMessage] = React.useState("find next pair")
    const [failedButtonMessage, setFailedButtonMessage] = React.useState("try again")
    const [matchedPairs, setMatchedPairs] = React.useState(0)

    console.log("ID PRESSED LIST", idPressedList);
    console.log("NUM PIECES PRESSED", numPiecesPressed);
    console.log("NUM MATCHES PAIRED", matchedPairs);

    React.useEffect(() => {
        getAllPieces().then((result) => {
            setPieces(result)
        })
    }, [])

    const handleButtonPiece = (params) => {
        // console.log("Button id:", params.id);
        // console.log("Full Object", params);
        setNumPiecesPressed(numPiecesPressed + 1);
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

    //TRY AGAIN BUTTON
    const nextTry = () => {
        setNumPiecesPressed(0);
        setIdPressedList(idPressedList.slice(0, -2))
        setButtonNamesPressedList([]);
        console.log("List of planets after Pressing Try Again:", buttonNamesPressedList.length);
        setFailedMessage("failed!");
        setFailedButtonMessage("try again");
    }

    // FIND NEXT PAIR BUTTON AFTER SUCCESS
    const findNextPair = () => {
        setNumPiecesPressed(0);
        setSuccessMessage("match!");
        setSuccessButtonMessage("find next pair");
        setButtonNamesPressedList([]);
        setMatchedPairs(matchedPairs + 1)
    };


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
                                    numPiecesPressed === 2 ?
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
                    <div>{buttonNamesPressedList[buttonNamesPressedList.length - 2]}</div>
                    <div>{buttonNamesPressedList[buttonNamesPressedList.length - 1]}</div>
                </div>
                <div>
                    <div>Number of buttons pressed: {" "}{numPiecesPressed}</div>
                    {
                        buttonNamesPressedList[buttonNamesPressedList.length - 2] && buttonNamesPressedList[buttonNamesPressedList.length - 1] !== 0 ?
                            <div>
                                {
                                    buttonNamesPressedList.length % 2 === 0 ?
                                        <div>
                                            {
                                                buttonNamesPressedList[buttonNamesPressedList.length - 2] === buttonNamesPressedList[buttonNamesPressedList.length - 1] ?
                                                    <div>
                                                        <h1>{successMessage}</h1>
                                                        <div
                                                            onClick={() => findNextPair()}
                                                        >
                                                            {
                                                                matchedPairs === 9 ?
                                                                    <div>Game ended</div>
                                                                    :
                                                                    <div>{successButtonMessage.toUpperCase()}</div>
                                                            }

                                                        </div>
                                                    </div>
                                                    :
                                                    <div>
                                                        <h1>{failedMessage}</h1>
                                                        <div
                                                            onClick={() => nextTry()}
                                                        >
                                                            {failedButtonMessage.toUpperCase()}
                                                        </div>
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

