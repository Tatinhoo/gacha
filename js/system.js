var bgmGenshin = document.getElementById("bgmGenshin")
bgmGenshin.volume = 0.1

var items = [
    // 5 Estrelas
    { name: "Bolsonaro Elizabeth II", rarity: 5, image: "./img/splashArt/bolsonaro.jpg" , rarityImage: "./img/rarity/5_stars.png" },
    { name: "Vito Gemaplys", rarity: 5, image: "./img/splashArt/vito.jpg" , rarityImage: "./img/rarity/5_stars.png" },
    { name: "Lula Encoxado", rarity: 5, image: "./img/splashArt/lula.png" , rarityImage: "./img/rarity/5_stars.png" },
    { name: "Tallys", rarity: 5, image: "./img/splashArt/tallys.png" , rarityImage: "./img/rarity/5_stars.png" },
    { name: "Kid Bengala", rarity: 5, image: "./img/splashArt/kid-bengala.png" , rarityImage: "./img/rarity/5_stars.png" },
    { name: "VMZ 144p", rarity: 5, image: "./img/splashArt/vmz.png" , rarityImage: "./img/rarity/5_stars.png" },
    { name: "Luiza minha deusa", rarity: 5, image: "./img/splashArt/luiza.png" , rarityImage: "./img/rarity/5_stars.png" },
    { name: "Ash o gato", rarity: 5, image: "./img/splashArt/ash.png" , rarityImage: "./img/rarity/5_stars.png" },

    // 4 Estrelas
    { name: "Indo Ali", rarity: 4, image: "./img/splashArt/indoali.png" , rarityImage: "./img/rarity/4_stars.png" },
    { name: "Pinto Depressivo", rarity: 4, image: "./img/splashArt/punpun.png" , rarityImage: "./img/rarity/4_stars.png" },
    { name: "Bia 69 Cartas", rarity: 4, image: "./img/splashArt/bia69.png" , rarityImage: "./img/rarity/4_stars.png" },
    { name: "Gato Validação", rarity: 4, image: "./img/splashArt/gatovalidation.png" , rarityImage: "./img/rarity/4_stars.png" },
    { name: "Bonda 69 Ufff", rarity: 4, image: "./img/splashArt/bonda69.png" , rarityImage: "./img/rarity/4_stars.png" },
    { name: "Fifine K658", rarity: 4, image: "./img/splashArt/fifine.png" , rarityImage: "./img/rarity/4_stars.png" },
    { name: "Toji??", rarity: 4, image: "./img/splashArt/toji.png" , rarityImage: "./img/rarity/4_stars.png" },
    { name: "Mario Capybara", rarity: 4, image: "./img/splashArt/mariobara.png" , rarityImage: "./img/rarity/4_stars.png" },
    { name: "Geladeira Brastemp Frost Free Duplex 375 litros com Compartimento Extrafrio", rarity: 4, image: "./img/splashArt/geladeira.png" , rarityImage: "./img/rarity/4_stars.png" },

    // 3 Estrelas
    { name: "Paimon", rarity: 3, image: "./img/splashArt/paimon.png" , rarityImage: "./img/rarity/3_stars.png" },
    { name: "Dani Polarcub", rarity: 4, image: "./img/splashArt/polarcub.png" , rarityImage: "./img/rarity/3_stars.png" },
];

var pity = 10;
var Imagem = document.getElementById("result");
var rollButton = document.getElementById("roll-button");
var pityCounter = document.getElementById("roll-count");
var nomePersonagem = document.getElementById("nome")
var rarity = document.getElementById("rarity");
var audioCLICK = new Audio("audio/sfx/click.mp3")



var totalRolls = 0;

rollButton.addEventListener("click", () => {
    audioCLICK.play()
    rollGacha();
    totalRolls++;
    pityCounter.textContent = `Pity: ${totalRolls}`;
});

function rollGacha() {
    // Simula uma rolagem aleatória
    var randomIndex = Math.floor(Math.random() * items.length);
    
    // Pity garante um 5* aos 85rolls
    if (totalRolls <= pity){
        result = items[randomIndex]
        console.log(totalRolls, pity);
    }else{
        result = items[Math.floor(Math.random() * 6)]
        
    }

    nomePersonagem.textContent = result.name
    if(result.rarity == 5){
        rarity.src = result.rarityImage
        totalRolls = 0;
    }
    if(result.rarity == 4){
        rarity.src = result.rarityImage
    }
    if(result.rarity == 3){
        rarity.src = result.rarityImage
    }

    // Atualiza a imagem exibida no contêiner
    Imagem.src = result.image;
    Imagem.alt = result.name;
}
