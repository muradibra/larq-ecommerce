import React from 'react'
import { Link } from 'react-router-dom'
import previewImg1 from '../../../assets/img/sideImg1-clean.jpg'
import previewImg2 from '../../../assets/img/sideImg2-clean.jpg'
import previewImg3 from '../../../assets/img/sideImg3-clean.jpg'

function ShopPreviews() {
    return (
        <div className='shop-previews'>

            <Link to='/shop?shop=purification' className='shop-for-purification'>
                <div className='shop-preview-img'>
                    <img src={previewImg1} alt="" />
                </div>

                <div className='shop-preview-text'>
                    <h3 className='shop-preview-title'>Purification</h3>
                    <span className='shop-preview-link'>Shop now</span>
                </div>
            </Link>

            <Link to='/shop?shop=home' className='shop-for-purification'>
                <div className='shop-preview-img'>
                    <img src={previewImg2} alt="" />
                </div>

                <div className='shop-preview-text'>
                    <h3 className='shop-preview-title'>Home</h3>
                    <span className='shop-preview-link'>Shop now</span>
                </div>
            </Link>

            <Link to='/shop?shop=drinkware' className='shop-for-purification'>
                <div className='shop-preview-img'>
                    <img src={previewImg3} alt="" />
                </div>

                <div className='shop-preview-text'>
                    <h3 className='shop-preview-title'>Drinkware</h3>
                    <span className='shop-preview-link'>Shop now</span>
                </div>
            </Link>

        </div>
    )
}

export default ShopPreviews