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
import Header from '../../layout/Header';

function ProductDetails() {
  // const [count, setCount] = useState(0)

  const { slug } = useParams()
  const { shopItem } = useSelector(store => store.shopItem)
  // const { cartData } = useSelector(store => store.cartData)
  const dispatch = useDispatch()
  const { screenSize } = useScreenWidth()


  useEffect(() => {
    dispatch(fetchProductDetails(slug))
  }, [])

  // useEffect(() => {
  //   setCount(count + 1)
  // }, [slug])

  return (
    <div className='product-details' >
      {/* <Header slug={slug} /> */}
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