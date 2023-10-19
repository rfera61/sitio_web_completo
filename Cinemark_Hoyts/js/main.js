const cartelera = document.getElementById("cartelera")

const peliculas = [
    {
        id: 1,
        name: "Momias",
        categoria: "Aventura",
        img: "./assets/Cartelera/Momias.png",
        url: "./pages/peliculas/pelicula_5.html",
    },
    {
        id: 2,
        name: "Elementos",
        categoria: "Romance",
        img: "./assets/Cartelera/Elementos.png",
        url: "./pages/peliculas/pelicula_1.html",
    },
    {
        id: 3,
        name: "La Sirenita",
        categoria: "Romance",
        img: "./assets/Cartelera/La_Sirenita.png",
        url: "./pages/peliculas/pelicula_4.html",
    },
    {
        id: 4,
        name: "Tortugas Ninja",
        categoria: "Aventura",
        img: "./assets/Cartelera/Tortugas.png",
        url: "./pages/peliculas/pelicula_2.html",
        

    },
    {
        id: 5,
        name: "Los Guardianes del Museo",
        categoria: "Animales",
        img: "./assets/Cartelera/Guardianes.png",
        url: "./pages/peliculas/pelicula_3.html",
    },
    {
        id: 6,
        name: "Super Mario Bros",
        categoria: "Aventura",
        img: "./assets/Cartelera/SuperMarioBros.png",
        url: "./pages/peliculas/pelicula_6.html",
    },
]

peliculas.forEach((peli) => {
    let content = document.createElement("a");
    content.href = peli.url;
    content.style.textDecoration = "none";
    content.innerHTML = `
    <img src="${peli.img}">
    <h2>${peli.name}</h2>
    `
    cartelera.append(content)
})

//Obten una referencia al campo de entrada y a la lista de peliculas
const campoBusqueda = document.getElementById("busqueda")
const listaPeliculas = document.getElementById("lista-peliculas")

//Escucha el evento de entrada en el campo de busqueda
campoBusqueda.addEventListener("input", function () {
    const textoBusqueda = campoBusqueda.value.toLowerCase(); //Convierte el texto en minusculas

    //Filtra las peliculas que coinciden con el texto de busqueda
    const peliculasFiltradas = peliculas.filter(function (pelicula) {
        //Comprobar si lo escrito contiene el nombre de la pelicula o su categoria
        return pelicula.name.toLowerCase().includes(textoBusqueda) || pelicula.categoria.toLowerCase().includes(textoBusqueda);
    })

    //Limpiar el buscador luego de una busqueda reciente
    listaPeliculas.innerHTML = "";

    //Verificar si el campo de busqueda esta vacio
    if (textoBusqueda === "") {
        return; //No se muestra ninguna pelicula si el campo esta vacio
    }

    //Mostrar las peliculas filtradas en la lista
    peliculasFiltradas.forEach(function (pelicula) {
        const elementoPelicula = document.createElement("a")
        elementoPelicula.href = pelicula.url;
        elementoPelicula.className= "resultado-busqueda";
        elementoPelicula.innerHTML = `
        <img src="${pelicula.img}">
        <h2>${pelicula.name}</h2>
        <p>Categoría: ${pelicula.categoria}</p>
        `;
        listaPeliculas.appendChild(elementoPelicula);
    })

})