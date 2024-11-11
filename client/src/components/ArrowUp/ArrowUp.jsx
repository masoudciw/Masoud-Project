import React from 'react';

// styles
import styles from "./ArrowUp.module.css";

const ArrowUp = () => {
    return (
        <>
            <div className={styles.arrowBox}>
                <div className={styles.container}>
                    <div className={styles.wrapper}>
                        <svg viewBox="0 0 42.67 64" onClick={() => goTop()}>
                            <path class="cls-1" d="M19.57.78.78,19.5a2.67,2.67,0,0,0,3.77,3.78L18.67,9.21V61.33a2.67,2.67,0,1,0,5.33,0V9L38.11,23.27a2.67,2.67,0,1,0,3.78-3.76L23.35.79a2.67,2.67,0,0,0-3.78,0Z" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
};

window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    const showContainer = document.getElementsByClassName(styles.container);
    // console.log(scrolled)
    if (scrolled >= 10) {
        for (let i = 0; i < showContainer.length; i++) {
            showContainer[i].classList.add(styles.showContainer)
        }
    }
    if (scrolled <= 1500) {
        for (let i = 0; i < showContainer.length; i++) {
            showContainer[i].classList.remove(styles.showContainer)
        }
    }

})

function goTop() {
    let i = setInterval(() => {
        window.scrollBy(0, -10000);
        if (document.querySelector('html').scrollTop === 0) {
            clearInterval(i);
        }
    }, 5);
}

export default ArrowUp;