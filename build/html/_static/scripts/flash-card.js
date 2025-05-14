// Fonction pour retourner la carte
function flipCard(cardId) {
    var card = document.getElementById(cardId).querySelector('.flashcard-inner');
    card.classList.toggle('flip'); // Ajoute/enlève la classe 'flip' pour la rotation
}