import {motion, AnimatePresence} from 'framer-motion'
import {useSnapshot} from 'valtio'
import state from '../store'

import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from "../config/motion.js"
import {CustomButton} from "../components/";

export default function Home() {
    const snap = useSnapshot(state);

    return (
        <AnimatePresence>
            {snap.intro &&
                <motion.section className="home" {...slideAnimation('left')}>
                    <motion.header className="">
                        <img src="/threejs.png" alt="logo" className="w-8 h-8 object-contain"/>
                    </motion.header>

                    <motion.div className="home-content" {...headContainerAnimation}>
                        <motion.div {...headTextAnimation}>
                            <h1 className="head-text">
                                LET'S <br className="xl:block hidden"/> DO IT.
                            </h1>
                        </motion.div>
                        <motion.div {...headContentAnimation} className="flex flex-col gap-5">
                            <p className="xl:block hidden max-w-md font-normal text-black drop-shadow-xl text-base">
                                Create your unique and exclusive shirt with our
                                brand-new 3D customization tool. <strong>Unleash your
                                imagination</strong>{" "}
                                and define your own style.
                            </p>

                            <CustomButton
                                type="filled"
                                title="Customize It"
                                handleClick={() => state.intro = false}
                                customStyles={"w-fit px-4 py-2.5 font-bold text-sm"}
                            />
                        </motion.div>
                    </motion.div>

                </motion.section>
            }
        </AnimatePresence>
    )
}