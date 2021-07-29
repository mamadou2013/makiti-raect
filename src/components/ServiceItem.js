import {Card} from 'react-bootstrap';

const ServiceItem = (props)=>{
    return (
        <Card
            text={ 'dark'}
            style={{ width: '15rem', border:'none', background: `${props.item.background}`, display: 'inline-block'}}
            >
            <Card.Body className='d-flex'>
                <Card.Img variant="top" src={props.item.icon} style={{width: '35%', height: '3rem'}} />
                <Card.Text>
                    {props.item.name}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ServiceItem;