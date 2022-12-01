import React, { useState, useEffect } from "react"
import "../styles/MemoryTable.scss"

export const DifficultyPanel = ({ setDifficultyLevel }) => {

    //DIFFICULTY LEVEL
    const handleButtonLevel = (e) => {
        console.log("Difficulty Level id:", e.target.id);
        setDifficultyLevel(e.target.id)
    }

    return (
        <div>
            <b style={{ color: "white" }}>Choose Difficulty Level</b>
            <ul style={{ listStyleType: "none" }}>
                <li style={{ color: "white" }} id="8" onClick={(e) => handleButtonLevel(e)}>Easy</li>
                <li style={{ color: "white" }} id="12" onClick={(e) => handleButtonLevel(e)}>Medium</li>
                <li style={{ color: "white" }} id="20" onClick={(e) => handleButtonLevel(e)}>Hard</li>
            </ul>
        </div>
    )
}