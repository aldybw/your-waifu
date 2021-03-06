// add content
const contentList = [
  {
    id: "anime-1",
    animeTitle: "The Detective Is Already Dead",
    imageUrl: "assets/images/anime-1.png",
    description:
      "Berkisah tentang seorang pemuda bernama Kimihiko Kimitsuka. Selama...",
  },
  {
    id: "anime-2",
    animeTitle: "Classroom of the Elite",
    imageUrl: "assets/images/anime-2.jpg",
    description:
      "Classroom of the Elite berlatar cerita di SMA Koudo Ikusei, ...",
  },
  {
    id: "anime-3",
    animeTitle: "Dr. Ramune: Mysterious Disease Specialist",
    imageUrl: "assets/images/anime-3.jpg",
    description:
      "Dr. Ramune bercerita tentang seorang dokter spesialis yang ahli...",
  },
  {
    id: "anime-4",
    animeTitle: "Your Lie in April ",
    imageUrl: "assets/images/anime-4.jpg",
    description:
      "Serial ini menceritakan kehidupan seorang anak bernama Kousei Arima...",
  },
];

function renderAnimeContent() {
  let animeList = document.getElementById("animeList");

  animeList.innerHTML = "";

  for (let content of contentList) {
    let article = document.createElement("article");
    let section = document.createElement("section");
    let h3 = document.createElement("h3");
    let img = document.createElement("img");
    let p = document.createElement("p");
    let button = document.createElement("a");

    let setSectionClass = "card";
    let setButtonClass = "btn-custom-secondary";
    let buttonText = "Lihat Artikel";

    article.setAttribute("id", content.id);
    section.setAttribute("class", setSectionClass);
    h3.innerText = content.animeTitle;
    img.setAttribute("src", content.imageUrl);
    p.innerText = content.description;
    button.setAttribute("href", "#");
    button.setAttribute("class", setButtonClass);
    button.innerText = buttonText;

    animeList.appendChild(article);
    article.appendChild(section);
    section.appendChild(h3);
    section.appendChild(img);
    section.appendChild(p);
    section.appendChild(button);
  }
}

renderAnimeContent();

// toggle-button
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
