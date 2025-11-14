import { useParams } from 'react-router'

const MailboxDetails = (props) => {
    const { id } = useParams()
    const selectedBox = props.mailboxes.find(
        (mailbox) => mailbox._id === Number(id)
    )
    if (!selectedBox) return <p>Mailbox not found</p>

    return (
        <>
            <h1>Mailbox {id}</h1>
            <p>Owner: {selectedBox.boxOwner}</p>
            <p>Size: {selectedBox.boxSize}</p>
        </>
    )
}

export default MailboxDetails