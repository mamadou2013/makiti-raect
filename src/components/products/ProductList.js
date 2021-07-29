import {Row, Col} from 'react-bootstrap';
import ProductItem from './ProductItem';

const ProductList = (props)=>{
    return(
        <Row>
            {
                props.products.map((product)=>{
                    return (
                            <Col lg={3} md={4} sm={5} xs={10} >
                                <ProductItem product={product} key={product.id} />
                            </Col>
                        );
                })
            }
        </Row>
    );
}

export default ProductList;