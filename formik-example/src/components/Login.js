import React from 'react';
import { useFormik } from 'formik';
import Validations from './Validations'
function Login() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirm: ''
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema: Validations
    });
    return (
        <div className="App">
            <h1>Login</h1>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="email">Email </label>
                <input type="email" name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.email && formik.touched.email && (<div className='error'>{formik.errors.email}</div>)}
                <br /><br />
                <label htmlFor="password">Password </label>
                <input type="password" name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.password && formik.touched.password && (<div className='error'>{formik.errors.password}</div>)}
                <br /><br />
                <label htmlFor="passwordConfirm">Confirm Password </label>
                <input type="password" name='passwordConfirm' value={formik.values.passwordConfirm} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.passwordConfirm && formik.touched.passwordConfirm && (<div className='error'>{formik.errors.passwordConfirm}</div>)}
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

export default Login;
