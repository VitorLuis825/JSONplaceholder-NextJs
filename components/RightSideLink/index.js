import styles from './RightSideLink.module.css'
import BLink from '../BLink/'

const RightSideLink = ({text})=>{
    return(
        <BLink href={`/${text}`}>
            <div className={styles.link}>
                <span className={styles.span}>{text}</span>
            </div>
        </BLink>
    )
}

export default RightSideLink