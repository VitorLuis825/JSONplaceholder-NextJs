const users = ({users})=>{
    return(
        <main>
            {users.map(({name,username,email,address : {street,suite,city,zipcode,geo : {lat,lng},phone,website,company,}})=>{
                return( 
                    <div>
                        <div>{username}({name})</div>
                        <div>{email}</div>
                        <div>{street}</div>
                        <div>{suite}</div>
                        <div>{city}</div>
                        <div>{zipcode}</div>
                        <div>{lat}</div>
                        <div>{lng}</div>
                        <div>{phone}</div>
                        <div>{website}</div>
                        <hr></hr>
                    </div>
                )
            })}
        </main>
    )
}
// Não uso getServerSideProps pq n preciso roda-lo na hora da requisição e sim no build time
export async function getStaticProps(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const result = await res.json()
    return {
        props:{
            users : result
        }
    }
}

export default users