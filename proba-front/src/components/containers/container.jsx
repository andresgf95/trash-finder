import styles from "./container.module.css"

function Container ( { state, children } ) {

    const [ open, setActive ] = state

    return(
        <>
        { open &&
        <div className={styles.container} >
            <div className={styles.box + " " + styles.shadow} >
                <button className={styles.close + " " + styles.shadow} onClick={ ()=>{setActive(false)} }>
                    x
                </button>
                {children}
            </div>
        </div>
        }
        </>
    )
}

export default Container