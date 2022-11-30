import React, { useState, useEffect } from "react"
import "../styles/MemoryTable.scss"
import { getAllPieces } from "../data/data"
import { Pieces } from "./Pieces"


export const MemoryTable = () => {
    const [pieces, setPieces] = useState([])
    const [buttonUncovered, setButtonUncovered] = useState(false)
    const [idPressedList, setIdPressedList] = useState([])
    const [numPiecesPressed, setNumPiecesPressed] = useState(0)
    const [buttonNamesPressedList, setButtonNamesPressedList] = useState([])
    const [successMessage, setSuccessMessage] = useState("Match!")
    const [failedMessage, setFailedMessage] = useState("Failed!")
    const [successButtonMessage, setSuccessButtonMessage] = useState("find next pair")
    const [failedButtonMessage, setFailedButtonMessage] = useState("try again")
    const [matchedPairs, setMatchedPairs] = useState(0)
    const [numAttempts, setNumAttempts] = useState(0)


    console.log("ID PRESSED LIST", idPressedList);
    console.log("NUM PIECES PRESSED", numPiecesPressed);
    console.log("NUM MATCHES PAIRED", matchedPairs);
    console.log("NUM ATTEMPTS", numAttempts);


    useEffect(() => {
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

            <Pieces
                pieces={pieces}
                numPiecesPressed={numPiecesPressed}
                idPressedList={idPressedList}
                setNumPiecesPressed={setNumPiecesPressed}
                buttonNamesPressedList={buttonNamesPressedList}
                setButtonUncovered={setButtonUncovered}
                buttonUncovered={buttonUncovered}
            />

            <div>
                <div className="evaluationWindow">
                    <div className="evaluationTitle">Match the pairs🤔</div>
                    <div>1- {buttonNamesPressedList[buttonNamesPressedList?.length - 2]}</div>
                    <div>2- {buttonNamesPressedList[buttonNamesPressedList?.length - 1]}</div>
                    <div>
                        <div>Number of buttons pressed: {" "}{numPiecesPressed}</div>
                        <div>Total moves {numAttempts}</div>
                        {
                            buttonNamesPressedList[buttonNamesPressedList?.length - 2] && buttonNamesPressedList[buttonNamesPressedList?.length - 1] !== 0 ?
                                <div>
                                    {
                                        buttonNamesPressedList?.length % 2 === 0 ?
                                            <div>
                                                {
                                                    buttonNamesPressedList[buttonNamesPressedList?.length - 2] === buttonNamesPressedList[buttonNamesPressedList?.length - 1] ?
                                                        <div>
                                                            <h1>{successMessage}</h1>
                                                            <div
                                                                onClick={() => findNextPair()}
                                                            >
                                                                {
                                                                    matchedPairs === 9 ?
                                                                        <h1>GAME ENDED!</h1>
                                                                        :

                                                                        <div>{successButtonMessage?.toUpperCase()}</div>
                                                                }

                                                            </div>
                                                        </div>
                                                        :
                                                        <div>
                                                            <h1>{failedMessage &&
                                                                (failedMessage)
                                                            }</h1>
                                                            {/* Si failedMessage es undefined o null no se va a mostrar nada */}
                                                            <div
                                                                className="stepButton"
                                                                onClick={() => nextTry()}
                                                            >
                                                                <div>{failedButtonMessage?.toUpperCase()}</div>
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

