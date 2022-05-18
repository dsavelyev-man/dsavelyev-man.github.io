import React from "react";
import "../../scss/stack.scss";
import Card from "./Card";
import HtmlImg from "../../img/html.png";
import CssImg from "../../img/css.png";
import JsImg from "../../img/js.png";
import SassImg from "../../img/sass.png";
import ReactImg from "../../img/react.png";
import NodeImg from "../../img/node.png";

const STACK = [
    {
        label: "HTML",
        description: "Стандартизированный язык разметки документов для просмотра веб-страниц в браузере.",
        img: HtmlImg,
        status: true,
    },
    {
        label: "CSS",
        description: "Формальный язык описания внешнего вида документа (веб-страницы).",
        img: CssImg,
        status: true,
    },
    {
        label: "JS",
        description: "Обычно используется как встраиваемый язык для программного доступа к объектам приложений.",
        img: JsImg,
        status: true,
    },
    {
        label: "SCSS/SASS",
        description: "Это метаязык на основе CSS, предназначенный для увеличения уровня абстракции CSS-кода.",
        img: SassImg,
        status: false,
    },
    {
        label: "REACT",
        description: "JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.",
        img: ReactImg,
        status: false,
    },
    {
        label: "NODE.JS",
        description: "Программная платформа, превращающая JavaScript из узкоспециализированного языка в язык общего назначения.",
        img: NodeImg,
        status: false,
    }
]

function Stack() {
    return <section id="stack" className="stack pt-5">
        <h1 className=" text-4xl text-center text-white">
            Навыки
        </h1>
        <div className="gap-3 p-6 grid grid-cols-1 shadow-md md:grid-cols-3 lg:grid-cols-4 auto-rows-max">
            {
                STACK.map((elem) => (
                    <Card key={elem.label} {...elem} />
                ))
            }
        </div>
    </section>
}

export default Stack