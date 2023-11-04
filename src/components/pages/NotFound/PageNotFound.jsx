import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
    return (
        <div className='not-found'>
            <div className="not-found-inner">
                <div className="title">
                    <h1>Oops, this page is not adventure ready</h1>
                </div>
                <p>
                    If this is an error, please contact us at
                    <br />
                    <Link>hello@livelarq.com</Link>
                </p>

                <div className='link-to-shop'>
                    <Link to='/shop'>
                        But our products are!
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound