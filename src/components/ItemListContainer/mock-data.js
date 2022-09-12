import LEGO1 from '../../img/LEGO-producto-batman.jpg'
import LEGO2 from '../../img/LEGO-producto-millenniumfalcon.jpg'
import LEGO3 from '../../img/LEGO-producto-avengers.jpg'
import LEGO4 from '../../img/LEGO-producto-city.jpg'
import LEGO5 from '../../img/LEGO-producto-ironman.jpg'

const productos = [
    {
        id: 1,
        name:'Batmovil',
        description:'The Batman, The Penguin chase scene.',
        theme:'DC',
        price:'$30',
        image:[LEGO1],
        stock:'5',
    },
    {
        id: 2,
        name:'Millenium Falcon',
        description:'Millenium Falcon from episode XI',
        theme:'Star Wars',
        price:'$170',
        image:[LEGO2],
        stock:'8',
    },
    {
        id: 3,
        name:'Avengers Finale Battle',
        description:'Avengers Endgame final battle with Thanos',
        theme:'Marvel',
        price:'$70',
        image:[LEGO3],
        stock:'15',
    },
    {
        id: 4,
        name:'Car Transporter',
        description:'Transport up to 3 LEGO great vehicles',
        theme:'City',
        price:'$30',
        image:[LEGO4],
        stock:'10',
    },
    {
        id: 5,
        name:'Iron Man: Iron Monger Mayhem',
        description:'Iron Man vs. Iron Monger, Iron Man first film',
        theme:'Marvel',
        price:'$40',
        image:[LEGO5],
        stock:'21',
    },
]

const getFetch = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve(productos)
        reject(err => console.log(err))
    }, 2000)
})

export default getFetch