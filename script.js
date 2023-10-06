const generateButton = document.querySelector(".generate-meme");
const memeTitle = document.querySelector(".meme-title");
const meme = document.querySelector(".meme");
const authorName = document.querySelector(".author-name");

const updateDetails = (url, title, author) => {
    memeTitle.textContent = title;
    meme.src = url;
    meme.alt = title;
    authorName.textContent = `Meme Author: ${author}`;
};

const generateMeme = () => {
    const url = "https://meme-api.com/gimme/wholesomememes"
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        updateDetails(data.url, data.title, data.author);
    });
};

generateButton.addEventListener("click", generateMeme);

generateMeme();