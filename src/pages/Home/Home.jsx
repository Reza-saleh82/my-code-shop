import NavSite from "../../component/NavSite/NavSite";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import './Home.css'
import { useProductContext } from "../../context/contextBank";


function Home() {
  const { productsData } = useProductContext();
  console.log('productsData in Home:', productsData);
  return (
    <>
      <NavSite />
      <div style={{ marginTop: '100px' }}>
        <Container fluid="md">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="products">
              <div className="boxH2">
                <h2>محصولات</h2>
              </div>
              <div className="boxProducts">
                {productsData && productsData.map((item) => (
                  <Card className="product-card" key={item.id}>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                      <Card.Title>{`name : ${item.title}`}</Card.Title>
                      <Card.Text>
                        {`Category : ${item.category}`}
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
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