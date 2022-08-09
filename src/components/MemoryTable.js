import * as React from "react"
import { getAllPieces } from "../data/data"

export const MemoryTable = () => {

    const [pieces, setPieces] = React.useState([])

    React.useEffect(() => {
        getAllPieces().then((result) => {
            setPieces(result)
        })
    }, [])


    return (
        <div>
            {
                pieces.map((piece, index) => {
                    return (<div key={index}>
                        <div>{piece.name !== "Earth" ? piece.name : ""}</div>

                        {piece.name !== "Earth" && <div>{piece.name}</div>}
                    </div>)
                })
            }
        </div>
    )
}

