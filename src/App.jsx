import { useState } from 'react'
import { Routes, Route } from 'react-router'
import NavBar from './components/NavBar/NavBar.jsx'
import MailboxList from './components/MailboxList/MailboxList.jsx'
import MailboxForm from './components/MailboxForm/MailboxForm.jsx'
import MailboxDetails from './components/MailboxDetails/MailboxDetails.jsx'

const App = () => {
  const [mailboxes, setMailboxes] = useState([])

  const addMailbox = (config) => {}

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<main><h1>Post Office</h1></main>} />
        <Route path='/mailboxes' element={<MailboxList />} />
        <Route path='/new-mailbox' element={<MailboxForm />} />
        <Route path='/mailboxes/:id' element={<MailboxDetails />} />
      </Routes>
    </>
  )
}

export default App
