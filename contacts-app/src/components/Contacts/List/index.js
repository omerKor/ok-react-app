import React, { useState } from 'react'

function List({ contacts }) {
    const [filterText, setFilterText] = useState("");

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => {
            return item[key]
            .toString()
            .toLowerCase()
            .includes(filterText.toLowerCase());
        });
    });
    return (
        <>
            <input placeholder="Search Contact" value={filterText} onChange={(e) => setFilterText(e.target.value)} />
            <ul className='list'>
                {filtered.map((contact, i) => (
                    <li key={i}>
                        {contact.fullName} / {contact.phoneNumber}
                    </li>
                ))}
            </ul>
        </>
    )
}
export default List;