import React from "react"
import VkImg from "../../img/vk.png";
import TelegramImg from "../../img/telegram.png";

function Contacts() {
    return <div className="absolute bottom-4 text-xl text-custom-blue">
        <div className="flex justify-center">
            <a href="https://t.me/dsavelyev" className="mr-4">
                <img src={TelegramImg} alt="vk" width="40"/>
            </a>
            <a href="https://vk.com/tenno_scum">
                <img src={VkImg} alt="vk" width="40"/>
            </a>
        </div>
        <a href="mailto:kriper0nind@gmail.com">
            kriper0nind@gmail.com
        </a>
    </div>
}

export default Contacts