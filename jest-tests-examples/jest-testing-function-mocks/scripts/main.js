"use strict"

import { sumTwo } from "./calculate.js"

console.log("2 + 3 = ",sumTwo(2,3))

import React from "react"
import ReactDOM from "react-dom"

const title = "My Minimal React Webpack Babel Setup is set here"

ReactDOM.render(
    <div>{title}</div>,
    document.getElementById("app")
)


/******** with jsx function**********/
const user = {
    firstName: "Harper",
    lastName: "Perez"
}

function formatName(user) {
    return user.firstName + " " + user.lastName
}

const element = (
    <h1>
    Hello, {formatName(user)}!
    </h1>
)

ReactDOM.render(
    element,
    document.getElementById("app1")
)