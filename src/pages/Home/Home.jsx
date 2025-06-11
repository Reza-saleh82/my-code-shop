import NavSite from "../../component/NavSite/NavSite";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import './Home.css'
import { useProductContext } from "../../context/contextBank";
import { Link } from "react-router";


function Home() {
  const { productsData } = useProductContext();
  console.log('productsData in Home:', productsData);
  return (
    <>
      <div style={{ marginTop: '100px' }}>
        <Container fluid="md">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="products">
              <div className="boxH2">
                <h1>character</h1>
              </div>
              <div className="boxProducts">
                {productsData && productsData.map((item) => (
                  <Card className="product-card" key={item.id}>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>
                        {`species : ${item.species}`}
                      </Card.Text>
                      <Link to={`/imfo:${item.id}`}>go to</Link>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

    </>
  )
}

export default Home;