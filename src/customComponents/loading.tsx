import {motion} from 'motion/react'
import styles from '@/custom.module.css'
export default function Loading({callback}: {callback: () => void}){
    return(
        <motion.div exit={{opacity:0}} className="flex justify-center items-center text-5xl roboto-mono absolute top-24" onAnimationEnd={callback}>
            <div className={`inline-bloc border-r-2 border-orange-300 ${styles.animateClass} overflow-clip`} >
                Website Loading...
            </div>
            
        </motion.div>
    )
}