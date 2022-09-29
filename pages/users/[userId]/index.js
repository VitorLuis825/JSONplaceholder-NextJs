import styles from "./userId.module.css"

const userId = ({user : {name,username,email,address : {street,suite,city,zipcode, geo : {lat,lng}},phone,website,company : {name : companyName,catchPhrase,bs},img}})=>{
    return(
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <img src={img} />
                    <div className={styles.name}>{name}</div>
                    <div>
                        <h1>Dados Pessoais</h1>
                        <div>Telefone {phone}</div>
                        <div>Website {website}</div>
                        <div>E-mail {email}</div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.upper_right}>
                        <h1>Dados da empresa</h1>
                        <div>Nome: {companyName}</div>
                        <div>Slogan : {catchPhrase}</div>
                        <div>{bs}</div>
                    </div>
                    <div className={styles.lower_right}>
                        <h1>Dados de endereço</h1>
                        <div>Rua: {street} </div>
                        <div>Numero: {suite} </div>
                        <div>Cidade: {city} </div>
                        <div>Código postal: {zipcode} </div>
                        <div>Latitude : {lat}</div>
                        <div>Longitude : {lng}</div>

                    </div>
                </div>
            </div>
        </main>
    )
}
// Não uso getServerSideProps pq n preciso roda-lo na hora da requisição e sim no build time
export async function getStaticPaths(){
    const usuarios  = 20
    let array = []
    
    for(let i = 0;  i < usuarios ;i++){
        array.push({params : {userId : String(i)}})
    }

    return(
            {
                paths: array,
                fallback: false
            }
        ) 
}

export async function getStaticProps(context){
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    let result = await res.json()
    
    // limitar para 20 usuarios
    result = result.slice(0,20)
    // adicionar imagem pra cada obj de usuario
    result = result.map((obj)=>{
        return {...obj, img : `https://via.placeholder.com/400/0000FF/808080?text=${obj.name}`}
    })
    
    // Pegar dados do usuario em questão
    const userId = context.params.userId
    return {
        props:{
            user : result[userId - 1]
        }
    }
}

export default userId