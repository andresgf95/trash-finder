import AddItem from "../components/AddItemButton";
import SmallImage from "../components/SmallImage";
import SmallPromptBox from "../components/SmallPromptBox";
import styles from "./Module Css Views/NotificationList.module.css"

function NotificationList() {

    return(
        <section className={styles.FatherBox}>
            <AddItem/>
            <div>
                <SmallImage/>
                <SmallPromptBox/> 
            </div>         
        </section>

    );
  }

  
  export default NotificationList