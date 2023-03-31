export const createCharacterRow = (character) => {
    const element = document.createElement("div");

    const avatar = createAvatar(character);
    element.appendChild(avatar);

    const link = createRowText(character);
    element.appendChild(link);
    element.className = "character-row";

    return element;
};

const createAvatar = (character) => {
    const element = document.createElement("img");
    element.width = 150;
    element.className = "thumbnail";
    element.src = character.image;

    return element;
};

const createRowText = (character) => {
    const element = document.createElement("span");
    element.append(character.name);

    return element;
};

const createAvatarDetail = (character) => {
    const element = document.createElement("img");
    element.width = 350;
    element.src = character.image;

    return element;
};

export const showCharacter = (character) => {
    console.log("character", character);
    const characterDetail = document.getElementById("character-detail");

    characterDetail.innerHTML = "";
    characterDetail.appendChild(createAvatarDetail(character));
    characterDetail.appendChild(createParagraph("Name: " + character.name));
    characterDetail.appendChild(createParagraph("Status: " + character.status));
    characterDetail.appendChild(createParagraph("Species: " + character.species));
};

export const showEpisodes = (episode) => {
    const episodesList = document.getElementById("character-detail");
    const element = episodesList.appendChild(createList(episode.episode + ": " + episode.name));
    return element;
};

export const showLocations = (location) => {
    const locationsList = document.getElementById("character-detail");
    const element = locationsList.appendChild(createList(location.name + " (" + location.type + ")"));
    return element;
};

const createParagraph = (text) => {
    const element = document.createElement("p");
    element.append(text);
    return element;
};

const createList = (text) => {
    const element = document.createElement("li");
    element.append(text);
    return element;
};
