import { Container } from "react-bootstrap";
import NavSite from "../../component/NavSite/NavSite";

function Login() {
  return (
    <div>
      <NavSite />
      <div style={{ marginTop: '100px' }}>
        <Container fluid="md">
          <h1>Login</h1>
        </Container>
      </div>
    </div>
  )
}

export default Login;