import styles from "./Module css Components/Saved_AddedList.module.css"

function SavedList() {

    return(
        <div className={styles.Box}>
            <ul>
                <li>Aviso 1</li>
                <li>Aviso 2</li>
                <li>Aviso 3</li>
            </ul>
        </div>
    );
  }
  
  export default SavedList