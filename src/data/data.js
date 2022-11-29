import * as React from "react"
import Spider from "../images/imgpieces/spider.svg"


export const allPieces = [
    { id: "1", name: "Earth", animalImage: <Spider /> },
    { id: "2", name: "Earth" },
    { id: "3", name: "Jupiter" },
    { id: "4", name: "Jupiter" },
    { id: "5", name: "Saturn" },
    { id: "6", name: "Saturn" },
    { id: "7", name: "Mars" },
    { id: "8", name: "Mars" },
    { id: "9", name: "Mercury" },
    { id: "10", name: "Mercury" },
    { id: "11", name: "Venus" },
    { id: "12", name: "Venus" },
    { id: "13", name: "Uranus" },
    { id: "14", name: "Uranus" },
    { id: "15", name: "Neptune" },
    { id: "16", name: "Neptune" },
    { id: "17", name: "Moon" },
    { id: "18", name: "Moon" },
    { id: "19", name: "Europa" },
    { id: "20", name: "Europa" },
];


export async function getAllPieces() {
    return allPieces.sort(function (a, b) { return 0.5 - Math.random() })
}

// const shufflePieces = pieces.sort(function (a, b) { return 0.5 - Math.random() })
// console.log("Shuffle: ", shufflePieces);