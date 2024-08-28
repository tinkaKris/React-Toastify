import LoginForm from "./components/LoginForm.tsx"
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div>
      <div >
        <LoginForm />
      </div>
      <ToastContainer/>
    </div>
  )
}

export default App