import RightSideLink from '../RightSideLink'
import BLink from '../BLink'
import styles from './Header.module.css'

const Header = ()=>{
    return(
        <header className = {styles.header}>
            <BLink href="/">
                <h1 className={styles.h1}>O site pacarlho</h1>
            </BLink>
            <div className={styles.right_side}>
                <RightSideLink text="posts"></RightSideLink>
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