import {motion} from "framer-motion";
import "../scss/navbar.scss";
import { Link } from "react-scroll";

const INITIAL = {
    y: "-5rem",
};
const ANIMATE = {
    y: "-1rem",
};
const TRANSITION = {
    delay: 0.5
};
const LINKS = [
    {
        to: "main",
        label: "Обо мне"
    },
    {
        to: "stack",
        label: "Навыки"
    },
    {
        to: "portfolio",
        label: "Портфолио"
    }
];


function Navbar() {
    return <motion.div
        initial={INITIAL}
        animate={ANIMATE}
        transition={TRANSITION}
        className="noise-background navbar flex items-center justify-center h-20 shadow-xl border-b border-white-100 pt-4 p-2 w-full fixed"
    >
        <ul className="flex">
            {
                LINKS.map((link) => (
                    <li
                        className="flex items-center mr-4 last:mr-0 text-white"
                        key={link.to}
                    >
                        <Link
                            className="cursor-pointer"
                            smooth
                            spy
                            to={link.to}
                        >
                            { link.label }
                        </Link>
                    </li>
                ))
            }
        </ul>
    </motion.div>
}

export default Navbar