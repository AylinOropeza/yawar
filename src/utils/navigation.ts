import facebook from "../assets/icons/facebook.webp"
import instagram from "../assets/icons/instagram.webp"
import youtube from "../assets/icons/youtube.webp"

const navBarLinks = [
    { name: "Inicio", url: "/" },
    { name: "¿Quienes somos?", url: "/#about" },
    { name: "Talleres", url: "/#talleres" },
    { name: "Recursos", url: "/recursos" },
    // { name: "Estadisticas", url: "/estadisticas" },
];

const socialLinks = [
    {
        name: "Instagram",
        image: instagram,
        url: "https://www.instagram.com/proyecto.yawar/",
    },
    {
        name: "Facebook",
        image: facebook,
        url: "https://www.facebook.com/proyecto.yawar.menstrua",
    },
    {
        name: "Youtube",
        image: youtube,
        url: "https://www.youtube.com/@proyectoyawar2957",
    },
];

export default {
    navBarLinks,
    socialLinks,
};
