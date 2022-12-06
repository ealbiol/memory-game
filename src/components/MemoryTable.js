import React, { useState, useEffect } from "react"
import "../styles/MemoryTable.scss"
import { getAllPieces } from "../data/data"
import { Pieces } from "./Pieces"
import { EvaluationWindow } from "./EvaluationWindow"
import { DifficultyPanel } from "./DifficultyPanel"

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
    const [difficultyLevel, setDifficultyLevel] = useState(0)
    const [resetGame, setResetGame] = useState(false)


    // console.log("ID PRESSED LIST", idPressedList);
    // console.log("NUM PIECES PRESSED", numPiecesPressed);
    // console.log("NUM MATCHES PAIRED", matchedPairs);
    // console.log("NUM ATTEMPTS", numAttempts);


    useEffect(() => {
        console.log("POR EL USE EFECT")
        setIdPressedList([]);
        getAllPieces().then((result) => {
            setPieces(result.slice(0, difficultyLevel).sort(function (a, b) { return 0.5 - Math.random() }))
        })

        setNumAttempts(0)
        setNumPiecesPressed(0)
        setButtonNamesPressedList([])
        setMatchedPairs(0)
    }, [resetGame])


    //TRY AGAIN BUTTON
    const handleNextTry = () => {
        setNumPiecesPressed(0);
        setIdPressedList(idPressedList.slice(0, -2))
        setButtonNamesPressedList([]);
        setFailedMessage("failed!");
        setFailedButtonMessage("try again");
        setNumAttempts(numAttempts + 1)
    }


    // FIND NEXT PAIR BUTTON AFTER SUCCESS
    const handleFindNextPair = () => {
        setNumPiecesPressed(0);
        setSuccessMessage("match!");
        setSuccessButtonMessage("find next pair");
        setButtonNamesPressedList([]);
        setMatchedPairs(matchedPairs + 1)
        setNumAttempts(numAttempts + 1)
    };



    return (
        <>
            <h1 className="main-title">Fancy a Game?</h1>
            <div className="main-table">

                <DifficultyPanel
                    setDifficultyLevel={setDifficultyLevel}
                    resetGame={resetGame}
                    setResetGame={setResetGame}
                    setIdPressedList={setIdPressedList}
                />

                <Pieces
                    pieces={pieces}
                    setPieces={setPieces}
                    numPiecesPressed={numPiecesPressed}
                    idPressedList={idPressedList}
                    setNumPiecesPressed={setNumPiecesPressed}
                    buttonNamesPressedList={buttonNamesPressedList}
                    setButtonUncovered={setButtonUncovered}
                    buttonUncovered={buttonUncovered}
                    difficultyLevel={difficultyLevel}
                    setDifficultyLevel={setDifficultyLevel}
                />

                <EvaluationWindow
                    buttonNamesPressedList={buttonNamesPressedList}
                    numPiecesPressed={numPiecesPressed}
                    numAttempts={numAttempts}
                    successMessage={successMessage}
                    handleFindNextPair={handleFindNextPair}
                    matchedPairs={matchedPairs}
                    successButtonMessage={successButtonMessage}
                    failedMessage={failedMessage}
                    handleNextTry={handleNextTry}
                    failedButtonMessage={failedButtonMessage}
                    pieces={pieces}
                    resetGame={resetGame}
                    setResetGame={setResetGame}
                />

            </div>
        </>

    )
}

