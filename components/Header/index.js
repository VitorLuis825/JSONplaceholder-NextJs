import RightSideLink from '../RightSideLink'
import styles from './Header.module.css'

const Header = ()=>{
    return(
        <header className = {styles.header}>
            <h1 className={styles.h1}>O site pacarlho</h1>
            <div className={styles.right_side}>
                <RightSideLink text="post"></RightSideLink>
                <RightSideLink text="comments"></RightSideLink>
                <RightSideLink text="albums"></RightSideLink>
                <RightSideLink text="photos"></RightSideLink>
                <RightSideLink text="todos"></RightSideLink>
                <RightSideLink text="users"></RightSideLink>
            </div>
        </header>
    )
}

export default Header