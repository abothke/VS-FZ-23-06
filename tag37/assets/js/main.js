// ! API

// * API ist eine Schnittstelle zwischen Frontend und Backend innerhalb von node.js
// * Außerhalb können natürlich auch Server mit Server (also Backend und Backend) miteinander kommunizieren

// ! Datentypen => Boolean, Number, String, Array, Object. Neu ist JSON.

// * Promise hat drei Zustände:
// * Pending : Anfrage wurde ausgeführt, keine Antwort erhalten.
// * Fulfilled : Anfrage ist ausgeführt und die Antwort wurde ausgegeben.
// * Rejected : Anfrage wurde abgelehnt.


// console.log(fetch("https://dummyjson.com/products"));

fetch("https://dummyjson.com/products")
.then((response)=> response.json())
.then((data)=> {
    console.log(data.products)
    const productsAusDemJson = data.products
    console.log(productsAusDemJson);
    
    productsAusDemJson.forEach((product) =>{
        const productTitle = product.title
        // console.log(productTitle);
        const productDesc = product.description
        // console.log(productDesc);
        const productImg = product.images[0]
        // console.log(productImg);
        const productPrice = product.price
        // console.log(productPrice);
        const productID = product.id
        let productItem = document.createElement("div")
        // Titel
        let h2 = document.createElement("h2")
        h2.textContent = productTitle
        productItem.appendChild(h2)
        // Beschreibung
        let p = document.createElement("p")
        p.textContent = productDesc
        productItem.appendChild(p)
        // Preis
        let h5 = document.createElement("h5")
        h5.textContent = `${productPrice} €`
        productItem.appendChild(h5)
        // Image
        let img = document.createElement("img")
        img.src = productImg
        img.alt = productTitle
        productItem.appendChild(img)

        // btn
        let button = document.createElement("button")
        button.textContent = "More Info"
        button.addEventListener("click", () => {
            fetch(`https://dummyjson.com/products/${productID}`)
            .then((resp) => resp.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error))
        })
    productItem.appendChild(button)
    document.querySelector("#products").appendChild(productItem)
    })
    })
.catch((error)=> console.log("Die Küche brennt leider", error))

