import * as React from "react"
import Spider from "../images/imgpieces/spider.svg"
import Dog from "../images/imgpieces/dog.svg"
import Octopus from "../images/imgpieces/octopus.svg"
import Squid from "../images/imgpieces/squid.svg"
import Dinosaur from "../images/imgpieces/dinosaur.svg"
import Goat from "../images/imgpieces/goat.svg"
import Bear from "../images/imgpieces/bear.svg"
import Cat from "../images/imgpieces/cat.svg"
import Hamster from "../images/imgpieces/hamster.svg"
import Horse from "../images/imgpieces/horse.svg"

export const allPieces = [
    { id: "1", name: "Spider", animalImage: <Spider />, coverImage: "✨" },
    { id: "2", name: "Spider", animalImage: <Spider />, coverImage: "✨" },
    { id: "3", name: "Dog", animalImage: <Dog />, coverImage: "✨" },
    { id: "4", name: "Dog", animalImage: <Dog />, coverImage: "✨" },
    { id: "5", name: "Octopus", animalImage: <Octopus />, coverImage: "✨" },
    { id: "6", name: "Octopus", animalImage: <Octopus />, coverImage: "✨" },
    { id: "7", name: "Squid", animalImage: <Squid />, coverImage: "✨" },
    { id: "8", name: "Squid", animalImage: <Squid />, coverImage: "✨" },
    { id: "9", name: "Dinosaur", animalImage: <Dinosaur />, coverImage: "✨" },
    { id: "10", name: "Dinosaur", animalImage: <Dinosaur />, coverImage: "✨" },
    { id: "11", name: "Goat", animalImage: <Goat />, coverImage: "✨" },
    { id: "12", name: "Goat", animalImage: <Goat />, coverImage: "✨" },
    { id: "13", name: "Horse", animalImage: <Horse />, coverImage: "✨" },
    { id: "14", name: "Horse", animalImage: <Horse />, coverImage: "✨" },
    { id: "15", name: "Bear", animalImage: <Bear />, coverImage: "✨" },
    { id: "16", name: "Bear", animalImage: <Bear />, coverImage: "✨" },
    { id: "17", name: "Cat", animalImage: <Cat />, coverImage: "✨" },
    { id: "18", name: "Cat", animalImage: <Cat />, coverImage: "✨" },
    { id: "19", name: "Hamster", animalImage: <Hamster />, coverImage: "✨" },
    { id: "20", name: "Hamster", animalImage: <Hamster />, coverImage: "✨" },
];


export async function getAllPieces() {
    // return allPieces.sort(function (a, b) { return 0.5 - Math.random() })
    return allPieces
}

// const shufflePieces = pieces.sort(function (a, b) { return 0.5 - Math.random() })
// console.log("Shuffle: ", shufflePieces);