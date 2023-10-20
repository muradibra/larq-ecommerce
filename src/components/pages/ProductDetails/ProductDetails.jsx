import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetails } from '../../../slices/shopItemSlice/shopItemSlice';
import useScreenWidth from '../../../hooks/useScreenWidth';
import ImageZoom from "react-image-zooom";
import Insulation from './details/ProductInsulation';
import ProductSizes from './details/ProductSizes';
import ProductColors from './details/ProductColors';
import ProductDescription from './details/ProductDescription';
import PolicyAccordions from './details/PolicyAccordions';
import PurchaseButtons from './details/PurchaseButtons';
import PrimaryInfo from './details/PrimaryInfo';
import ProductImages from './details/ProductImages';
import ProductImagesSwiper from './details/ProductImagesSwiper';
import AsSeenIn from './details/AsSeenIn';
import TraditionalVsLarq from './details/TraditionalVsLarq';
import NanoZeroFilterTech from './details/NanoZeroFilterTech';
import LongLastingFilters from './details/LongLastingFilters';
import PurevisTech from './details/PurevisTech';
import NeutralizeContaminants from './details/NeutralizeContaminants';
import LarqPurevis from './details/LarqPurevis';
import ReviewsAndPromos from './details/ReviewsAndPromos';
import Awards from './details/Awards';
import QuotesSwiper from './details/QuotesSwiper';

function ProductDetails() {

  const { slug } = useParams()
  const { shopItem } = useSelector(store => store.shopItem)
  const dispatch = useDispatch()
  const { screenSize } = useScreenWidth()
  const [insulation, setInsulation] = useState('')
  const [productSize, setProductSize] = useState('')
  const [colorName, setColorName] = useState('')

  useEffect(() => {
    dispatch(fetchProductDetails(slug))
  }, [])

  useEffect(() => {
    if (shopItem.length) {
      setColorName(shopItem[0].color)
    }
  }, [shopItem])



  return (
    <div className='product-details' >
      {
        shopItem.map(product => (

          <div className='product-details-inner' key={product.id} >
            <div className='primary-info-section'>

              {
                screenSize >= 960 ?
                  <ProductImages product={product} />
                  :
                  <ProductImagesSwiper product={product} />
              }


              <div className='product-info'>
                <PrimaryInfo product={product} />

                <Insulation
                  product={product}
                  insulation={insulation}
                  setInsulation={setInsulation}
                />

                <ProductSizes
                  product={product}
                  productSize={productSize}
                  setProductSize={setProductSize}
                />

                <ProductColors
                  product={product}
                  colorName={colorName}
                  setColorName={setColorName}
                />

                <PurchaseButtons
                  product={product}
                  insulation={insulation}
                  productSize={productSize}
                  colorName={colorName}
                />

                <ProductDescription product={product} />

                <PolicyAccordions />

              </div>


            </div>

            <div className='additional-info'>
              <AsSeenIn />

              {
                product.slug.includes("pitcher") &&
                <div>
                  <TraditionalVsLarq />
                  <NanoZeroFilterTech />
                  <LongLastingFilters />
                  <PurevisTech />
                  <NeutralizeContaminants />
                </div>
              }

              {
                product.slug.includes("bottle") &&
                <div>
                  <LarqPurevis />
                  <ReviewsAndPromos />
                  <QuotesSwiper />
                  <Awards />
                </div>
              }


            </div>


          </div>

        ))
      }
    </div >
  )
}

export default ProductDetails