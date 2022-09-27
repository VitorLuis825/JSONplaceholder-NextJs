// Better link

import Link from 'next/link'

const BLink = ({href,children})=>{
    return(
        <Link href={href} passHref>
            <a>
                {children}
            </a>
        </Link>
    )
}

export default BLink