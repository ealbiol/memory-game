import React, { useState } from "react"
import "../styles/MemoryTable.scss"

export const DifficultyPanel = ({
    setDifficultyLevel,
    resetGame,
    setResetGame,
}) => {


    //DIFFICULTY LEVEL
    const handleButtonLevel = (e) => {
        console.log("Difficulty Level id:", e.target.id);
        setDifficultyLevel(e.target.id);
        setResetGame(!resetGame)
    }


    return (
        <div>
            <b>Choose Difficulty Level</b>
            <ul style={{ listStyleType: "none" }}>
                <li id="8" onClick={(e) => handleButtonLevel(e)}>Easy</li>
                <li id="12" onClick={(e) => handleButtonLevel(e)}>Medium</li>
                <li id="20" onClick={(e) => handleButtonLevel(e)}>Hard</li>
            </ul>
        </div>
    )
}