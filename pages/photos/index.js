const photos = ({photos})=>{
    return(
        <main>
            {photos.map(({albumId,id,title,url,thumbnailUrl})=>{
                return( 
                    <div key={id}>
                        <div>{albumId}</div>
                        <div>{id}</div>
                        <div>{title}</div>
                        <img src={thumbnailUrl} />
                        <hr></hr>
                    </div>
                )
            })}
        </main>
    )
}
// Não uso getServerSideProps pq n preciso roda-lo na hora da requisição e sim no build time
export async function getStaticProps(){
    const res = await fetch("https://jsonplaceholder.typicode.com/photos")
    const result = await res.json()
    return {
        props:{
            photos : result.slice(0,100)
        }
    }
}

export default photos