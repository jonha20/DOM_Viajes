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
    title: "Viaje 1",
    description: "Example Description 1",
    url_img: "./assets/viajes/viajes-1.jpg",
  },
  {
    title: "Viaje 2",
    description: "Example Description 2",
    url_img: "./assets/viajes/viajes-2.jpg",
  },
  {
    title: "Viaje 3",
    description: "Example Description 3",
    url_img: "./assets/viajes/viajes-3.jpg",
  },
  {
    title: "Viaje 4",
    description: "Example Description 3",
    url_img: "./assets/viajes/viajes-4.jpg",
  },
  {
    title: "Viaje 5",
    description: "Example Description 3",
    url_img: "./assets/viajes/viajes-5.jpg",
  },
  {
    title: "Viaje 6",
    description: "Example Description 3",
    url_img: "./assets/viajes/viajes-6.jpg",
  },
  {
    title: "Viaje 7",
    description: "Example Description 3",
    url_img: "./assets/viajes/viajes-7.jpg",
  },
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
  .setAttribute("src", data[1].url_img);


let contenedor = document.getElementById("contenedor2")
dataViajes.forEach((viajes)=>{
  contenedor.innerHTML += 
        `<div class="viaje">
          <img src="${viajes.url_img}" alt="" srcset="" />
          <div class="viaje-texto">
            <h4>${viajes.title}</h4>
            <p>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500, cuando un impresor
              (N. del T. persona que se dedica a la imprenta) desconocido usó
              una galería de textos y los mezcló de tal manera que logró hacer
            </p>
          </div>
        </div>`
});
  
let destinos = document.getElementById("comunidades");
cities.forEach((city) => {
  destinos.innerHTML += `<option value="${city}">${city}</option>`;
});
