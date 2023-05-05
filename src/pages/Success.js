import styles from '../styles/success.module.css'

import { BsStars } from 'react-icons/bs'
import Confetti from "react-confetti"

import { useEffect, useState } from 'react'

import { useRouter } from "next/router"

export default function Success({ }) {

    const router = useRouter();

    const [pieces, setPieces] = useState(1000);
    const stopConfetti = () => {
        setTimeout(() => setPieces(0), 3000);
    };


    useEffect(() => stopConfetti(), []);

    return (
        <div className={styles.success_container}>
            <div className={styles.success}>
                <h1>Óla {router.query.name}<BsStars /></h1>
                <p>Obrigado por fazer o acesso nosso site!</p>
            </div>
            <Confetti numberOfPieces={pieces} />
        </div>
    )
}


