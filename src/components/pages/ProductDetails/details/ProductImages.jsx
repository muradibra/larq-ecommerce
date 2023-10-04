import React from 'react'
import CleanWaterSvg from '../../../utils/CleanWaterSvg'
import SelfCleaningSvg from '../../../utils/SelfCleaningSvg'
import ColdAndHotSvg from '../../../utils/ColdAndHotSvg'
import ImageZoom from "react-image-zooom";

function ProductImages({ product }) {
    return (
        <div className='product-images'>
            <div className='main-img'>
                <ImageZoom src={product.main_img_url} alt={product.title} zoom="200" />
            </div>
            <div className='features'>
                <CleanWaterSvg />
                <SelfCleaningSvg />
                <ColdAndHotSvg />
            </div>
            <div className="secondary-images">
                {
                    product.skus.slice(1).map((item, index) => (
                        <div className='secondary-img-wrapper' key={index}>
                            <ImageZoom src={item.img_url} alt="Photo" zoom="200" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductImages