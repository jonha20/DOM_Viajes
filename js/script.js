const getRandomIndex = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const data = [
  {
    title: "Example Title 1",
    description: "Example Description 1",
    url_img: "./assets/banner/1.jpg",
  },
  {
    title: "Example Title 2",
    description: "Example Description 2",
    url_img: "./assets/banner/2.jpg",
  },
  {
    title: "Example Title 3",
    description: "Example Description 3",
    url_img: "./assets/banner/3.jpg",
  },
];
const dataViajes = [
  {
    title: "Example Title 1",
    description: "Example Description 1",
    url_img: "./assets/viajes/viajes-1.jpg",
  },
  {
    title: "Example Title 2",
    description: "Example Description 2",
    url_img: "./assets/viajes/viajes-2.jpg",
  },
  {
    title: "Example Title 3",
    description: "Example Description 3",
    url_img: "./assets/viajes/viajes-3.jpg",
  },
  {
    title: "Example Title 3",
    description: "Example Description 3",
    url_img: "./assets/viajes/viajes-4.jpg",
  },
  {
    title: "Example Title 3",
    description: "Example Description 3",
    url_img: "./assets/viajes/viajes-5.jpg",
  },
  {
    title: "Example Title 3",
    description: "Example Description 3",
    url_img: "./assets/viajes/viajes-6.jpg",
  },
  {
    title: "Example Title 3",
    description: "Example Description 3",
    url_img: "./assets/viajes/viajes-7.jpg",
  }
];
const cities = [
  "Madrid",
  "Barcelona",
  "Valencia",
  "Seville",
  "Bilbao",
  "Granada",
  "Malaga",
  "Palma de Mallorca",
  "Alicante",
  "Zaragoza",
];

document
  .querySelectorAll("#contenedor1 > figure > img")[0]
  .setAttribute("src", data[2].url_img);
let num = 6;
document.querySelectorAll("#contenedor2 div img").forEach((fotos) => {
  fotos.setAttribute("src", getRandomIndex(dataViajes).url_img);
});
let destinos = document.getElementById("comunidades")
cities.forEach(city =>{
    destinos.innerHTML += `<option value="${city}">${city}</option>`;
})

