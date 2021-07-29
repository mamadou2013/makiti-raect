import {Col, Row} from 'react-bootstrap';
import ServiceItem from './ServiceItem';

const ServiceList = (props)=>{
    return (
        <Row>
            {
                props.services.map((item)=>{
                    return(
                        <Col lg={4} md={5} sm={10} xs={12} className="p-1">
                            <ServiceItem key={item.id} item={item}/>
                        </Col>
                    );
                })
            }
        </Row>
    );
}

export default ServiceList;