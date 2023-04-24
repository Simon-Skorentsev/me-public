import cn from "classnames";
import { motion, useScroll, Variants } from "framer-motion";
import { useState } from "react";
import { CoolTitle } from "../../coolTitle/coolTitle";
import styles from "./ContactMe.module.scss";
import { useParallax } from "../../../utils/useParallax";
import { colors } from "../../../utils/colors";

export function ContactMe() {
    const [waitTitle, setWaitTitle] = useState(true);
    const { scrollYProgress } = useScroll();
    const y = useParallax(scrollYProgress, 45);
    const [telegramHover, setTelegramHover] = useState(false);
    const [mailHover, setMailHover] = useState(false);

    const variants: Variants = {
        onSvgHover: (round?: boolean) => ({
            scale: [1, 1.1],
            boxShadow: [`inset 0 0 20px ${colors.darkRgba(.2)}, 0 0 20px ${colors.darkRgba(.3)}`, `inset 0 0 20px ${colors.whiteRgba(.2)}, 0 0 20px ${colors.whiteRgba(.3)}`],
            borderRadius: round ? "50%" : "0%",
            overflow: "visible",
            transition: {
                duration: .2,
                ease: "easeInOut"
            }
        }),
        showSpan: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: .2
            }
        },
        scaleSpan: {
            color: colors.cyan,
            scale: 1.2,
            transition: {
                duration: .3,
            }
        },
        unScaleSpan: {
            color: colors.gray,
            scale: 1,
            transition: {
                duration: .3,
                delay: .77,
            }
        },
    }

    return (
        <motion.section className={styles.contactMe}>
            <div className={cn("textBlock", styles.description)}>
                <motion.h2 className={styles.title}
                    viewport={{ amount: "all", once: true }}
                    onViewportEnter={() => setWaitTitle(false)}
                >
                    <CoolTitle
                        waitingToShow={waitTitle}
                    >
                        {"Contact me"}
                    </CoolTitle>
                </motion.h2>
                <p>
                    Не стесняйтесь обращаться. Я всегда рад поболтать, чтобы обсудить идеи, возможности, график и тому подобное. Или, если вы просто хотите сказать привет или задать вопрос, то тоже не бойтесь написать.
                </p>
                <motion.div className={styles.svgPair}>
                    <div className={styles.oneSvg}>
                        <a target="_blank" href="https://t.me/S_Skor">
                            <motion.svg variants={variants}
                                whileHover="onSvgHover"
                                onHoverStart={() => setTelegramHover(true)}
                                onHoverEnd={() => setTelegramHover(false)}
                                xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="max(5vh, 5vw)" height="max(5vh, 5vw)" fillRule="nonzero"><g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(3.2,3.2)"><path d="M70.51172,10.98633c-0.67863,0.02926 -1.35467,0.21041 -1.97461,0.45117h-0.00195c-0.60411,0.2358 -4.48522,1.84373 -10.14258,4.19141c-5.65736,2.34768 -13.01048,5.404 -20.30078,8.43555c-14.58061,6.0631 -28.9082,12.02734 -28.9082,12.02734l0.06445,-0.02344c0,0 -0.79953,0.26194 -1.59961,0.80273c-0.40004,0.2704 -0.82004,0.61586 -1.15234,1.0957c-0.33231,0.47985 -0.56619,1.13701 -0.47656,1.8418c0.16174,1.27188 1.02867,2.10383 1.74414,2.60352c0.71547,0.49968 1.40234,0.73633 1.40234,0.73633l0.00781,0.00391l14.01367,4.63281c0.2306,0.80255 3.97634,13.84591 4.85938,16.59961c0.46188,1.44194 0.88905,2.24239 1.28906,2.74609c0.20001,0.25185 0.39752,0.43068 0.5957,0.55273c0.0852,0.05247 0.16963,0.08796 0.25195,0.11914c0.01342,0.0051 0.02775,0.015 0.04102,0.01953c0.02825,0.00964 0.04333,0.00955 0.07813,0.01758c1.32029,0.48836 2.43555,-0.36328 2.43555,-0.36328l0.03125,-0.02344l9.60742,-8.45312l14.20898,11.39453l0.125,0.05469c2.28019,0.98225 4.16484,0.44263 5.25977,-0.42187c1.09492,-0.86451 1.53906,-1.99609 1.53906,-1.99609l0.03516,-0.08789l10.25,-51.8457c0.25119,-1.10908 0.27647,-2.04004 0.05859,-2.83984c-0.21787,-0.79981 -0.72465,-1.45012 -1.35352,-1.81445c-0.62886,-0.36433 -1.30965,-0.48629 -1.98828,-0.45703zM70.56641,13.02148c0.39803,-0.01713 0.7335,0.03755 0.93164,0.15234c0.19814,0.11479 0.3269,0.2464 0.42578,0.60938c0.09888,0.36298 0.12273,0.97567 -0.08008,1.87109l-0.00391,0.01367l-10.20898,51.64453c-0.01501,0.03457 -0.27802,0.65313 -0.90039,1.14453c-0.62753,0.49547 -1.48163,0.86159 -3.15234,0.16992l-22.83984,-18.31641c-0.19209,-0.20184 -0.45967,-0.3144 -0.73828,-0.31055c-0.54704,-0.00653 -0.99781,0.4277 -1.01172,0.97461l-2.60352,13.94922c-0.13311,-0.30654 -0.27655,-0.66622 -0.43164,-1.15039c-0.80596,-2.51336 -4.43022,-15.09812 -4.78711,-16.33789l35.84766,-23.20898c0.1064,0.45742 0.51674,0.77918 0.98633,0.77344c0.30539,0.00365 0.59571,-0.13244 0.78826,-0.36951c0.19255,-0.23707 0.26622,-0.54913 0.20002,-0.84728c0.02657,-0.30602 0.00094,-0.60696 -0.13281,-0.90625c-0.21582,-0.4829 -0.72675,-0.7769 -1.08984,-0.8457c-0.7262,-0.13761 -1.19922,0.12695 -1.19922,0.12695l-0.09961,0.03711l-36.60937,23.70508l-14.03125,-4.63867l-0.00391,-0.00195c-0.00371,-0.00129 -0.44451,-0.16035 -0.91406,-0.48828c-0.47153,-0.32932 -0.84604,-0.75673 -0.9043,-1.21484c-0.02037,-0.16022 0.0104,-0.26877 0.13672,-0.45117c0.12632,-0.1824 0.36049,-0.39802 0.62695,-0.57812c0.53292,-0.36021 1.12109,-0.56445 1.12109,-0.56445l0.03125,-0.01172l0.0332,-0.01367c0,0 14.32611,-5.96444 28.90625,-12.02734c7.29007,-3.03145 14.64429,-6.08627 20.30078,-8.43359c5.65649,-2.34732 9.69622,-4.01758 10.10156,-4.17578c0.44606,-0.17323 0.90665,-0.26217 1.30469,-0.2793zM59.19922,25.69922l-0.80078,0.40234l-0.1582,0.88281l0.61328,0.6543l0.3457,0.06055l0.80078,-0.40039l0.1582,-0.88281l-0.61133,-0.6543zM56.40039,28.40039l-0.80078,0.40039l-0.1582,0.88281l0.61133,0.6543l0.34766,0.0625l0.80078,-0.40234l0.1582,-0.88086l-0.61328,-0.6543zM53.59961,31.09961l-0.80078,0.40234l-0.1582,0.88086l0.61133,0.6543l0.34766,0.0625l0.80078,-0.40039l0.1582,-0.88281l-0.61133,-0.6543zM50.80078,33.80078l-0.80273,0.40039l-0.15625,0.88281l0.61133,0.6543l0.34766,0.0625l0.80078,-0.40234l0.1582,-0.88086l-0.61328,-0.65625zM48,36.5l-0.80078,0.40234l-0.1582,0.88086l0.61133,0.6543l0.34766,0.0625l0.80078,-0.40039l0.1582,-0.88281l-0.61133,-0.6543zM45.19922,39.19922l-0.80078,0.40234l-0.1582,0.88281l0.61328,0.6543l0.3457,0.06055l0.80273,-0.40039l0.15625,-0.88281l-0.61133,-0.6543zM42.40039,41.90039l-0.80078,0.40039l-0.1582,0.88281l0.61133,0.6543l0.34766,0.0625l0.80078,-0.40234l0.1582,-0.88086l-0.61328,-0.6543zM39.59961,44.59961l-0.80078,0.40234l-0.1582,0.88086l0.61328,0.6543l0.3457,0.0625l0.80078,-0.40039l0.1582,-0.88281l-0.61133,-0.6543zM36.80078,47.30078l-0.80273,0.40039l-0.15625,0.88281l0.61133,0.6543l0.34766,0.0625l0.80078,-0.40234l0.1582,-0.88281l-0.61328,-0.6543zM34.67578,52.82422l6.11914,4.90625l-8.41602,7.40234z"></path></g></g></motion.svg>
                        </a>
                        <motion.span className={styles.svgSpan} animate={telegramHover ? { opacity: 0, scale: 0 } : { ...variants.showSpan }}>S_Skor</motion.span>
                    </div>

                    <div className={styles.oneSvg}>
                        <motion.svg style={{ cursor: "default" }}
                            onHoverStart={() => setMailHover(true)}
                            onHoverEnd={() => setMailHover(false)}
                            xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="max(5vh, 5vw)" height="max(5vh, 5vw)" fillRule="nonzero"><g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(5.12,5.12)"><path d="M5.5,7c-2.46875,0 -4.48828,2.01563 -4.5,4.48438c0,0 0,0.00391 0,0.00781c0,0.00391 0,0.00391 0,0.00781v27c0,2.47266 2.02734,4.5 4.5,4.5h39c2.47266,0 4.5,-2.02734 4.5,-4.5v-27c0,-0.00391 0,-0.00391 0,-0.00781c0,-0.00391 0,-0.00781 0,-0.00781c-0.01172,-2.46875 -2.03125,-4.48437 -4.5,-4.48437zM8.10156,9h33.80078l-16.90234,11.78125zM4.77344,9.11719l20.22656,14.10156l20.23047,-14.10156c1.02344,0.30859 1.76172,1.23828 1.76953,2.37109c-0.00391,0.21094 -0.21875,0.63281 -0.53125,0.97266c-0.31641,0.34375 -0.625,0.55859 -0.625,0.55859l-0.00391,0.00781l-20.83984,14.75l-20.83984,-14.75l-0.00391,-0.00781c0,0 -0.30859,-0.21484 -0.625,-0.55859c-0.3125,-0.33984 -0.52734,-0.76172 -0.53125,-0.97266c0.00781,-1.13281 0.74609,-2.0625 1.77344,-2.37109zM3,14.65234l0.00781,0.00781l0.00781,0.00391v0.00391l2.98438,2.10938v24.22266h-0.5c-1.39062,0 -2.5,-1.10937 -2.5,-2.5zM47,14.65234v23.84766c0,1.39063 -1.10937,2.5 -2.5,2.5h-0.5v-24.22266l2.98438,-2.10937v-0.00391zM8,18.19141l17,12.03125l17,-12.03125v22.80859h-34z"></path></g></g></motion.svg>
                        <motion.span className={styles.svgSpan} variants={variants}
                            animate={mailHover ? "scaleSpan" : "unScaleSpan"}
                            whileHover="scaleSpan" >
                            skorencem@gmail.com
                        </motion.span>
                    </div>
                </motion.div>

                <p>
                    Нажав на иконки ниже, вы сможете перейти на мою страницу guthub, а также просмотреть моё актуальное резюме, которое доступно на Google Диске.
                </p>
                <motion.div className={styles.svgPair}>
                    <a target="_blank" href="https://github.com/Simon-Skorentsev">
                        <motion.svg variants={variants} custom whileHover="onSvgHover" xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="max(5vh, 5vw)" height="max(5vh, 5vw)" fillRule="nonzero"><g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(4,4)"><path d="M32,6c-14.359,0 -26,11.641 -26,26c0,12.277 8.512,22.56 19.955,25.286c-0.592,-0.141 -1.179,-0.299 -1.755,-0.479v-5.957c0,0 -0.975,0.325 -2.275,0.325c-3.637,0 -5.148,-3.245 -5.525,-4.875c-0.229,-0.993 -0.827,-1.934 -1.469,-2.509c-0.767,-0.684 -1.126,-0.686 -1.131,-0.92c-0.01,-0.491 0.658,-0.471 0.975,-0.471c1.625,0 2.857,1.729 3.429,2.623c1.417,2.207 2.938,2.577 3.721,2.577c0.975,0 1.817,-0.146 2.397,-0.426c0.268,-1.888 1.108,-3.57 2.478,-4.774c-6.097,-1.219 -10.4,-4.716 -10.4,-10.4c0,-2.928 1.175,-5.619 3.133,-7.792c-0.2,-0.567 -0.533,-1.714 -0.533,-3.583c0,-1.235 0.086,-2.751 0.65,-4.225c0,0 3.708,0.026 7.205,3.338c1.614,-0.47 3.341,-0.738 5.145,-0.738c1.804,0 3.531,0.268 5.145,0.738c3.497,-3.312 7.205,-3.338 7.205,-3.338c0.567,1.474 0.65,2.99 0.65,4.225c0,2.015 -0.268,3.19 -0.432,3.697c1.898,2.153 3.032,4.802 3.032,7.678c0,5.684 -4.303,9.181 -10.4,10.4c1.628,1.43 2.6,3.513 2.6,5.85v8.557c-0.576,0.181 -1.162,0.338 -1.755,0.479c11.443,-2.726 19.955,-13.009 19.955,-25.286c0,-14.359 -11.641,-26 -26,-26zM33.813,57.93c-0.599,0.042 -1.203,0.07 -1.813,0.07c0.61,0 1.213,-0.029 1.813,-0.07zM37.786,57.346c-1.164,0.265 -2.357,0.451 -3.575,0.554c1.218,-0.103 2.411,-0.29 3.575,-0.554zM32,58c-0.61,0 -1.214,-0.028 -1.813,-0.07c0.6,0.041 1.203,0.07 1.813,0.07zM29.788,57.9c-1.217,-0.103 -2.411,-0.289 -3.574,-0.554c1.164,0.264 2.357,0.451 3.574,0.554z"></path></g></g></motion.svg>
                    </a>
                    <a target="_blank" href="https://drive.google.com/file/d/1rHei6_CTimgGHYfWpgkdHGxbQwXzU_U0/view?usp=sharing">
                        <motion.svg variants={variants} custom whileHover="onSvgHover" xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="max(5vh, 5vw)" height="max(5vh, 5vw)" fillRule="nonzero"><g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(3.2,3.2)"><path d="M28.375,9c-0.02819,0 -0.05423,0.00938 -0.08203,0.01172c-0.02858,0.00228 -0.05551,0.00499 -0.08398,0.00977c-0.11446,0.01955 -0.22457,0.0531 -0.32422,0.10938c-0.00244,0.00137 -0.00538,0.00056 -0.00781,0.00195c-0.00083,0.00048 -0.00113,0.00147 -0.00195,0.00195c-0.10163,0.05881 -0.18776,0.1407 -0.26367,0.23242c-0.01968,0.02378 -0.03742,0.04697 -0.05469,0.07227c-0.01741,0.02543 -0.03955,0.04695 -0.05469,0.07422l-22.375,40.125c-0.173,0.308 -0.16823,0.68523 0.00977,0.99023l11.5625,19.8457c0.01189,0.02046 0.02978,0.0353 0.04297,0.05469c0.01902,0.02806 0.03856,0.05388 0.06055,0.08008c0.07528,0.08964 0.15991,0.17078 0.25977,0.22852c0.0753,0.04353 0.15569,0.07684 0.24023,0.09961c0.08533,0.02287 0.17337,0.03516 0.25977,0.03516h44.875c0.355,0 0.68523,-0.19005 0.86523,-0.49805l11.56055,-19.8457c0.18,-0.309 0.18191,-0.69 0.00391,-1l-23,-40.125c-0.178,-0.311 -0.50919,-0.50391 -0.86719,-0.50391zM30.10352,11h20.31836l21.74609,37.9375h-20.23242zM28.38867,12.0293l10.74023,18.66211l-21.56836,37.28906l-10.41016,-17.86719zM30.99805,20.38281c-0.38508,-0.04781 -0.78503,0.13805 -0.98828,0.49805c-0.281,0.47 -0.11163,1.07937 0.35938,1.35938c0.16,0.09 0.33,0.14063 0.5,0.14063c0.349,0 0.68109,-0.18 0.87109,-0.5c0.279,-0.48 0.10791,-1.09109 -0.37109,-1.37109c-0.1175,-0.07 -0.24273,-0.11102 -0.37109,-0.12695zM28.99805,23.8457c-0.38508,-0.04641 -0.78503,0.13414 -0.98828,0.49414c-0.281,0.47 -0.12063,1.09109 0.35938,1.37109c0.16,0.09 0.33,0.12891 0.5,0.12891c0.349,0 0.68109,-0.18 0.87109,-0.5c0.279,-0.48 0.10791,-1.08914 -0.37109,-1.36914c-0.1175,-0.0675 -0.24273,-0.10953 -0.37109,-0.125zM26.99219,27.31055c-0.38719,-0.05063 -0.78219,0.13023 -0.99219,0.49023c-0.271,0.48 -0.11086,1.08914 0.36914,1.36914c0.16,0.09 0.33,0.13086 0.5,0.13086c0.34,0 0.68109,-0.18 0.87109,-0.5c0.27,-0.48 0.10791,-1.09133 -0.37109,-1.36133c-0.12,-0.07 -0.24789,-0.11203 -0.37695,-0.12891zM24.99219,30.77148c-0.38719,-0.04828 -0.78219,0.13578 -0.99219,0.48828c-0.271,0.48 -0.11086,1.09109 0.36914,1.37109c0.16,0.09 0.33,0.13867 0.5,0.13867c0.339,0 0.67938,-0.17977 0.85938,-0.50977c0.281,-0.47 0.11962,-1.08938 -0.35937,-1.35937c-0.12,-0.07 -0.24789,-0.11281 -0.37695,-0.12891zM40.28125,32.69336l9.34766,16.24414h-18.74414zM22.99219,34.23633c-0.38719,-0.04641 -0.78219,0.13414 -0.99219,0.49414c-0.271,0.48 -0.11086,1.08938 0.36914,1.35938c0.15,0.09 0.33,0.14063 0.5,0.14063c0.339,0 0.67938,-0.18 0.85938,-0.5c0.281,-0.48 0.11962,-1.09109 -0.35937,-1.37109c-0.12,-0.0675 -0.24789,-0.10758 -0.37695,-0.12305zM20.99219,37.69727c-0.38719,-0.04641 -0.78219,0.13219 -0.99219,0.49219c-0.28,0.48 -0.11086,1.09109 0.36914,1.37109c0.15,0.09 0.33,0.12891 0.5,0.12891c0.339,0 0.67938,-0.18 0.85938,-0.5c0.281,-0.48 0.11962,-1.08914 -0.35937,-1.36914c-0.12,-0.0675 -0.24789,-0.10758 -0.37695,-0.12305zM18.99219,41.16211c-0.38719,-0.04828 -0.78219,0.13578 -0.99219,0.48828c-0.281,0.48 -0.11062,1.08914 0.35938,1.36914c0.161,0.09 0.33,0.13086 0.5,0.13086c0.35,0 0.68914,-0.18 0.86914,-0.5c0.281,-0.47 0.11063,-1.09133 -0.35937,-1.36133c-0.12,-0.07 -0.24789,-0.11086 -0.37695,-0.12695zM16.98242,44.62305c-0.3863,-0.04781 -0.77992,0.13609 -0.98242,0.49609c-0.28,0.48 -0.11962,1.09133 0.35938,1.36133c0.161,0.09 0.33,0.13867 0.5,0.13867c0.35,0 0.68014,-0.18 0.86914,-0.5c0.271,-0.48 0.11086,-1.08914 -0.36914,-1.36914c-0.11975,-0.07 -0.24819,-0.11102 -0.37695,-0.12695zM14.98242,48.08594c-0.3863,-0.04641 -0.77992,0.13414 -0.98242,0.49414c-0.281,0.48 -0.11962,1.08914 0.35938,1.36914c0.161,0.09 0.33,0.13086 0.5,0.13086c0.35,0 0.68014,-0.18 0.86914,-0.5c0.271,-0.48 0.11086,-1.08914 -0.36914,-1.36914c-0.11975,-0.0675 -0.24819,-0.10953 -0.37695,-0.125zM29.79883,50.81641c0.1374,0.07107 0.28562,0.12109 0.45117,0.12109h42.11914l-10.50586,18.03516h-42.56836zM12.98242,51.55078c-0.387,-0.05063 -0.78294,0.12828 -0.99219,0.48828c-0.271,0.48 -0.10986,1.09109 0.36914,1.37109c0.161,0.09 0.33,0.12891 0.5,0.12891c0.35,0 0.68014,-0.18 0.86914,-0.5c0.271,-0.47 0.11086,-1.08937 -0.36914,-1.35937c-0.11975,-0.07 -0.24795,-0.11203 -0.37695,-0.12891z"></path></g></g></motion.svg>
                    </a>
                </motion.div>
            </div>

            <motion.div className={styles.backWords} style={{ y }}>
                @
            </motion.div>
        </motion.section>
    )
}