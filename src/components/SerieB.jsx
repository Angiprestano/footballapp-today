import { Card, Button } from "react-bootstrap";

const SerieB = () => {
  return (
    <>
      <h4 className="ms-4 mt-3 fst-italic ">Serie B</h4>
      <div className="d-flex ms-3 mt-2">
        <Card style={{ width: "15rem" }}>
          <Card.Img
            variant="top"
            src="https://store.sscalciobari.it/109340-thickbox_default/ssc-bari-maglia-kappa-kombat-home-2023-24-spedizione-in-7-giorni-lavorativi.jpg"
          />
          <Card.Body>
            <Card.Title>Maglia Bari 2023/24</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-primary" className="p-1">
              Acquista
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }} className="ms-4">
          <Card.Img
            variant="top"
            src="https://www.eyesportshop.com/13116-large_default/maglia-gara-home-cagliari-calcio-202324.jpg"
          />
          <Card.Body>
            <Card.Title>Maglia Cagliari 2023/24</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-primary">Acquista</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }} className="ms-4">
          <Card.Img
            variant="top"
            src="data:image/jpeg;base64,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"
          />
          <Card.Body>
            <Card.Title>Maglia Como 2023/24</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-primary">Acquista</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }} className="ms-4">
          <Card.Img
            variant="top"
            src="https://m.media-amazon.com/images/I/511JOlA+stL._AC_UY780_.jpg"
          />
          <Card.Body>
            <Card.Title>Maglia Palermo 2023/24</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-primary">Acquista</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }} className="ms-4">
          <Card.Img
            variant="top"
            src="https://store.frosinonecalcio.com/wp-content/uploads/2023/07/HOME-SHIRT-TRE-QUARTI.jpg"
          />
          <Card.Body>
            <Card.Title>Maglia Frosinone 2023/24</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-primary">Acquista</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }} className="ms-4">
          <Card.Img
            variant="top"
            src="https://m.media-amazon.com/images/I/61JwVGgjMxL._AC_UY1000_.jpg"
          />
          <Card.Body>
            <Card.Title>Maglia Cittadella 2023/24</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-primary">Acquista</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }} className="ms-4 me-2">
          <Card.Img
            variant="top"
            src="https://www.macron.com/cdn-cgi/image/quality=85/media/catalog/product/cache/7854776c5a059fa4314600f243e72018/6/a/6a2c17fa3dc41ee32b8e583720644bfa58583632.jpg"
          />
          <Card.Body>
            <Card.Title>Maglia Ternana 2023/24</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-primary">Acquista</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default SerieB;
