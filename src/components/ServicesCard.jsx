import Card from "./Card";
import "../assets/icomooncss/icomoon.css";
import "../assets/icomooncss/open-iconic-bootstrap.min.css";

import { FaThumbsUp } from "react-icons/fa";
import { FaWrench } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { RiPencilFill } from "react-icons/ri";

const ServicesCard = () => {
    const cardsContent = [
        {
            icon: "oi oi-thumb-up",
            title: "Free Bootstrap 4",
            text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        },
        {
            icon: "oi oi-wrench",
            title: "Web Development",
            text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        },
        {
            icon: "oi oi-person",
            title: "For People Like You",
            text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        },
        {
            icon: "oi oi-location",
            title: "Free Bootsrap 4",
            text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        },
        {
            icon: "oi oi-monitor",
            title: "Web Development",
            text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        },
        {
            icon: "oi oi-pencil",
            title: "For People Like You",
            text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        },
    ];

    return (
        <div className="row">
            {cardsContent.map((card, index) => (
                <Card
                    icon={card.icon}
                    title={card.title}
                    text={card.text}
                    key={index}
                    className={"col-lg-4 col-md-6"}
                />
            ))}
        </div>
    );
};

export default ServicesCard;
