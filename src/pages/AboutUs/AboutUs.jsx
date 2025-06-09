import { Container } from "react-bootstrap";
import NavSite from "../../component/NavSite/NavSite";


function AboutUs() {
  return (
    <div>
      <NavSite />
      <div style={{ marginTop: '100px' }}>
        <Container fluid="md">
          <h1>AboutUs</h1>
        </Container>
      </div>
    </div>
  )
}

export default AboutUs;