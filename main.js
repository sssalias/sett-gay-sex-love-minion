const img = document.querySelector('#sett')

const modal = document.querySelector('.modal-wrapper')

const btnOpen = document.querySelector('#get')
const btnClose = document.querySelector('#back')

const srcWays = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgyHYTgCnjDWoPm-y6nE2I40l5U8rlqrQe5A&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzkw_SKtyrbxoIRxVlFAAaOoU9GGornYz8Gg&s',
    'https://64.media.tumblr.com/c54a4e12178d6cff0346845e09eb947f/e210a6905596da31-dd/s540x810/0971bff206bf8cda956e8582ec286bcbf8d8b2f9.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsdr32EqlC6yX0XffNPcoWn3EQdFGdYjNC9w&s',
]

const getRandomImg = () => srcWays[Math.floor(Math.random() * (srcWays.length))]

btnOpen.addEventListener('click', () => {
    img.src = getRandomImg()
    modal.classList.add('__active')
})

btnClose.addEventListener('click', () => {
    modal.classList.remove('__active')
})