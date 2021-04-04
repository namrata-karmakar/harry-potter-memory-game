document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'hermione',
            img: 'images/hermione.png'
        },
        {
            name: 'hermione',
            img: 'images/hermione.png'
        },
        {
            name: 'snape',
            img: 'images/snape.png'
        },
        {
            name: 'snape',
            img: 'images/snape.png'
        },
        {
            name: 'luna',
            img: 'images/luna.png'
        },
        {
            name: 'luna',
            img: 'images/luna.png'
        },
        {
            name: 'lockhart',
            img: 'images/lockhart.png'
        },
        {
            name: 'lockhart',
            img: 'images/lockhart.png'
        },
        {
            name: 'cedric',
            img: 'images/cedric.png'
        },
        {
            name: 'cedric',
            img: 'images/cedric.png'
        },
        {
            name: 'tonks',
            img: 'images/tonks.png'
        },
        {
            name: 'tonks',
            img: 'images/tonks.png'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');

    let cardsClicked = []; 
    let cardsClickedID = []; 
    let cardsMatched = [];

    function createBoard() {
        for(let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'images/cover.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipcard);
            grid.appendChild(card);
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('img');
        const cardOne = cardsClickedID[0];
        const cardTwo = cardsClickedID[1];   

        if (cardOne == cardTwo) {
            cards[cardOne].setAttribute("src", "images/cover.png");
            cards[cardTwo].setAttribute("src", "images/cover.png");
            alert("Pick a different one!");
        }else if( cardsClicked[0] === cardsClicked[1] ) {
            alert('You found a match!');
            cards[cardOne].setAttribute('src', 'images/letter.png');
            cards[cardTwo].setAttribute('src', 'images/letter.png');
            cardsMatched.push(cardsClicked);
        }else{
            alert('Sorry, try again!');
            cards[cardOne].setAttribute('src', 'images/cover.png');
            cards[cardTwo].setAttribute('src', 'images/cover.png');
        }

        cardsClicked = [];
        cardsClickedID = [];
        resultDisplay.textContent = cardsMatched.length;

        if (cardsMatched.length === cardArray.length/2) {
            resultDisplay.textContent = `Congratulations! Here's your Hogwarts letter`;
        }
    }

    function flipcard() {
        const cardID = this.getAttribute('data-id');
        cardsClicked.push(cardArray[cardID].name);
        cardsClickedID.push(cardID);
        this.setAttribute('src', cardArray[cardID].img);    
        if( cardsClicked.length === 2 ) {
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();

})