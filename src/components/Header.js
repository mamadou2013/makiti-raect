import {Container, Row, Carousel} from 'react-bootstrap';
import ServiceList from './ServicceList';

const services = [
    {
      id:'s1',
      name:"Electroninque informatique",
      icon:"./assets/icons/electronic.png",
      background:"#c9f6ba"
    },
    {
        id:'s2',
      name:"Transport",
      icon:"./assets/icons/transport.png",
      background:"#b6eff2"
    },
    {
        id:'s3',
      name:"Immobiliers",
      icon:"./assets/icons/immobilier.svg",
      background:"#d3ebcf"
    },
    {
        id:'s4',
      name:"Vêtements",
      icon:"./assets/icons/vetement.svg",
      background:"#b7e6f1"
    },
    {
        id:'s5',
      name:"Aliments",
      icon:"./assets/icons/aliment.svg",
      background:"#fdddca"
    },
    {
        id:'s6',
      name:"Electroménagers",
      icon:"./assets/icons/electromenager.svg",
      background:"#c6eee7"
    },
    {
        id:'s7',
      name:"Elmplois",
      icon:"./assets/icons/emplois.svg",
      background:"#cdd1eb"
    },
    {
        id:'s8',
      name:"Services",
      icon:"./assets/icons/service.svg",
      background:"#f6f0bc"
    },
    {
        id:'s9',
      name:"Divers",
      icon:"./assets/icons/divers.svg",
      background:"#eee9d8"
    },
  ];
const Header = ()=>{
    return(
        <Container fluid style={{marginTop: '9%'}}>
            <Row className="mx-1">
                <div className="col-6">
                    <ServiceList services={services}/>
                </div>
                <div className="col-6">
                <Carousel>
                    <Carousel.Item style={{height: '16rem'}}>
                        <img
                        className="d-block w-100"
                        src="./assets/icons/makiti-carous.svg"
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item style={{height: '16rem'}}>
                        <img
                        className="d-block w-100"
                        src="./assets/icons/makiti-carous.svg"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>
                </div>
            </Row>
        </Container>
    );
}

export default Header;