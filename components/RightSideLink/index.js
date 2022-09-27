import Link from 'next/link'
import styles from './RightSideLink.module.css'

const RightSideLink = ({text})=>{
    return(
        <Link href={`/${text}`} passHref>
            <a className={styles.link}>
                <span className={styles.span}>{text}</span>
            </a>
        </Link>
    )
}

export default RightSideLink