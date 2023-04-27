import AddItem from "../components/AddItem";
import SmallImage from "../components/SmallImage";
import SmallPromptBox from "../components/SmallPromptBox";
import styles from "./Module Css Views/NotificationList.module.css"

function NotificationList() {

    return(
        <div className={styles.FatherBox}>
            <AddItem/>
                <SmallImage/>
                <SmallPromptBox/>
                <SmallImage/>
                <SmallPromptBox/>            
        </div>

    );
  }

  
  export default NotificationList