import AddItem from "../components/AddItem";
import SmallImage from "../components/SmallImage";
import SmallPromptBox from "../components/SmallPromptBox";

function NotificationList() {

    return(
        <div>
            <span>
                <SmallImage/>
                <SmallPromptBox/>
            </span>
            <AddItem/>
        </div>

    );
  }

  
  export default NotificationList