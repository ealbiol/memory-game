import * as React from "react"
import { MemoryTable } from "../components/MemoryTable"

export const MemoryGamePage = () => {

    return (
        <div>
            <h1 style={{ color: "white", display: "flex", justifyContent: "center", margin: "50px" }}>Fancy a Game?</h1>
            <MemoryTable />
        </div>
    )
}

export default MemoryGamePage