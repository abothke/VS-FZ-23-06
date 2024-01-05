let i = 1; // Anfangszahl für die API (?page=1)
let h1 = document.createElement("h1") // Überschrift
document.querySelector("body").appendChild(h1) // Überschrift in den Body
    h1.textContent = "Picsum Fetch" // Überschrift Text
const fetchImg = (i) =>{ // Funktion mit i als Parameter
fetch(`https://picsum.photos/v2/list?page=${i}`) // API-Fetch mit i als Parameter für die Seite mit ?page=i
.then((response) => response.json())
.then((data) => {
    const jsonData = data
    let itemDiv = document.createElement("div") // Div für die Items
    itemDiv.className = "itemDiv"
    let loadBtn = document.createElement("button") // Button für die nächste Seite
    loadBtn.className = "loadBtn"
    loadBtn.textContent = "Get more images"
    jsonData.forEach((item) => {
    let imgDiv = document.createElement("div") // Div für die Figure
    imgDiv.className = "imgDiv"
    let imgSrc = item.download_url // Bild-URL
    let imgAuthor = item.author // Bild-Autor
    let imgUrl = item.url // Bild-Link zu Picsum
    let figure = document.createElement("figure") // Figure für die Bilder
    figure.innerHTML = // Figure mit Bild, Bild-Autor und Link zu Picsum als HTML
     `
    <img src="${imgSrc}">
    <figcaption>${imgAuthor}</figcaption>
    <button><a href=${imgUrl}>See more</a></button>
    `
    imgDiv.appendChild(figure) // Figure in imgDiv
    itemDiv.appendChild(imgDiv) // imgDiv in itemDiv
    

    })
    document.querySelector("body").appendChild(itemDiv) // itemDiv in den Body
    document.querySelector("body").appendChild(loadBtn) // loadBtn in den Body
    loadBtn.addEventListener("click", () =>{ // EventListener für den loadBtn
        i++; // i wird um 1 erhöht. Nach der ersten Ausführung ist i = 2, dann 3, 4, 5, usw.
        fetchImg(i); // fetchImg wird mit i als Parameter ausgeführt
    })
})
.catch((error) => console.log(error)) // Falls ein Fehler auftritt, wird dieser in der Konsole ausgegeben
}

fetchImg(1); // fetchImg wird mit 1 als Parameter ausgeführt zur Initialisierung der Seite
