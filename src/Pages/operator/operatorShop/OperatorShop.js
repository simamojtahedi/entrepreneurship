import React, { useState } from 'react'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import Wrapper from '../../../Utils/Wrapper/Wrapper'
import { BsShop } from 'react-icons/bs'
import { VscListUnordered } from 'react-icons/vsc'
import { RiShoppingBasketLine } from 'react-icons/ri'
import ShopPurchases from './ShopPurchases'
import Categories from './Categories'
import Products from './Products'

const OperatorShop = () => {
    const [purchases, setPurchases] = useState(true)
    const [products, setProducts] = useState(false)
    const [categories, setCategories] = useState(false)

    const categoriesHandler = () => {
        setCategories(true)
        setPurchases(false)
        setProducts(false)
    }

    const productsHandler = () => {
        setProducts(true)
        setPurchases(false)
        setCategories(false)
    }

    const purchasesHandler = () => {
        setPurchases(true)
        setCategories(false)
        setProducts(false)
    }

    return (
        <Wrapper pageTitle="مدیریت فروشگاه" >
            <div className="page-wrapper">
                <BreadCrumb> مدیریت فروشگاه </BreadCrumb>
                <div className='animate__animated animate__fadeIn '>
                    <div className='col-12 manage_header'>
                        <div className='manage_header_item' onClick={purchasesHandler }>
                            <BsShop />
                            <h6>مدیریت خریدها</h6>
                        </div>
                        <div className='manage_header_item' onClick={productsHandler }>
                            <RiShoppingBasketLine />
                            <h6>مدیریت محصولات</h6>
                        </div>
                        <div className='manage_header_item' onClick={categoriesHandler }>
                            <VscListUnordered />
                            <h6>مدیریت دسته‌بندی‌ها </h6>
                        </div>
                    </div>
                </div>
            </div>

            {purchases  && <ShopPurchases /> }
            {products  && <Products /> }
            {categories  && <Categories /> }
        </Wrapper>
    )
}

export default OperatorShop
