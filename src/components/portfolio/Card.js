import React from "react";
import LinkImg from "../../img/link.png";

function Card(props) {
    return <a href={props.link} className="portfolio-card rounded hover:ring-4 relative noise-background overflow-hidden ">
        <img src={LinkImg} alt="link" className="absolute right-2 top-2" width="32"/>
        <img className="portfolio-card__image" src={props.img} alt={props.label}/>
        <div className="p-4 text-white">
            <h4 className="text-2xl text-center font-semibold">
                {
                    props.label
                }
            </h4>
            <p className="text-slate-300 mt-2 text-center">
                {
                    props.description
                }
            </p>
        </div>
    </a>
}

export default Card