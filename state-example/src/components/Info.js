import { useState } from "react";
import React from "react";

function Info() {
    const [name, setName] = useState('Ömer Kor');
    const [age, setAge] = useState(29);
    const [friends, setFriends] = useState(['Toygar', 'Ersin', 'Akın']);
    const [address, setAddress] = useState({ title: 'İzmir', zip: 35140 });
    return (
        <>
            <h1>
                Name: {name}
            </h1>
            <h2>
                Age: {age}
            </h2>
            <button onClick={() => setName("Toygar Kandemir")}> Change Name </button>
            <br />
            <button onClick={() => setAge(30)}> Change Age </button>
            <hr />
            <h2>
                Friends
            </h2>
            {friends.map((friends, i) => (
                <ul key={i}>
                    <li>
                        {friends}
                    </li>
                </ul>
            ))}
            <button onClick={() => setFriends([...friends, 'Oğuzcan'])}> Add New Friend </button>
            <hr />
            <h2>
                Address
            </h2>
            <div>
                {address.title} {address.zip}
            </div>
            <button onClick={() => setAddress({ ...address, title: 'Manavkuyu mahallesi, Sakarya Caddesi, No:28-1, Çağdaş Apartmanı, B-blok, Kat:3, Daire:5 ' })}> Address Detail </button>
        </>
    );
};
export default Info;
