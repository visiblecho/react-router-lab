import { Link } from 'react-router'

const NavBar = () => {
    const navStyle = {
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
    }

    return (
        <nav style={navStyle}>
            <Link to='/'>Home</Link>
            <Link to='/mailboxes'>Mailboxes</Link>
            <Link to='/new-mailbox'>New Mailbox</Link>
        </nav>
    )
}

export default NavBar