import {  Form, Formik } from "formik"
import * as Yup from "yup"
import { Container, Button, Paper} from "@mui/material"
import Textfield from "./Textfield.tsx"
import { toast } from 'react-toastify'
import { Tooltip } from 'react-tooltip'

const LoginForm = () => {
  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Login is required")
      .min(3, "Login must be at least 3 characters")
      .max(15, "Login must be not more than 15 characters"),
    email: Yup.string()
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        "Invalid email format"
      )
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "Password must be at least 6 characters")
      .max(20, "Password must be not more than 20 characters")
    }
  )

  const handleFormSubmit = (values: {
    username: string
    email: string
    password: string
  }) => {
    toast.success("Form submitted successfully", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
    console.log(values)
  }

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      onSubmit={handleFormSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <Container sx={{ mt: 25, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        <h1>React Toastify and React Tooltip </h1>
        <Paper sx={{width: 450, p: 4}} elevation={3}>
          <Textfield data-tooltip-id="my-tooltip" data-tooltip-content="Username" data-tooltip-variant="info" label="Username" variant="outlined" type="text" name="username" sx={{width: 450}}></Textfield>
          <br />
          <br />
          <Textfield data-tooltip-id="my-tooltip" data-tooltip-content="Email" data-tooltip-variant="info" label="Email" variant="outlined" type="email" name="email" sx={{width: 450}}></Textfield>
          <br />
          <br />
          <Textfield data-tooltip-id="my-tooltip" data-tooltip-content="Password" data-tooltip-variant="info" label="Password" variant="outlined" type="password" name="password" sx={{width: 450}}></Textfield>
          <br />
          <br />
          <Button size="large" variant="contained" type="submit">Login</Button>
          <Tooltip id="my-tooltip" place="top-end"/>
        </Paper>
        </Container>
      </Form>
    </Formik>
  )
}

export default LoginForm