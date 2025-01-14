document.body.style.marginTop = '100px'

// Random Colour Generator
const toHex = 16

function randomColors() {
  return "#" + Math.floor(Math.random() * 16777215).toString(toHex);
}

const mainTitle = document.createElement('div');
document.body.append(mainTitle);
mainTitle.setAttribute('class', 'title');
mainTitle.style.position = 'fixed'
mainTitle.style.top = '0px'
mainTitle.style.width = '100%';
mainTitle.style.background = 'red'
mainTitle.style.color = 'white';
mainTitle.style.display = 'block'

const h1El = document.querySelector('h1');
mainTitle.append(h1El);
h1El.addEventListener('click', function() {
  h1El.style.color = randomColors()
})

const p = document.createElement('p');
mainTitle.append(p);
p.textContent = 'Here are all my Pokemon cards, let me know if you want to trade';
p.style.textAlign = 'center'

// this querySelector gives access to <ul class "cards"> in index.html
const cardsEl = document.querySelector('.cards');

// loop through the entire data file. 
// const pokemon provides an entry point
for (let index = 0; index < data.length; index++) {
  const pokemon = data[index];
  // Card
  const card = document.createElement("li");
  cardsEl.append(card);
  card.setAttribute("class", "card");
  card.style.listStyle = "none";
  card.addEventListener("mouseenter", function () {
    card.style.background = "red";
    card.style.color = "white"
  })
  card.addEventListener("mouseleave", function () {
    card.style.background = "white";
    card.style.color = "black"
  })

  // Name
  const h2El = document.createElement("h2");
  card.append(h2El);
  h2El.innerText = pokemon.name;
  h2El.style.textTransform = "capitalize";

  // Image
  const imageEl = document.createElement("img");
  card.append(imageEl);
  imageEl.setAttribute("class", "card--img");
  imageEl.src = pokemon.sprites.front_default;
  imageEl.alt =
  "A wild " + pokemon.name + " appears on a flattering white void background";
  imageEl.width = "256";
  imageEl.addEventListener('click', function() {
    if (imageEl.src === pokemon.sprites.front_default) {
      imageEl.src = pokemon.sprites.back_default;
    } else {
      imageEl.src = pokemon.sprites.front_default
  }})

  // Stats ul
  const statsUl = document.createElement("ul");
  card.append(statsUl);
  statsUl.setAttribute("class", "card--text");
  statsUl.ul;
  statsUl.style.listStyle = "none";
  statsUl.style.textTransform = "uppercase";
  statsUl.style.lineHeight = "2";
  statsUl.style.fontWeight = "600";

  //Stat li HP
  const statHP = document.createElement("li");
  statsUl.appendChild(statHP);
  statHP.innerText = "HP: " + pokemon.stats[0].base_stat;

  // Stat li Attack
  const statAttack = document.createElement("li");
  statsUl.appendChild(statAttack);
  statAttack.innerText = "Attack: " + pokemon.stats[1].base_stat;

  // Stat li Defense
  const statDefense = document.createElement("li");
  statsUl.appendChild(statDefense);
  statDefense.innerText = "Defense: " + pokemon.stats[2].base_stat;

  // Stat li Special Attack
  const statSA = document.createElement("li");
  statsUl.appendChild(statSA);
  statSA.innerText = "Special Attack: " + pokemon.stats[3].base_stat;

  // Stat li Special Defense
  const statSD = document.createElement("li");
  statsUl.appendChild(statSD);
  statSD.innerText = "Special Defense: " + pokemon.stats[4].base_stat;

  // Stat li Special Defense
  const statSpeed = document.createElement("li");
  statsUl.appendChild(statSpeed);
  statSpeed.innerText = "Speed: " + pokemon.stats[4].base_stat;

  // Versions
  const appearancesList = document.createElement("div");
  card.append(appearancesList);
  appearancesList.setAttribute("class", "card--text");
  appearancesList.innerText = "Appearances: ";
  appearancesList.style.fontWeight = "600";

  for (let index = 0; index < pokemon.game_indices.length; index++) {
    const allAppearences = pokemon.game_indices[index];

    const appearances = document.createElement("p");
    appearancesList.append(appearances);
    appearances.style.textTransform = "capitalize";
    appearances.style.display = "inline";
    appearances.innerText = allAppearences.version.name + ", ";

    appearances.style.fontWeight = "200";
  }
}

// console.log(data[0]);
