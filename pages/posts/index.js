const posts = ({posts})=>{
    return(
        <main>
            {posts.map(({title,body,userId,id})=>{
                return( 
                    <div>
                        <h2>{title}</h2>
                        <p>{body}</p>
                    </div>
                )
            })}
        </main>
    )
}
// Não uso getServerSideProps pq n preciso roda-lo na hora da requisição e sim no build time
export async function getStaticProps(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const result = await res.json()
    return {
        props:{
            posts : result
        }
    }
}

export default posts