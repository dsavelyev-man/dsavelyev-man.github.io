import React from "react";

function Card(props) {
    return <div className="bg-white stack-card rounded p-4 shadow-md items-center">
        <div
            className="stack-card__image bg-cover mx-auto"
            style={{
                backgroundImage: `url(${props.img})`
            }}
        />
        <div>
            <h4 className="text-2xl mt-4 text-center font-semibold">
                {
                    props.label
                }
            </h4>
            <p className="text-center text-md">
                {
                    props.description
                }
            </p>
            <p className="text-center text-md">
                Статус:&nbsp;
                {
                    props.status ? (
                        <span className="text-green-500">
                            Изучен
                        </span>
                    ) : (
                        <span className="text-yellow-600">
                            Изучаю
                        </span>
                    )
                }
            </p>
        </div>
    </div>
}

export default Card