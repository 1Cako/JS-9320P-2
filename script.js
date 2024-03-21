let data = 
[
    {
        "id": 1,
        "name": "Luke Skywalker",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
        "homeworld": "tatooine"
    },
    {
        "id": 2,
        "name": "C-3PO",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
        "homeworld": "tatooine"
    },
    {
        "id": 3,
        "name": "R2-D2",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
        "homeworld": "naboo"
    },
    {
        "id": 4,
        "name": "Darth Vader",
        "pic": "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
        "homeworld": "tatooine"
    },
    {
        "id": 5,
        "name": "Leia Organa",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
        "homeworld": "alderaan"
    },
    {
        "id": 6,
        "name": "Owen Lars",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
        "homeworld": "tatooine"
    },
    {
        "id": 7,
        "name": "Beru Whitesun lars",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
        "homeworld": "tatooine"
    },
    {
        "id": 8,
        "name": "R5-D4",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
        "homeworld": "tatooine"
    },
    {
        "id": 9,
        "name": "Biggs Darklighter",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
        "homeworld": "tatooine"
    },
    {
        "id": 10,
        "name": "Obi-Wan Kenobi",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
        "homeworld": "stewjon"
    },
    {
        "id": 11,
        "name": "Anakin Skywalker",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
        "homeworld": "tatooine"
    },
    {
        "id": 12,
        "name": "Wilhuff Tarkin",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
        "homeworld": "eriadu"
    },
    {
        "id": 13,
        "name": "Chewbacca",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
        "homeworld": "kashyyyk"
    },
    {
        "id": 14,
        "name": "Han Solo",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
        "homeworld": "corellia"
    },
    {
        "id": 15,
        "name": "Greedo",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
        "homeworld": "Rodia"
    },
    {
        "id": 16,
        "name": "Jabba Desilijic Tiure",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
        "homeworld": "tatooine"
    },
    {
        "id": 18,
        "name": "Wedge Antilles",
        "pic":"https://lumiere-a.akamaihd.net/v1/images/databank_wedgeantilles_01_169_b8185dce.jpeg?region=0%2C0%2C1560%2C878",
        "homeworld": "corellia"
    },
    {
        "id": 19,
        "name": "Jek Tono Porkins",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
        "homeworld": "bestine"
    },
    {
        "id": 20,
        "name": "Yoda",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png"
    },
    {
        "id": 21,
        "name": "Palpatine",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
        "homeworld": "naboo"
    }
];

console.log(data);


let homeworldsRaw = data.map((item) => item.homeworld ?? "other")
console.log(homeworldsRaw);

let homeworldsUnique = homeworldsRaw;

function removeDuplicates(homeworldsUnique){
    return homeworldsUnique.filter((item, index) => homeworldsUnique.indexOf(item) === index);
}
console.log(removeDuplicates(homeworldsUnique));
let homeworldsLowercase = homeworldsRaw.map(item => item.toLowerCase());;
console.log(homeworldsLowercase);

const homeworlds = (removeDuplicates(homeworldsLowercase));

console.log(homeworlds)


let radio = document.querySelector(".radio")
let filterVisible = false;
let buttonTwo = document.getElementById("buttonTwo");

function filtered(){
    if(!filterVisible){
        for(let i =0; i < homeworlds.length; i++){
        radio.innerHTML+= `
        <div class="form-check">
        <input class="form-check-input" onChange="filterCard('${homeworlds[i]}')" type="radio" name="homeworld" id="homeworld-${homeworlds[i]}" value="${homeworlds[i]}">
        <label class="form-check-label" for="homeworld-${homeworlds[i]}">
        ${homeworlds[i]}
        </label>
        </div>`;
        }
        buttonTwo.innerHTML= "Remove filter";
        filterVisible = true;
    }else{ 
       
        if(filterVisible = true){
            radio.innerHTML="";
            buttonTwo.innerHTML = "Filter"
        }
        filterVisible = false;
    }
};

function filterCard(homewordld){
    document.querySelectorAll(".col-lg-2").forEach(function (item, index){
        const itemHomewordl = item.getAttribute("data-name")
        if (itemHomewordl == homewordld){
            item.style.display = "block"
        }else{
            item.style.display = "none"
        }
    });
}



let button = document.getElementById("button");
let cardElement = null; // cardElement değişkenini null olarak başlatıyoruz.

let charactersVisible = false; // Karakterlerin görünürlüğünü takip eden bir değişken ekliyoruz.

button.onclick = function(){
    if (!charactersVisible){ // Eğer karakterler görünmüyorsa (false ise)
        cardElement = document.createElement("div");
        cardElement.classList.add("row");
        cardElement.classList.add("justify");
        document.body.appendChild(cardElement);

        for (const character of data){
            cardElement.innerHTML+= `
            <div data-name="${character.homeworld}" class="col-lg-2">   
                <div class="card">
                <img src="${character.pic}" />
                <div class="card-body">
                <h5>${character.name}</h5>
                <p class="card-text">
                ${character.homeworld}
                </p>
            </div>
            </div>
            </div>
    
            
            `;
        }
        button.innerText = "Hide Characters"; // Butonun metnini değiştiriyoruz.
        charactersVisible = true; // Karakterlerin görünür olduğunu belirtiyoruz.
    } else {
        if (cardElement) // Eğer cardElement null değilse (yani oluşturulmuşsa)
            cardElement.remove(); // Kartları kaldırıyoruz.
        button.innerText = "Show Characters"; // Butonun metnini tekrar "Show Characters" olarak ayarlıyoruz.
        charactersVisible = false; // Karakterlerin görünürlüğünü false olarak ayarlıyoruz.
    }
};
