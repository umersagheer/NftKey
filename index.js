// The object data for the content of cards
const cards = [
    {
        heading: "Pancakes",
        description: "Marketplace",
        img:"./Assets/Doggy1.jpg",
    },
    {
        heading: "Pancakes",
        description: "Marketplace",
        img:"./Assets/Doggy2.jpg",
    },
    {
        heading: "Pancakes",
        description: "Marketplace",
        img:"./Assets/Doggy3.jpg",
    },
    {
        heading: "Pancakes",
        description: "Marketplace",
        img:"./Assets/Doggy1.jpg",
    },
    {
        heading: "Pancakes",
        description: "Marketplace",
        img:"./Assets/Doggy2.jpg",
    },
    {
        heading: "Pancakes",
        description: "Marketplace",
        img:"./Assets/Doggy3.jpg",
    },
    {
        heading: "Pancakes",
        description: "Marketplace",
        img:"./Assets/Doggy1.jpg",
    },
    {
        heading: "Pancakes",
        description: "Marketplace",
        img:"./Assets/Doggy2.jpg",
    },
    {
        heading: "Pancakes",
        description: "Marketplace",
        img:"./Assets/Doggy3.jpg",
    },
    {
        heading: "Pancakes",
        description: "Marketplace",
        img:"./Assets/Doggy1.jpg",
    },
    {
        heading: "Pancakes",
        description: "Marketplace",
        img:"./Assets/Doggy2.jpg",
    },
    {
        heading: "Pancakes",
        description: "Marketplace",
        img:"./Assets/Doggy3.jpg",
    },
]



// Function that takes the html and make a template of it
function elementFromHtml(html) {
    const template = document.createElement('template')
    template.innerHTML = html.trim()

    return template.content.firstElementChild
}


// Function that will return the nodes of the cards
function cardContainer() {

    // Mapping the data from the card object
    const cardElements = cards.map(card => {

        // making the structure of the card using the string template
        // passing the html to my element making function
        const cardStructure = elementFromHtml(`
        <div class="NFTcard">
            <img src=${card.img} alt ="img">
            <div class="NFTcard__description">
                <h4 id="NFTcard__heading">${card.heading}</h4>
                <p>${card.description}</p>
            </div>
        </div>
    `)
        return cardStructure
    })

    //returning the html elements whose structure has made
    return cardElements
}

// getting the element in which i have to show the cards
const container = document.getElementsByClassName('cardContainer')[0]


// function that will traverse the cards and render them on the screen
function renderCardComponent(){
cardContainer().forEach(cardElement => {
    console.log(container)
    container.appendChild(cardElement)
  })
}

// rendering
renderCardComponent()

