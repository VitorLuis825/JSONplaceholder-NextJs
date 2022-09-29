// Better link

import Link from 'next/link'

const BLink = ({href,children,className})=>{
    return(
        <Link href={href} passHref>
            <a className={className}>
                {children}
            </a>
        </Link>
    )
}

export default BLink