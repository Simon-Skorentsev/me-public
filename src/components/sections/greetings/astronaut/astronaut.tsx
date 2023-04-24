import { Variants, motion, AnimatePresence } from "framer-motion";
import { useCallback, useState } from "react";
import { hats } from "./hats";

export function Astronaut() {
    const s = (deg: number) => [`${deg}deg`, `${-deg}deg`]
    const armShake = [...s(5), ...s(6), ...s(6), ...s(10), ...s(15), ...s(10), ...s(2)]
    const [hatNumber, setHatNumber] = useState(0);
    const [visible, setVisible] = useState(false);
    const hatCount = hats.length;
    const hatDur = 475;

    const callbacks = {
        onClick: useCallback((n: number) => {
            if (n === hatCount - 1) {
                setHatNumber(0);
                setVisible(false);
                return;
            };
            if (n === 0) {
                setHatNumber(n + 1);
                setVisible(true);
                return;
            }
            setVisible(false);
            setTimeout(() => {
                setHatNumber(n + 1);
                setVisible(true)
            }, hatDur);
        }, []),

        hide: useCallback(() => {
            setVisible(false);
        }, []),

        show: useCallback(() => {
            setVisible(true);
        }, [])
    }

    const variants: Variants = {
        ast: {
            rotate: ["0deg", "45deg"],
            y: ["0vh", "-1vh", "1vh"],
            x: ["0vw", "-.2vw", ".2vw"],
            transition: {
                duration: 8,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
            }
        },
        arm: {
            rotate: ["0deg", ...armShake, "0deg"],
            originX: "37.56px",
            originY: "56.13px",
            transition: {
                duration: 2,
                ease: "easeOut",
                repeat: Infinity,
                repeatDelay: 4,
            }
        },
        head: {
            rotate: ["0deg", "-10deg", "0deg", "7deg"],
            y: ["0%", "1.5%", "0%", "-1.5%"],
            originX: "44.66px",
            originY: "71.09px",
            transition: {
                duration: 8,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 3,
                repeatType: "reverse",
            }
        },
        tube: {
            y: ["0px", "-5px", "0px", "3px"],
            x: ["0px", "-5px", "0px", "5px"],
            transition: {
                duration: 8,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 3,
                repeatType: "reverse",
                delay: .25
            }
        },
        rLeg: {
            rotate: ["0deg", "20deg", "0deg", "20deg", "0deg"],
            originX: "42.08px",
            originY: "61.59px",
            transition: {
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 3,
                repeatType: "reverse",
            }
        },
        lLeg: {
            rotate: ["0deg", "-20deg", "0deg", "-20deg", "0deg"],
            originX: "43.42px",
            originY: "62.14px",
            transition: {
                duration: 6,
                repeat: Infinity,
                repeatDelay: 3,
                repeatType: "reverse",
            }
        },
        body: {
            scale: ["100%", "103.5%"],
            transition: {
                duration: 1,
                repeat: Infinity,
                repeatDelay: 1,
                repeatType: "reverse",
            }
        },
        hatInit: {
            opacity: 0,
        },
        showHat: {
            opacity: 1,
            transition: { duration: hatDur / 1000 },
        },
        hideHat: {
            opacity: 0,
            transition: { duration: hatDur / 1000 }
        }
    }

    return (
        <motion.svg style={{ overflow: "visible", cursor: "pointer" }} onClick={() => callbacks.onClick(hatNumber)} xmlns="http://www.w3.org/2000/svg" className="astro" viewBox="0 0 100 100" aria-labelledby="astroDesc">
            <motion.g variants={variants} animate="ast" initial={{ y: "0px", x: "0px" }}>
                <motion.g className="astro-tube" animate={{ ...variants.tube }}>
                    <path fill="none" stroke="#e2f1f7" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="5.061" d="M62.3 58.8s10.4 3.6 14.5-8.1-8.6-18.4-8.6-18.4" />
                </motion.g>
                <motion.g className="astro-l-arm" animate={{ ...variants.arm }}>
                    <path fill="#8b55bb" d="M34.4,58.8L16.7,45.3c-1.2-0.9-1.4-2.6-0.5-3.8l4.3-5.7c0.9-1.2,2.6-1.4,3.8-0.5L42,48.8 C42,48.8,34.4,58.8,34.4,58.8z">
                    </path>
                </motion.g>
                <motion.g animate={{ ...variants.rLeg }} className="astro-r-leg" data-svg-origin="38.8751106262207 64.57488746643067">
                    <path fill="#8b55bb" d="M38.9 76.7L18.3 91.4c-1.2.9-2.9.6-3.8-.6L8 81.7c-.9-1.2-.6-2.9.6-3.8l20.6-14.8c3.7-2.7 9-1.8 11.6 1.9 2.7 3.8 1.8 9-1.9 11.7z">
                    </path>
                </motion.g>
                <motion.g className="astro-head" animate={{ ...variants.head }}>
                    <path fill="#a95ed4" d="M78.3 28.9c0 7.1-3.1 13.4-8 17.8-4.2 3.8-9.8 6-15.9 6-7.9 0-14.8-3.8-19.2-9.6-3-4-4.7-8.9-4.7-14.2C30.5 15.7 41.2 5 54.4 5s23.9 10.7 23.9 23.9z">
                    </path>
                    <path fill="#563388" d="M70.3 46.7c-4.2 3.8-9.8 6-15.9 6-7.9 0-14.8-3.8-19.2-9.6 4.4-3.1 9.7-4.9 15.5-4.9 7.7 0 14.7 3.3 19.6 8.5z">
                    </path>
                    <path fill="#170609" d="M32.4 28.8c-.4-7.3 3.8-15.3 11.5-18.3s21-1.2 23.4 9.5c2.4 10.7-7.8 10.9-17 11.8-9.2.9-17.2 9.6-17.9-3z">
                    </path>
                    <path fill="#fff" d="M46.8 14.2c4.7-1 9.1-.8 12.3.3 0-.5-.7-1.2-2.6-1.8-12-3.8-20.8 6.9-20.8 6.9h.1c2.4-2.4 6.4-4.4 11-5.4z">
                    </path>
                    <AnimatePresence>
                        {visible && <motion.g variants={variants} initial="hatInit" animate="showHat" exit="hideHat" overflow="visible">
                            {hats[hatNumber]}
                        </motion.g>}
                    </AnimatePresence>
                </motion.g>
                <motion.g animate={{ ...variants.body }} className="astro-body">
                    <path fill="#a95ed4" d="M68.9 61.3c.2-1.5 1.3-2.8 2.8-3.1l19.2-4c1.1-.2 1.8-1.3 1.6-2.5l-1.9-8.6c-.2-1.1-1.3-1.8-2.5-1.6L67.6 46c-18.6-13.4-40.9.7-40.1 19 .8 21 38.6 25.8 41.4-3.7z">
                    </path>
                </motion.g>
                <motion.g animate={{ ...variants.lLeg }} className="astro-l-leg" data-svg-origin="42.77762908935547 67.08769836425782">
                    <path fill="#a95ed4" d="M44.4 75.9l-8.5 17.6c-.7 1.4-2.3 1.9-3.6 1.3l-10.1-4.9c-1.4-.7-1.9-2.3-1.3-3.6l8.5-17.6c2-4.1 7-5.9 11.1-3.9 4.2 2 5.9 7 3.9 11.1z">
                    </path>
                </motion.g>
            </motion.g>
        </motion.svg>
    )
}