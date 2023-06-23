import React from "react";
import Card from "./Card";
import "../../scss/portfolio.scss"
import TarkovHelpImg from "../../img/tarkov_help.png";
import DominosImg from "../../img/dominos.png";

const PORTFOLIO = [
    {
        label: "tarkov.help",
        description: "Сайт помощник, для игры Escape from Tarkov, Для популярного стримера твича Dunduk.",
        link: "https://tarkov.help",
        img: TarkovHelpImg
    },
    {
        label: "Domino`s",
        description: "Доставка пиццы, с выбором города, типа доставки, корзиной, и сохранением данных до следующего дня.",
        link: "https://dsclub.space/pizza",
        img: DominosImg
    }
]

function Portfolio() {
    return <section id="portfolio" className="portfolio">
        <h1 className=" text-4xl my-4 text-center text-white">
            Портфолио
        </h1>
        <div className="gap-3 p-6 grid grid-cols-1 shadow-md lg:grid-cols-2 auto-rows-max">
            {
                PORTFOLIO.map((elem) => (
                    <Card key={elem.label} {...elem} />
                ))
            }
        </div>
    </section>
}

export default Portfolio
