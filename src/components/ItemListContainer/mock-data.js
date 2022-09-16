// MARVEL
import LEGO3 from '../../img/Productos/LEGO-producto-avengers.jpg'
import LEGO5 from '../../img/Productos/LEGO-producto-ironman.jpg'
import LEGO18 from '../../img/Productos/LEGO-producto-guardianes.jpg'
import LEGO19 from '../../img/Productos/LEGO-producto-shangchi.jpg'
import LEGO20 from '../../img/Productos/LEGO-producto-spiderman.jpg'
import LEGO21 from '../../img/Productos/LEGO-producto-wolverine.jpg'
import LEGO22 from '../../img/Productos/LEGO-producto-blackpanter.jpg'

// CITY
import LEGO4 from '../../img/Productos/LEGO-producto-city.jpg'
import LEGO12 from '../../img/Productos/LEGO-producto-escuela.jpg'
import LEGO13 from '../../img/Productos/LEGO-producto-hospital.jpg'
import LEGO14 from '../../img/Productos/LEGO-producto-incendio.jpg'
import LEGO15 from '../../img/Productos/LEGO-producto-mine.jpg'
import LEGO16 from '../../img/Productos/LEGO-producto-robobanco.jpg'
import LEGO17 from '../../img/Productos/LEGO-producto-fuel.jpg'

// DC
import LEGO1 from '../../img/Productos/LEGO-producto-batman.jpg'
import LEGO23 from '../../img/Productos/LEGO-producto-batcave.jpg'
import LEGO24 from '../../img/Productos/LEGO-producto-batmanclasic.jpg'
import LEGO25 from '../../img/Productos/LEGO-producto-batmannolan.jpg'
import LEGO26 from '../../img/Productos/LEGO-producto-joker.jpg'


// STAR WARS
import LEGO2 from '../../img/Productos/LEGO-producto-millenniumfalcon.jpg'
import LEGO6 from '../../img/Productos/LEGO-producto-badbatch.jpg'
import LEGO7 from '../../img/Productos/LEGO-producto-bobafett.jpg'
import LEGO8 from '../../img/Productos/LEGO-producto-cadbaine.jpg'
import LEGO9 from '../../img/Productos/LEGO-producto-firstorder.jpg'
import LEGO10 from '../../img/Productos/LEGO-producto-mandalorian.jpg'
import LEGO11 from '../../img/Productos/LEGO-producto-resistencia.jpg'

const productos = [
    {
        id: 1,
        name:'Batmovil',
        description:'The Batman, The Penguin chase scene.',
        theme:'DC',
        price:'$30',
        image:[LEGO1],
        stock:'5',
        categoria:'-',
    },
    {
        id: 2,
        name:'Millenium Falcon',
        description:'Millenium Falcon from episode XI',
        theme:'StarWars',
        price:'$170',
        image:[LEGO2],
        stock:'8',
        categoria:'-',
    },
    {
        id: 3,
        name:'Avengers Finale Battle',
        description:'Avengers Endgame final battle with Thanos',
        theme:'Marvel',
        price:'$70',
        image:[LEGO3],
        stock:'15',
        categoria:'mas vendidos',
    },
    {
        id: 4,
        name:'Car Transporter',
        description:'Transport up to 3 LEGO great vehicles',
        theme:'City',
        price:'$30',
        image:[LEGO4],
        stock:'10',
        categoria:'-',
    },
    {
        id: 5,
        name:'Iron Man: Iron Monger Mayhem',
        description:'Iron Man vs. Iron Monger, Iron Man first film',
        theme:'Marvel',
        price:'$40',
        image:[LEGO5],
        stock:'21',
        categoria:'mas vendidos',
    },
    {
        id: 6,
        name:'Bad Batch',
        description:'Havoc Marauder',
        theme:'StarWars',
        price:'$100',
        image:[LEGO6],
        stock:'11',
        categoria:'-',
    },
    {
        id: 7,
        name:'Boba Fett Starship',
        description:'from episode IV with exclusive prionces leia aniversari mini figure',
        theme:'StarWars',
        price:'$130',
        image:[LEGO7],
        stock:'11',
        categoria:'-',
    },
    {
        id: 8,
        name:'The Justifier',
        description:'Cad Bane, Omega, Fennec Shand and Hunter',
        theme:'StarWars',
        price:'$170',
        image:[LEGO8],
        stock:'11',
        categoria:'-',
    },
    {
        id: 9,
        name:'First Order Transport',
        description:'Transport First Order troops',
        theme:'StarWars',
        price:'$100',
        image:[LEGO9],
        stock:'11',
        categoria:'-',
    },
    {
        id: 10,
        name:'Mandalorian N-1 Starfighter',
        description:'The Book of Boba Fett',
        theme:'StarWars',
        price:'$60',
        image:[LEGO10],
        stock:'11',
        categoria:'mas vendidos',
    },
    {
        id: 11,
        name:'The resistance Starship',
        description:'Blue Starship',
        theme:'StarWars',
        price:'$100',
        image:[LEGO11],
        stock:'11',
        categoria:'-',
    },
    {
        id: 12,
        name:'Escuela',
        description:'Montones de divertidos detalles en un dia en la escuela',
        theme:'City',
        price:'$60',
        image:[LEGO12],
        stock:'11',
        categoria:'-',
    },
    {
        id: 13,
        name:'Hospital',
        description:'ambulancia y helicóptero de rescate',
        theme:'City',
        price:'$110',
        image:[LEGO13],
        stock:'11',
        categoria:'-',
    },
    {
        id: 14,
        name:'Bombreos en Accion',
        description:'Bomberos ayudando a apagar un fuego',
        theme:'City',
        price:'$110',
        image:[LEGO14],
        stock:'11',
        categoria:'-',
    },
    {
        id: 15,
        name:'Camioneta Minera',
        description:'Camioneta transporta explosivos',
        theme:'City',
        price:'$20',
        image:[LEGO15],
        stock:'11',
        categoria:'-',
    },
    {
        id: 16,
        name:'Robo a Banco',
        description:'Policia evita robo a banco',
        theme:'City',
        price:'$80',
        image:[LEGO16],
        stock:'11',
        categoria:'-',
    },
    {
        id: 17,
        name:'Camion de Combustible',
        description:'Camion de Combustible repsol',
        theme:'City',
        price:'$',
        image:[LEGO17],
        stock:'11',
        categoria:'-',
    },
    {
        id: 18,
        name:'The Guardians’ Ship',
        description:'This play-and-display set the Guardians of the Galaxy',
        theme:'Marvel',
        price:'$160',
        image:[LEGO18],
        stock:'11',
        categoria:'-',
    },
    {
        id: 19,
        name:'Shang-Chi',
        description:'Shang-Chi finale battle',
        theme:'Marvel',
        price:'$40',
        image:[LEGO19],
        stock:'11',
        categoria:'-',
    },
    {
        id: 20,
        name:'Spider-man',
        description:'Spider-man vs. venom with Spider-man noir',
        theme:'Marvel',
        price:'$20',
        image:[LEGO20],
        stock:'11',
        categoria:'-',
    },
    {
        id: 21,
        name:'Wolverine Mech Armor',
        description:'Kids put the Wolverine minifigure into the movable mech’s cockpit and role-play endless superhero adventures',
        theme:'Marvel',
        price:'$15',
        image:[LEGO21],
        stock:'11',
        categoria:'-',
    },
    {
        id: 22,
        name:'Black Panther',
        description:'Black Panther Dragon Flyer',
        theme:'Marvel',
        price:'$20',
        image:[LEGO22],
        stock:'11',
        categoria:'-',
    },
    {
        id: 23,
        name:'Batcave',
        description:'The Batcave is equipped with computers, tools and welding gear for vehicle repairs',
        theme:'DC',
        price:'$90',
        image:[LEGO23],
        stock:'11',
        categoria:'-',
    },
    {
        id: 24,
        name:'Classic TV Series Batmobile',
        description:'Give kids all the style, action and excitement of the original Batman TV series with this iconic Batmobile',
        theme:'DC',
        price:'$30',
        image:[LEGO24],
        stock:'11',
        categoria:'mas vendidos',
    },
    {
        id: 25,
        name:'Batmobile Tumbler',
        description:'Scarecrow Showdown from The Dark Knight trilogy of Batman movies',
        theme:'DC',
        price:'$40',
        image:[LEGO25],
        stock:'11',
        categoria:'-',
    },
    {
        id: 26,
        name:'Batman vs. The Joker',
        description:'Is a versatile playset featuring legendary characters and amazing vehicles',
        theme:'DC',
        price:'$30',
        image:[LEGO26],
        stock:'11',
        categoria:'-',
    },
]

const getFetch = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve(productos)
        reject(err => console.log(err))
    }, 2000)
})

export default getFetch