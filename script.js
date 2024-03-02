const cidadeSpan = document.querySelector(".cidade");
const grausSpan = document.querySelector(".graus");
const climaSpan = document.querySelector(".clima");
const umidadeSpan = document.querySelector(".Umidade");
const ventosSpan = document.querySelector(".ventos");
const input = document.querySelector("input");
const container = document.querySelector(".conteudo-infos");
const paisBandeira = document.querySelector(".pais-bandeira");
const whater = document.querySelector(".whater-element");

function APICLIMA() {
  const CLIMA = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&lang=pt_br&units=metric&appid=86c4c73268155699eb72f3e7db1a31ae`;
  fetch(CLIMA)
    .then((response) => {
      if (!response.ok) {
        container.classList.remove("event");
        throw new Error("Erro ao acessar a API");
      } else {
        return response.json();
      }
    })
    .then((data) => {
      cidadeSpan.innerHTML = data.name;
      grausSpan.innerHTML = data.main.temp;
      climaSpan.innerHTML = data.weather[0].description;
      whater.setAttribute(
        "src",
        `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
      );
      umidadeSpan.innerHTML = data.main.humidity;
      ventosSpan.innerHTML = data.wind.speed;
    })
    .catch((error) => {
      console.error("Erro:", error);
    });
}

function inputValue() {
  if (input.value === "") {
    alert("campo vazio");
    container.classList.remove("event");
  } else {
    container.classList.add("event");
    APICLIMA();
  }
}

const BtnChamarApi = document.querySelector("button");

BtnChamarApi.addEventListener("click", inputValue);
