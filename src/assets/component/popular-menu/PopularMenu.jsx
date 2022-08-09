import React from 'react'
import { Container, Row, Col } from "reactstrap"
import { popularMenuFood } from '../../fake-data/products'
import ProductCart from '../product-cart/ProductCart'

import './popular-menu.css'

function PopularMenu() {
    return (
        <section className='pt-0'>
            <Container>
                <Row>
                    <Col lg='12' className='mb-5'>
                        <h2 className='popular__menu-title'>Popula food menu</h2>
                    </Col>
                    {
                        popularMenuFood.map(item => (
                            <Col lg='3' md='4' sm='6' xs='6' className='mb-4' key={item.id}>
                                <ProductCart item={item}/>
                            </Col>
                        ))
                    }

                </Row>
            </Container>
        </section>
    )
}

export default PopularMenu