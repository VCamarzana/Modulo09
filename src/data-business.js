// Funcionalidad de comunicación con la API

// CON FETCH:

export function getCharacters() {
    return fetch("https://rickandmortyapi.com/api/character/").then((response) => {
      return response.json();
    });
  }
  
  export function getCharactersById(id) {
    return fetch("https://rickandmortyapi.com/api/character/" + id).then((response) => {
      return response.json();
    });
  }
  
  export function getEpisodes() {
    return fetch("https://rickandmortyapi.com/api/episode").then((response) => {
      return response.json();
    });
  }
  
  export function getLocations() {
    return fetch("https://rickandmortyapi.com/api/location").then((response) => {
      return response.json();
    });
  }
  
  // CON AXIOS
  
  // import axios from "axios";
  
  // function getCharacters() {
  //   return axios.get("https://rickandmortyapi.com/api/character").then((response) => {
  //     return response.data;
  //   });
  // }
  
  // function getCharactersById(id) {
  //   return axios.get("https://rickandmortyapi.com/api/character/" + id).then((response) => {
  //     return response.data;
  //   });
  // }
  
  // function getEpisodes() {
  //   return axios.get("https://rickandmortyapi.com/api/episode").then((response) => {
  //     return response.data;
  //   });
  // }
  
  // function getLocations(){
  //   return axios.get("https://rickandmortyapi.com/api/location").then(response => {
  //     return response.data;
  //   });
  // }
  // export { getCharacters, getCharactersById, getEpisodes, getLocations };
  