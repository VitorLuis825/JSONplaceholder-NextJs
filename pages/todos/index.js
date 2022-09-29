const todos = ({todos})=>{
    return(
        <main>
            {todos.map(({userId,id,title,completed})=>{
                return( 
                    <div key={id}>
                        <div>{userId}</div>
                        <div>{id}</div>
                        <div>{title}</div>
                        <div>{completed}</div>
                        <hr></hr>
                    </div>
                )
            })}
        </main>
    )
}
// Não uso getServerSideProps pq n preciso roda-lo na hora da requisição e sim no build time
export async function getStaticProps(){
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
    const result = await res.json()
    return {
        props:{
            todos : result
        }
    }
}

export default todos