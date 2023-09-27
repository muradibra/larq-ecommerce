import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../slices/productsSlice/productsSlice'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'
import { Link } from 'react-router-dom'

function FilterHome() {
    const { products } = useSelector(store => store.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <>
            <Swiper
                modules={[Scrollbar]}
                // scrollbar={{ draggable: true }}
                spaceBetween={25}
                slidesPerView={1.1}
                breakpoints={{
                    724: {
                        slidesPerView: 1.4
                    },
                    960: {
                        slidesPerView: 2
                    },
                    // 1280: {
                    //     slidesPerView: 3
                    // }
                }}
            >
                {
                    products.filter(item => item.shop === "home").map(product => (
                        <SwiperSlide key={product.id}>
                            <div className="slide-inner">
                                <Link to={`/product/${product.slug}`}>
                                    <div className="img-wrapper">
                                        <img src={product.main_img_url} alt={product.title} />
                                    </div>
                                    <div className="product-info">
                                        <h3>{product.title}</h3>
                                        <span>{product.color}</span>
                                        <div>From &nbsp;
                                            {
                                                product.discounted_price ?
                                                    <span>
                                                        $<del>{product.price}</del> {product.discounted_price}
                                                    </span>
                                                    :
                                                    <span>${product.price}</span>
                                            }
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}

export default FilterHome