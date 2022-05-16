import React from "react";

function Card(props) {
    return <a href={props.link} className="portfolio-card rounded hover:ring-4 overflow-hidden noise-background">
        <img className="portfolio-card" src={props.img} alt={props.label}/>
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