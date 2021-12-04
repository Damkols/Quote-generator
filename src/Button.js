import React, { useEffect, useState } from 'react';
import styles from './Button.module.css';

const Button = () => {
    const [data, setData] = useState("");

    useEffect(() => {
        fetchAdvice();
    }, [])

    const fetchAdvice = () => {
        fetch("https://api.adviceslip.com/advice")
        .then(res => {
            return res.json();
        })
        .then(data => {
            setData(data.slip.advice)
        })
    }

    console.log(data);

    return (
        <div className={styles.container}>
            <div className={styles.adv}>{ data }</div>
            <button onClick={() => fetchAdvice()} className={styles.fetch}>
                <span>Give me advice</span>
            </button>
        </div>
    )
}

export default Button
