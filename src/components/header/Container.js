import React from "react";
import Name from "./Name";
import Description from "./Description";
import { motion } from "framer-motion";

const INITIAL = {
    opacity: 0
}
const ANIMATE = {
    opacity: 1
}
const TRANSITION = {
    delay: 0.5
}

function Container() {
    return <motion.div
        initial={INITIAL}
        animate={ANIMATE}
        transition={TRANSITION}
        className="header__container mb-60 md:mx-40 mx-10"
    >
        <Name/>
        <Description/>
    </motion.div>
}

export default Container