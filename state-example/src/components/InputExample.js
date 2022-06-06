import { useState } from "react";
import React from "react";

function InputExample() {
    const [form, setForm] = useState({ name: "", surname: "" });
    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <>
            Name <br />
            <input name="name" value={form.name} onChange={onChangeInput} />
            <br />
            Surname <br />
            <input name="surname" value={form.surname} onChange={onChangeInput} />
            <br />
            {form.name} {form.surname}
        </>
    )
}

export default InputExample;
