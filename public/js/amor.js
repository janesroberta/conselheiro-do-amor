const conselhos = [
    "Não se apresse e (nem pressione).",
    "Procure alguém que estará ao seu lado em todas as suas versões e continuará te amando quando você mudar.",
    "Não leve suas inseguranças na hora de amar. Elas podem atrapalhar que você se entregue de verdade.",
    "Procure alguém que estará ao seu lado em todas as suas versões e continuará te amando quando você mudar.",
    "Não leve suas inseguranças na hora de amar. Elas podem atrapalhar que você se entregue de verdade.",
    "Não são os problemas que acabam com o amor, mas a falta de vontade de uma das pessoas em resolvê-los.",
    "O amor não é sempre um mar de rosas, e é justamente nas dificuldades que ele é posto à prova.",
    "O amor tem que ser livre e leve. Se ele te aprisiona ou te priva é porque não é amor de verdade.",
    "Relacionamento vive à base de concessões em que todos ficam felizes com o que estão abrindo mão porque os frutos são mais doces.",
    "O amor precisa ser demonstrado, pois as pessoas ainda não conseguem adivinhar o que as outras sentem ou pensam.",
    "Não vale a pena mudar por ninguém, mesmo que a pessoa te jure amor eterno. Mude porque você se ama e sabe que isso é melhor para você em primeiro lugar.",
    "A felicidade está em encontrar uma pessoa companheira que não só te ame, mas também te apoie e te incentive.",
    "Aprenda a amar as pessoas e não o que elas têm a te oferecer.",
    "A forma mais bonita de amor é aquela em que as pessoas crescem juntas. Se você encontrar isso, terá encontrado a felicidade.",
    "Ame com todo coração, mas não deixe que a sensação de amor te afaste de você mesmo.",
    "O amor é uma troca. Quando ela é unilateral, é sinal que algo está errado.",
    "O amor não prejudica ninguém, o que faz isso acontecer é o fato das pessoas atribuírem ao amor atitudes erradas.",
    "Não insista demais em relacionamentos que já deram errado várias vezes. Existem tantas outras pessoas esperando para te dar amor.",
    "O amor pode ser a justificativa para as atitudes mais insanas.",
    "O amor requer investimento, mas não de forma cansativa, apenas de forma leve e que faça bem aos envolvidos.",
    "É preciso dar abertura ao amor se você deseja ser amado de verdade.",
    "Por amor aos outros, escolhemos permanecer, mas às vezes, por amor-próprio, decidimos que é hora de partir.",
    "O amor é uma atitude racional em que você escolhe dar um pedaço seu a alguém especial.",
    "Se não brilha mais, não insista. Lâmpada queimada não se arruma, se troca por outra.",
    "Quando você realmente anseia pelo amor, pode encontrá-lo esperando por você.",
    "O amor não vê com os olhos, vê com a mente. Por isso, é alado, é cego e tão potente.",
    "Conselhos para os meus três filhos. Um, lembre-se de olhar para as estrelas e não para baixo, para seus pés. Dois, nunca desista do trabalho. Trabalho dá significado e propósito, e a vida está vazia sem e",
    "Amar não é olhar um para o outro, é olhar juntos na mesma direção.",
    "Amor a gente não aprende nos livros, na faculdade, com conselhos, com teorias. Amar a gente aprende amando.",
    "Quanto mais amor temos, tanto mais fácil fazemos a nossa passagem pelo mundo.",
    "Dê a quem você ama: asas para voar, raízes para voltar e motivos para ficar.",
    "Aquilo que se faz por amor está sempre além do bem e do mal.",
    "O amor é a poesia dos sentidos. Quando existe, existe para todo o sempre e aumenta cada vez mais.",
]

let displayConselho = document.getElementById("conselhoDisplay");
let botaoConselho = document.getElementById("conselhoBtn");

botaoConselho.addEventListener("click", geradorDeConselhoAleatorio);

function geradorDeConselhoAleatorio() {
    let numeroAleatorio = Math.floor(Math.random() * conselhos.length);  
    displayConselho.textContent = conselhos[numeroAleatorio];
    console.log(numeroAleatorio);
}
