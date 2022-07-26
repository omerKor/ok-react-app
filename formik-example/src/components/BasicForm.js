import React from 'react';
import { useFormik } from 'formik';
function BasicForm() {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            gender: 'male',
            hobies: [],
            country: ""
        },
        onSubmit: values => {
            console.log(values);
        },
    });
    return (
        <div className="App">
            <h1>Sign Up</h1>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="firstName">First Name </label>
                <input name='firstName' value={formik.values.firstName} onChange={formik.handleChange} />
                <br /><br />
                <label htmlFor="lastName">Last Name </label>
                <input name='lastName' value={formik.values.lastName} onChange={formik.handleChange} />
                <br /><br />
                <label htmlFor="email">Email </label>
                <input name='email' value={formik.values.email} onChange={formik.handleChange} />
                <br /><br />
                <label htmlFor="gender"></label>
                <span>Male</span>
                <input type="radio" name='gender' value="male" onChange={formik.handleChange} checked={formik.values.gender === "male"} />
                <span>Female</span>
                <input type="radio" name='gender' value="female" onChange={formik.handleChange} checked={formik.values.gender === "female"} />
                <br /><br />
                <div>
                    Football
                    <input type="checkbox" name="hobies" value="Football" onChange={formik.handleChange} />
                </div>
                <div>
                    Cinema
                    <input type="checkbox" name="hobies" value="Cinema" onChange={formik.handleChange} />
                </div>
                <div>
                    Photography
                    <input type="checkbox" name="hobies" value="Photography" onChange={formik.handleChange} />
                </div>
                <br /><br />
                <select name="country" onChange={formik.handleChange}>
                    <option value="turkiye">Türkiye</option>
                    <option value="england">England</option>
                    <option value="usa">Usa</option>
                </select>
                <br /><br />
                <button type="submit">Submit</button>
                <br /><br />
                <code>
                    {JSON.stringify(formik.values)}
                </code>
            </form>
        </div>
    );
}

export default BasicForm;
