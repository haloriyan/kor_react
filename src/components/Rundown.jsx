import moment from "moment";
import styles from "./styles/Rundown.module.css";

const Rundown = ({labels, items = []}) => {
    return (
        <>
            {
                items.map((item, i) => (
                    <div key={i} className={styles.Item}>
                        <div className={styles.ItemLeft}>
                            <div className={styles.Time}>{moment(item.start).format('HH:mm')}</div>
                            <div className={styles.Circle}></div>
                            <div className={styles.VertLine} style={{height: 100}}></div>
                        </div>
                        <div className={styles.ItemRight}>
                            <div className={styles.Title}>{item.title}</div>
                            <div className={styles.Description}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sunt officiis incidunt ipsum reiciendis quaerat et accusamus nihil ab perferendis quidem veritatis sequi consectetur fugit, ducimus harum. Deleniti, enim eius.
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Rundown;