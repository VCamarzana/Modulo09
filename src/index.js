// Listado de personajes: foto y nombre.
// click en cada personaje para mostrar el detalle.
// Utilizar otro de los endpoints de su API: listado de episodios
// Y otro: quotes? o el que queramos

import "./styles.css";

import * as Data from "./data-business";
import * as Utils from "./utils";

// Muestra los personajes y sus datos

Data.getCharacters().then((char) => {
    document.getElementById("root").innerText = "";
    const characters = char.results;
    const list = [];
    for (let char of characters) {
        const element = Utils.createCharacterRow(char);
        element.onclick = () => {
            Utils.showCharacter(char);
        };
        list.push(element);
    }

    for (let element of list) {
        document.getElementById("root").appendChild(element);
    }
});

// Para mostrar un listado de episodios usando su botón

function listEpisodes() {
    Data.getEpisodes().then((episode) => {
        document.getElementById("character-detail").innerText = "";
        const episodes = episode.results;
        for (let episode of episodes) {
            const element = Utils.showEpisodes(episode);
            document.getElementById("character-detail").append(element);
        }
    });
}
document.getElementById("btn-episodes").addEventListener("click", listEpisodes);

// Para mostrar un listado de localizaciones usando su botón
function listLocations() {
    Data.getLocations().then((location) => {
        document.getElementById("character-detail").innerText = "";
        const locations = location.results;
        for (let location of locations) {
            const element = Utils.showLocations(location);
            document.getElementById("character-detail").appendChild(element);
        }
    });
}
document.getElementById("btn-locations").addEventListener("click", listLocations);

//  PARA BUSCAR UN SOLO PERSONAJE:

// Data.getCharactersById(826).then((id) => {
//   document.getElementById("root").innerText = "";

//   const element = Utils.createCharacterRow(id);
//   element.onclick = () => {
//     Utils.showCharacter(id);
//   };
//   document.getElementById("root").appendChild(element);
// });
