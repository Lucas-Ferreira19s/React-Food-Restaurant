import React, {useState, useEffect} from 'react'
import { Container, Row, Col } from 'reactstrap'

import ProductCart from '../product-cart/ProductCart'
import * as C from '../../../assets/fake-data/products'
import './menu-pack.css'

const MenuPack = () => {
    const [filter, setFilter] = useState('RICE-MENU')
    const [products, setProducts] = useState(C.riceMenuProducts)

    useEffect(()=>{
        if(filter === 'RICE-MENU'){
            setProducts(C.riceMenuProducts)
        }
        if (filter === 'FAST-FOOD') {
            setProducts(C.fastFoodProducts)
        }
        if (filter === 'PIZZA') {
            setProducts(C.pizzaProducts)
        }
        if (filter === 'DESSERT') {
            setProducts(C.dessertProducts)
        }
        if (filter === 'COFFEE') {
            setProducts(C.coffeeProducts)
        }
    },[filter])

    return (
        <section>
            <Container>
                <Row>
                    <Col lg="12" className='text-center mb-5'>
                        <h3 className='menu__title'>Our Menu Pack</h3>
                    </Col>
                    <Col lg="12" className='text-center mb-4'>
                        <button className={`filter-btn ${filter === 'FAST-FOOD' ? 'active__btn' : ''}`} onClick={() => setFilter('FAST-FOOD')}>Fast Food</button>
                        <button className={`filter-btn ${filter === 'RICE-MENU' ? 'active__btn' : ''}`} onClick={() => setFilter('RICE-MENU')}>Rice Menu</button>
                        <button className={`filter-btn ${filter === 'PIZZA' ? 'active__btn' : ''}`} onClick={() => setFilter('PIZZA')}>Pizza</button>
                        <button className={`filter-btn ${filter === 'DESSERT' ? 'active__btn' : ''}`} onClick={() => setFilter('DESSERT')}>Desserts</button>
                        <button className={`filter-btn ${filter === 'COFFEE' ? 'active__btn' : ''}`} onClick={() => setFilter('COFFEE')}>Coffee</button>
                    </Col>

                    {
                        products.map(item=>(
                            <Col lg='3' md='4' sm='6' xs='6' key={item.id} className="mb-3">
                                <ProductCart item={item}/>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    )
}

export default MenuPack