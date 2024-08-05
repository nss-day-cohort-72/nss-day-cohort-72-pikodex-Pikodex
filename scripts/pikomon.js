import { database } from "./database.js";

export const displayHeading = () => {
    return `
    <h1>Pikodex</h1>
    `
}

export const pikoGetter = () => {
    let pikoHTML = ``
    database.forEach(pikomon => {
        pikoHTML += `
        <div class='piko-card'>
            <img class="piko-img" src="${pikomon.imageUrl}"/>
            <h2 class="piko-name">${pikomon.name}</h2>
            <ul class="info-text">
                <li>${pikomon.category}</li>
                <li>${pikomon.abilities}</li>
                <li>${pikomon.weakness}</li>
            </ul>
        </div>
        `
    })
    return pikoHTML
}