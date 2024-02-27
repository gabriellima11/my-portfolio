import SnapClimaImage from './assets/projects/snapclima.png'
import AppleWatchImage from './assets/projects/apple-watch-clone.png'
import CardapioImage from './assets/projects/cardapio.png'
import RickAndMortyImage from './assets/projects/rick-and-morty.png'

const SnapClima = {
    nome: "Snap Clima",
    description: "Projeto de consulta de climas e temperaturas desenvolvido utilizando Weather API. No desenvolvimento foi utilizado HTML, CSS e JavaScript",
    image: SnapClimaImage,
    link: "https://snap-clima.netlify.app/",
    github: "https://github.com/gabriellima11/snapclima"
}

const ApplePageClone = {
    nome: "Apple Watch - Clone",
    description: "Clone do site da Apple desenvolvido com o objetivo de criar interações na página usando JavaScript. Foi utilizada manipulação de inputs",
    image: AppleWatchImage,
    link: "https://apple-page-clone.netlify.app/",
    github: "https://github.com/gabriellima11/js-apple-page"
}

const Cardapio = {
    nome: "Cardápio",
    description: "Plataforma de cardápio digital criada utilizando React, nela foi utilizada o conceito de props e React Hooks, como o useState e da função map do JavaScript",
    image: CardapioImage,
    link: "https://cardapio-react-jade.vercel.app",
    github: "https://github.com/gabriellima11/cardapio-react"
}

const RickAndMortyAPI = {
    nome: "Rick and Morty API - Clone",
    description: "Plataforma desenvolvida em React com sistema de paginação. Foi utilizado React Hooks e mapeamento de listas, além de utilizar Axios para integração da API no desenvolvimento",
    image: RickAndMortyImage,
    link: "https://rick-and-morty-api-gfl.vercel.app",
    github: "https://github.com/gabriellima11/rick-and-morty-api"
}

export const ProjectsList = [SnapClima, RickAndMortyAPI, ApplePageClone, Cardapio]