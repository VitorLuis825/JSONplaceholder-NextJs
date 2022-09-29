const comments = ({comments})=>{
    return(
        <main>
            {comments.map(({postId,id,name,email,body})=>{
                return( 
                    <div key={id}>
                        <div>{postId}</div>
                        <div>{id}</div>
                        <div>{name}</div>
                        <div>{email}</div>
                        <div>{body}</div>
                        <hr></hr>
                    </div>
                )
            })}
        </main>
    )
}

// Não uso getServerSideProps pq n preciso roda-lo na hora da requisição e sim no build time
export async function getStaticProps(){
    const res = await fetch("https://jsonplaceholder.typicode.com/comments")
    const result = await res.json()
    return {
        props:{
            comments : result
        }
    }
}

export default comments