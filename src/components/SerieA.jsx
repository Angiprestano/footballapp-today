import { Card, Button } from "react-bootstrap";

const SerieA = () => {
  return (
    <>
      <h4 className="ms-4 mt-4 fst-italic ">Serie A</h4>
      <div className="d-flex ms-3 mt-2">
        <Card style={{ width: "15rem" }}>
          <Card.Img
            variant="top"
            src="https://thepitchfootball.com/images/thepitch/products/small/DX2616409.webp"
          />
          <Card.Body>
            <Card.Title>Maglia Inter 2023/24</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-primary" className="p-1 mt-4">
              Acquista
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }} className="ms-4">
          <Card.Img
            variant="top"
            src="https://static.sscnapoli.it/img/p/6/9/5/7/6957-home_default.jpg"
          />
          <Card.Body>
            <Card.Title>Maglia Napoli 2023/24</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-primary" className="mt-4">
              Acquista
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }} className="ms-4">
          <Card.Img
            variant="top"
            src="https://outletdelcalcio.eu/cdn/shop/files/Progettosenzatitolo_dc7f6327-d1d7-47c6-a490-190e4018edeb_grande.png?v=1692873424"
          />
          <Card.Body>
            <Card.Title>Maglia Roma 2023/24</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-primary" className="mt-4">
              Acquista
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }} className="ms-4">
          <Card.Img
            variant="top"
            src="https://www.laziostylestore.com/images/lazio/products/large/LZ23A01_1.webp"
          />
          <Card.Body>
            <Card.Title>Maglia Lazio 2023/24</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-primary" className="mt-4">
              Acquista
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }} className="ms-4">
          <Card.Img
            variant="top"
            src="https://store.atalanta.it/images/atalanta/products/large/AT23A01_1.webp"
          />
          <Card.Body>
            <Card.Title>Maglia Atalanta 2023/24</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-primary">Acquista</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }} className="ms-4">
          <Card.Img
            variant="top"
            src="https://store.acmilan.com/cdn/shop/products/770382-A81_01_7ec9fca7-8251-4d97-9127-3162983d2f3c.jpg?v=1694005520"
          />
          <Card.Body>
            <Card.Title>Maglia Milan 2023/24</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-primary" className="mt-3">
              Acquista
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }} className="ms-4 me-2">
          <Card.Img
            variant="top"
            src="https://store.juventus.com/data/store/product/5/59355/product.jpg"
          />
          <Card.Body>
            <Card.Title>Maglia Juventus 2023/24</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-primary">Acquista</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default SerieA;
