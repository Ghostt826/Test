// Array para armazenar o estado dos territórios
let territories = [
    { id: 1, name: "Território A", owner: null },
    { id: 2, name: "Território B", owner: null },
    { id: 3, name: "Território C", owner: null }
];

// Função para capturar um território
function captureTerritory() {
    // Simulação simples de escolher um território aleatório
    const randomIndex = Math.floor(Math.random() * territories.length);
    const territory = territories[randomIndex];

    // Verificar se o território já foi capturado
    if (territory.owner === null) {
        // Capturar o território
        territory.owner = "Jogador 1"; // Por exemplo, o jogador que está jogando

        // Atualizar a interface
        document.getElementById("status").textContent = `${territory.name} capturado por ${territory.owner}!`;

        // Atualizar visualmente o território capturado (pode ser implementado com CSS)
        const territoryElement = document.createElement("div");
        territoryElement.classList.add("captured");
        territoryElement.textContent = territory.name;
        document.getElementById("map").appendChild(territoryElement);
    } else {
        // Território já capturado
        document.getElementById("status").textContent = `${territory.name} já está sob controle de ${territory.owner}.`;
    }
}
