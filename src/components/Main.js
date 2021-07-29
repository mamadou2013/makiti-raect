import {Container, Row} from 'react-bootstrap';
import ProductList from './products/ProductList';

const products = [
    {
        id:1,
        name:'Nike for man',
        price:800000,
        description:'Chaussure Nike à vendre',
        picture:'./assets/images/product1.png'
      },
      {
        id:2,
        name:'Nike for man',
        price:800000,
        description:'Chaussure Nike à vendre',
        picture:'./assets/images/product2.png'
      },
      {
        id:3,
        name:'Nike for man',
        price:800000,
        description:'Chaussure Nike à vendre',
        picture:'./assets/images/product3.png'
      },
      {
        id:4,
        name:'Nike for man',
        price:800000,
        description:'Chaussure Nike à vendre',
        picture:'./assets/images/product4.png'
      },
      {
        id:5,
        name:'Nike for man',
        price:800000,
        description:'Chaussure Nike à vendre',
        picture:'./assets/images/product4.png'
      },
      {
        id:6,
        name:'Nike for man',
        price:800000,
        description:'Chaussure Nike à vendre',
        picture:'./assets/images/product3.png'
      },
      {
        id:7,
        name:'Nike for man',
        price:800000,
        description:'Chaussure Nike à vendre',
        picture:'./assets/images/product2.png'
      },
      {
        id:8,
        name:'Nike for man',
        price:800000,
        description:'Chaussure Nike à vendre',
        picture:'./assets/images/product1.png'
      }
];
const Main = ()=>{
    return (
        <Container fluid>
            <Row className="m-2">
                <div className="col-3">
                    <img src="./assets/images/makiti-slid.png" alt="" srcset="" style={{height: '60rem', width: '100%'}}/>
                </div>
                <div className="col-9">
                    <h2>Top Anonces</h2>
                    <ProductList products={products}  />
                    <h2>Anonces recentes</h2>
                    <ProductList products={products}  />
                </div>
            </Row>
        </Container>
    );
}

export default Main;