import { useState } from 'react'

const MailboxForm = (props) => {

    const [owner, setOwner] = useState('')
    const [size, setSize] = useState('Medium')

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addMailbox({
            boxSize: size,
            boxOwner: owner
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='owner'>Owner</label>
            <input
                id='owner'
                type='text'
                placeholder='Ana Banana'
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
            />
            <label htmlFor='size'>Size</label>
            <select
                id='size'
                value={size}
                onChange={(e) => setSize(e.target.value)}
            >
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
            </select>
            <button
                type='submit'
                disabled={!owner}
            >Submit</button>
        </form>
    )
}

export default MailboxForm