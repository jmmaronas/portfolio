import {Nav} from 'react-bootstrap'

export default function LinkItem({link}){
    return <Nav.Link className='fs-5' href={link.href}>{link.title}</Nav.Link>
}