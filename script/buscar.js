const searchInput = document.getElementById('search');
const cards = document.querySelectorAll('.card');
const interestList = document.getElementById('interest-list');

// Função para adicionar item à lista de interesse
function addToInterest(itemName) {
    
    // Verificar se o item já está na lista
    if (!interestList.textContent.includes(itemName)) {
        const listItem = document.createElement('li');
        listItem.textContent = itemName;
        interestList.appendChild(listItem);

        // Armazenar a lista de interesse no localStorage        
        const currentInterest = JSON.parse(localStorage.getItem('interest')) || [];
        currentInterest.push(itemName);
        localStorage.setItem('interest', JSON.stringify(currentInterest));

        // Adicionar evento de clique para excluir o item
        listItem.addEventListener('click', function() {
            removeInterestItem(itemName, listItem);
        });
    }
}

// Função para remover item da lista de interesse
function removeInterestItem(itemName, listItem) {
    // Remover o item da lista de interesse
    const currentInterest = JSON.parse(localStorage.getItem('interest')) || [];
    const updatedInterest = currentInterest.filter(item => item !== itemName);
    localStorage.setItem('interest', JSON.stringify(updatedInterest));

    // Remover o item da interface
    interestList.removeChild(listItem);
}

// Função para carregar a lista de interesse do localStorage
function loadInterestList() {
    const currentInterest = JSON.parse(localStorage.getItem('interest')) || [];
    currentInterest.forEach(item => {
        addToInterest(item);
    });
}

// Carregar lista de interesse ao carregar a página
window.addEventListener('load', loadInterestList);

cards.forEach(card => {
    card.addEventListener('click', function() {
        const itemName = card.getAttribute('data-name');
        addToInterest(itemName);
    });
});

searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();

    cards.forEach(card => {
        const itemName = card.getAttribute('data-name').toLowerCase();

        if (itemName.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
