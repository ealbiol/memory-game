import * as React from "react"
import "../styles/MemoryTable.scss"
import { getAllPieces } from "../data/data"
import Spider from "../images/imgpieces/spider.svg"


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
    const [numAttempts, setNumAttempts] = React.useState(0)


    console.log("ID PRESSED LIST", idPressedList);
    console.log("NUM PIECES PRESSED", numPiecesPressed);
    console.log("NUM MATCHES PAIRED", matchedPairs);
    console.log("NUM ATTEMPTS", numAttempts);


    React.useEffect(() => {
        getAllPieces().then((result) => {
            setPieces(result)
        })
    }, [])


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

    //TRY AGAIN BUTTON
    const nextTry = () => {
        setNumPiecesPressed(0);
        setIdPressedList(idPressedList.slice(0, -2))
        setButtonNamesPressedList([]);
        console.log("List of planets after Pressing Try Again:", buttonNamesPressedList.length);
        setFailedMessage("failed!");
        setFailedButtonMessage("try again");
        setNumAttempts(numAttempts + 1)
    }

    // FIND NEXT PAIR BUTTON AFTER SUCCESS
    const findNextPair = () => {
        setNumPiecesPressed(0);
        setSuccessMessage("match!");
        setSuccessButtonMessage("find next pair");
        setButtonNamesPressedList([]);
        setMatchedPairs(matchedPairs + 1)
        setNumAttempts(numAttempts + 1)
    };


    return (
        <div className="main-table">

            <div className="table-buttons">

                {/* <div>
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
                </div> */}

                {/* <Spider /> */}

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
                                            {piece.name.toUpperCase()}{" "}
                                            {/* {piece.id} */}
                                        </div>

                                        :

                                        //NO
                                        <div
                                            className={idPressedList.includes(piece.id) ? "pieceBoxUncovered" : "pieceBoxCovered"}
                                            onClick={() => handleButtonPiece(piece)}
                                        >
                                            {piece.name.toUpperCase()}{" "}
                                            {/* {piece.id} */}
                                        </div>
                                }
                            </div>)
                    })
                }
            </div>


            <div>
                <div className="evaluationWindow">
                    <div>Match the pairs🤔</div>
                    <div>1- {buttonNamesPressedList[buttonNamesPressedList.length - 2]}</div>
                    <div>2- {buttonNamesPressedList[buttonNamesPressedList.length - 1]}</div>
                    <div>
                        <div>Number of buttons pressed: {" "}{numPiecesPressed}</div>
                        <div>Total moves {numAttempts}</div>
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
                                                                        <h1>GAME ENDED!</h1>
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
        </div>

    )
}

