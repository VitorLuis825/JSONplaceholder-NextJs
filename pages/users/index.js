import BLink from "../../components/BLink"
import styles from "./users.module.css"

const users = ({users})=>{
    return(
        <main className={styles.main}>
            {users.map(({id,name,username,email,address : {street,suite,city,zipcode, geo : {lat,lng}},img})=>{
                return( 
                    <div className={styles.container} key={id}>
                        <div className={styles.left}>
                            <img src={img}></img>
                            <h2 className={styles.name}>{username}</h2>
                            <h3 className={styles.city}>{city}</h3>
                        </div>
                        <div className={styles.right}>
                            <BLink href={`/users/${id}`} className={styles.button}>
                                    Visitar perfil.
                            </BLink>
                        </div>
                    </div>
                )
            })}
        </main>
    )
}
// Não uso getServerSideProps pq n preciso roda-lo na hora da requisição e sim no build time
export async function getStaticProps(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    let result = await res.json()
    
    // limitar para 20 usuarios
    result = result.slice(0,20)
    // adicionar imagem pra cada obj de usuario
    result = result.map((obj)=>{
        return {...obj, img : `https://via.placeholder.com/150/0000FF/808080?text=${obj.name}`}
    })
    return {
        props:{
            users : result
        }
    }
}

export default users