import React from "react"
import "../styles/MemoryTable.scss"

export const EvaluationWindow = ({
    buttonNamesPressedList,
    numPiecesPressed,
    numAttempts,
    successMessage,
    handleFindNextPair,
    matchedPairs,
    successButtonMessage,
    failedMessage,
    handleNextTry,
    failedButtonMessage,
    pieces
}) => {

    return (
        <div>
            <div className="evaluationWindow">
                <h2 className="evaluation-title">Match the pairs🤔</h2>
                <p> 1- {buttonNamesPressedList[buttonNamesPressedList?.length - 2]}</p>
                <p> 2- {buttonNamesPressedList[buttonNamesPressedList?.length - 1]}</p>
                <div>
                    <p>Number of buttons pressed: {" "}{numPiecesPressed}</p>
                    <p>Total moves {numAttempts}</p>
                    {
                        buttonNamesPressedList[buttonNamesPressedList?.length - 2] && buttonNamesPressedList[buttonNamesPressedList?.length - 1] !== 0 ?
                            <div>
                                {
                                    buttonNamesPressedList?.length % 2 === 0 ?
                                        <div>
                                            {
                                                buttonNamesPressedList[buttonNamesPressedList?.length - 2] === buttonNamesPressedList[buttonNamesPressedList?.length - 1] ?
                                                    <div>
                                                        <b>{successMessage}</b>
                                                        <div
                                                            onClick={() => handleFindNextPair()}
                                                        >
                                                            {
                                                                matchedPairs === pieces.length / 2 - 1 ?
                                                                    <b>GAME ENDED!</b>
                                                                    :
                                                                    <span className="stepButton">{successButtonMessage?.toUpperCase()}</span>
                                                            }
                                                        </div>
                                                    </div>
                                                    :
                                                    <div>
                                                        <p>{failedMessage &&
                                                            (failedMessage)
                                                        }</p>
                                                        {/* Si failedMessage es undefined o null no se va a mostrar nada */}
                                                        <div
                                                            className="stepButton"
                                                            onClick={() => handleNextTry()}
                                                        >
                                                            <span>{failedButtonMessage?.toUpperCase()}</span>
                                                        </div>
                                                    </div>
                                            }
                                        </div>
                                        :
                                        <p>Press one more button...</p>
                                }
                            </div>
                            :
                            <></>
                    }
                </div>
            </div>
        </div>
    )
}