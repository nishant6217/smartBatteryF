import "./Login.css";
import { Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



const schema = Yup.object().shape({
    email: Yup.string()
        .required("Email is a required field")
        .email("Invalid email format"),
    password: Yup.string()
        .required("Password is a required field")
        .min(6, "Password must be at least 8 characters")
});

function Login() {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) navigate('/home')
    }, [])
    return (
        <>
            <Formik
                validationSchema={schema}
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => {
                    axios({
                        method: 'post',
                        url: 'http://localhost:3030/api/login',
                        data: {
                            email: values.email,
                            password: values.password
                        }
                    }).then((response) => {
                        localStorage.setItem('token', response.data.token)
                        localStorage.setItem('user', response.data.user)
                        return (
                            navigate('/home')
                        )
                    }).catch((error) => {
                        console.log(`error in logging in- ${error}`)
                    });
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit
                }) => (
                    <div className="login">
                        <div className="form">
                            <form noValidate onSubmit={handleSubmit}>
                                <span>Login</span>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    placeholder="Enter email id / username"
                                    className="form-control inp_text"
                                    id="email"
                                />
                                <p className="error">
                                    {errors.email && touched.email && errors.email}
                                </p>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    placeholder="Enter password"
                                    className="form-control"
                                />
                                <p className="error">
                                    {errors.password && touched.password && errors.password}
                                </p>
                                <button type="submit">Login</button>
                            </form>
                        </div>
                    </div>
                )}
            </Formik>
        </>
    );
}

export default Login;
