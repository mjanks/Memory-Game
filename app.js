document.addEventListener('DOMContentLoaded', () => {
  // card options
  const cardArray = [
    {
      name: 'bigben',
      img: 'images/bigben.jpg',
    },
    {
      name: 'bigben',
      img: 'images/bigben.jpg',
    },
    {
      name: 'chicken',
      img: 'images/chicken.jpg',
    },
    {
      name: 'chicken',
      img: 'images/chicken.jpg',
    },
    {
      name: 'goose',
      img: 'images/goose.jpg',
    },
    {
      name: 'goose',
      img: 'images/goose.jpg',
    },
    {
      name: 'taxi',
      img: 'images/taxi.jpg',
    },
    {
      name: 'taxi',
      img: 'images/taxi.jpg',
    },
    {
      name: 'stream',
      img: 'images/stream.jpg',
    },
    {
      name: 'stream',
      img: 'images/stream.jpg',
    },
    {
      name: 'tent',
      img: 'images/tent.jpg',
    },
    {
      name: 'tent',
      img: 'images/tent.jpg',
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result');
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  // create the board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement('img');
      card.setAttribute('src', 'images/blank.jpg');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

  // check for match
  function checkForMatch() {
    let cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match!');
      cards[optionOneId].setAttribute('src', 'images/white.png');
      cards[optionTwoId].setAttribute('src', 'images/white.png');
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.jpg');
      cards[optionTwoId].setAttribute('src', 'images/blank.jpg');
      alert('Sorry, try again!');
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You've found them all!!";
    }
  }

  // flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
