import { useEffect, useState } from 'react'
import List from "./List"
import Form from "./Form"
import "./styles.css"
function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullName:"Ömer Kor",
            phoneNumber:"05050762193",
        },
        {
            fullName:"Toygar Kandemir",
            phoneNumber:"05544244772",
        },
    ]);
    useEffect(() => {
        console.log(contacts);
    }, [contacts]);
    return (
        <div className='Container'>           
            <List contacts={contacts}/>
            <Form addContact={setContacts}  contacts={contacts}/>
        </div>
    )
}

export default Contacts;