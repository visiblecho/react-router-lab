import { useNavigate } from 'react-router'

const MailboxList = (props) => {
    const navigate = useNavigate()

    return (
        <ul>
            {props.mailboxes.map(mailbox => (
                <li
                    key={mailbox._id}
                    className='mail-box'
                    onClick={() => navigate(`/mailboxes/${mailbox._id}`)}
                >
                    {mailbox._id}
                </li>
            ))}
        </ul>
    )
}

export default MailboxList