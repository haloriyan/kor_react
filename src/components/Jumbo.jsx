import { BiChevronRight, BiHome } from "react-icons/bi";
import styles from "./styles/Jumbo.module.css";
const Jumbo = ({title = 'Exhibition', action = null, breadcrumb = null, background = "/jumbo_background.jpg"}) => {
    return (
        <div className={styles.Jumbo}>
            <img 
                src={background} alt="bege" 
                className={styles.Background}
            />
            <div className={styles.Content}>
                <div className={styles.Navigation}>
                    <BiHome />
                    <BiChevronRight />
                    {
                        breadcrumb === null ? title : breadcrumb
                    }
                </div>

                <div className={styles.Separator}></div>
                <div className={styles.Title}>{title}</div>

                {
                    action !== null &&
                    <div className={styles.ActionWrapper}>
                        <div className={styles.Action}>
                            <div>{action.text}</div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Jumbo;