import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { apiUrl } from '../../../config'

function Support() {

    const [faqs, setFaqs] = useState([])

    useEffect(() => {
        axios.get(`${apiUrl}/faqs`)
            .then(resp => setFaqs(resp.data))
    }, [])

    return (
        <div className='support'>
            <div className='title-wrapper'>
                <h1 className='title'>Have questions? We’ve got the FAQs.</h1>
            </div>

            <div className='menus'>
                {
                    faqs && faqs.map((item) => (
                        <div
                            className="menu"
                            key={item.id}
                        >
                            <Link to={`${item.slug}`}>
                                <div className='icon-wrapper'>
                                    <img src={item.icon} alt={item.product} />
                                </div>
                                <span>{item.product}</span>
                            </Link>
                        </div>
                    ))
                }

            </div>
            {/* <Outlet /> */}
        </div>
    )
}

export default Support