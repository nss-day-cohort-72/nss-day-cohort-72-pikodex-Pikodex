import { pikoGetter } from "./pikomon.js"
let displayPikomonInformation = pikoGetter()

const container = document.querySelector('#container')
container.innerHTML = `${displayPikomonInformation}`
