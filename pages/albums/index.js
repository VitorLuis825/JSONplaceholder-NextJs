const albums = ({albums})=>{
    return(
        <main>
            {albums.map(({userId,id,title})=>{
                return( 
                    <div key={id}>
                        <div>{userId}</div>
                        <div>{id}</div>
                        <div>{title}</div>
                        <hr></hr>
                    </div>
                )
            })}
        </main>
    )
}
// Não uso getServerSideProps pq n preciso roda-lo na hora da requisição e sim no build time
export async function getStaticProps(){
    const res = await fetch("https://jsonplaceholder.typicode.com/albums")
    const result = await res.json()
    return {
        props:{
            albums : result
        }
    }
}

export default albums