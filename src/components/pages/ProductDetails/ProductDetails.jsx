import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetails } from '../../../slices/shopItemSlice/shopItemSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { PiWarningCircleFill } from 'react-icons/pi'
import { addToCart, updateCart } from '../../../slices/cartDataSlice/cartDataSlice';
import useScreenWidth from '../../../hooks/useScreenWidth';
import CleanWaterSvg from '../../utils/CleanWaterSvg';
import SelfCleaningSvg from '../../utils/SelfCleaningSvg';
import ColdAndHotSvg from '../../utils/ColdAndHotSvg';
import ImageZoom from "react-image-zooom";

import Insulation from './ProductInsulation';
import ProductSizes from './ProductSizes';
import ProductColors from './ProductColors';
import ProductDescription from './ProductDescription';
import PolicyAccordions from './PolicyAccordions';
import PurchaseButtons from './PurchaseButtons';
import PrimaryInfo from './PrimaryInfo';
import ProductImages from './ProductImages';
import ProductImagesSwiper from './ProductImagesSwiper';
import AsSeenIn from './AsSeenIn';
import TraditionalVsLarq from './TraditionalVsLarq';
import NanoZeroFilterTech from './NanoZeroFilterTech';

function ProductDetails() {
  const { slug } = useParams()
  const { shopItem } = useSelector(store => store.shopItem)
  // const { cartData } = useSelector(store => store.cartData)
  const dispatch = useDispatch()
  const { screenSize } = useScreenWidth()


  useEffect(() => {
    dispatch(fetchProductDetails(slug))
  }, [])

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

                <Insulation product={product} />

                <ProductSizes product={product} />

                <ProductColors product={product} />

                <PurchaseButtons product={product} />

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