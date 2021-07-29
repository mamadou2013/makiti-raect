import {Card} from 'react-bootstrap';
import classes from './ProductItem.module.css';

const ProductItem = (props)=>{
    return(
        <Card className={classes.cardItem} style={{border: 'none'}}>
            <Card.Img variant="top" src={props.product.picture} alt={props.product.name} className={classes.cardImage}/>
            <Card.Body>
                <h5 className={classes.price} >{props.product.price} GNF</h5>
                <Card.Text className={classes.description}>{props.product.description}</Card.Text>
                <Card.Text className={classes.date}>Aujourd'hui a 12:00</Card.Text>
                <a href="#call" className="btn btn-color-call" style={{color:'white', backgroundColor: '#cc6613', textDecoration: 'white', width: '55%', marginTop: '5px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-telephone-fill me-1" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                    Appeller
                </a>
                <a href="#write" className="btn btn-color-write" style={{color:'white', backgroundColor: '#3a9fc7', textDecoration: 'white', width: '45%', marginTop: '5px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cursor-fill me-1" viewBox="0 0 16 16">
                        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
                    </svg>
                    Ecrire
                </a>
            </Card.Body>
        </Card>
    );
}

export default ProductItem;