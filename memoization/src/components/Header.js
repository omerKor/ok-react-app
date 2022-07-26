import React from 'react'

function Header({ data, increment }) {
    return (
        <div>
            Header
            <br /><br />
            <button onClick={increment}>Add Number2</button>
            <code>{JSON.stringify(data)}</code>
        </div>
    )
}
export default React.memo(Header);