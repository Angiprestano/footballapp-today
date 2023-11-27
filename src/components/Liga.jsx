import { Card, Button } from "react-bootstrap";

const Liga = () => {
  return (
    <>
      <h4 className="ms-4 mt-4 fst-italic ">Liga</h4>
      <div className="d-flex ms-3 mt-3 mb-3">
        <Card style={{ width: "15rem" }}>
          <Card.Img
            variant="top"
            src="https://calcioitalia.com/media/cache/sylius_shop_product_large_thumbnail/8f/1e/be0fa708b2c05c7534d54361528c.jpeg"
          />
          <Card.Body>
            <Card.Title>Maglia Barcellona 2023/24</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-primary" className="p-1">
              Acquista
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }} className="ms-4">
          <Card.Img
            variant="top"
            src="https://www.merchandisingplaza.com/514330/2/Maglie-2023-24-Valencia-Maglia-2023-24-Valencia-Home-l.jpg"
          />
          <Card.Body>
            <Card.Title>Maglia Valencia 2023/24</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-primary">Acquista</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }} className="ms-4">
          <Card.Img
            variant="top"
            src="https://www.passionemaglie.it/wp-content/uploads/2023/06/maglia-home-betis-front-23-24.jpg"
          />
          <Card.Body>
            <Card.Title>Maglia Betis Siviglia 2023/24</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-primary">Acquista</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }} className="ms-4">
          <Card.Img
            variant="top"
            src="https://www.joma-sport.com/dw/image/v2/BFRV_PRD/on/demandware.static/-/Sites-joma-masterCatalog/default/dw38cf5ab7/images/medium/AC10601A0202_4.jpg?sw=460&sh=475&sm=fit"
          />
          <Card.Body>
            <Card.Title>Maglia Getafe 2023/24</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-primary">Acquista</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }} className="ms-4">
          <Card.Img
            variant="top"
            src="https://images.footballfanatics.com/real-madrid/real-madrid-adidas-home-shirt-2023-24-with-vini-jr-7-printing_ss4_p-14429789+pv-1+u-11o4q8f43oa5tocjk1xl+v-47ec8b73895648f8827866c1402ab432.jpg?_hv=2&w=900"
          />
          <Card.Body>
            <Card.Title>Maglia Real Madrid 2023/24</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-primary">Acquista</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }} className="ms-4">
          <Card.Img
            variant="top"
            src="https://www.merchandisingplaza.com/508623/2/Maglie-2023-24-Real-Sociedad-Maglia-2023-24-Real-Sociedad-Home-l.jpg"
          />
          <Card.Body>
            <Card.Title>Maglia Real Sociedad 2023/24</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-primary">Acquista</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }} className="ms-4 me-2">
          <Card.Img
            variant="top"
            src="https://img.fruugo.com/product/5/54/76582545_max.jpg"
          />
          <Card.Body>
            <Card.Title>Maglia Siviglia 2023/24</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-primary">Acquista</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Liga;
