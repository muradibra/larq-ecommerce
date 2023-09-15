import React, { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { BiLogoFacebook } from 'react-icons/bi'
import {
    AiOutlineInstagram,
    AiFillYoutube,
    AiOutlineTwitter
} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import gif from '../../assets/img/bicycle-animation.gif'

function Footer() {
    const [emailInput, setEmailInput] = useState("")

    return (
        <div className='footer'>
            <div className="footer-inner">
                <div className='become-insider'>
                    <h3 className='title'>Become an insider</h3>
                    <p className='subtitle'>Receive exclusive offers, hydration news, and more when you subscribe.</p>
                    <div className='email-input'>
                        <input
                            type="email"
                            value={emailInput}
                            onChange={(e) => setEmailInput(e.target.value)}
                            placeholder='Email address'
                        />
                        <button className='arrow-right-btn'>
                            <BsArrowRight />
                        </button>
                    </div>
                    <div className='socials'>
                        <div className='icon facebook-icon'>
                            <BiLogoFacebook />
                        </div>
                        <div className='icon instagram-icon'>
                            <AiOutlineInstagram />
                        </div>
                        <div className='icon youtube-icon'>
                            <AiFillYoutube />
                        </div>
                        <div className='icon twitter-icon'>
                            <AiOutlineTwitter />
                        </div>
                    </div>
                </div>

                <div className='cols'>
                    <div className='col-1'>
                        <ul>
                            <li>
                                <Link>
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Reviews
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Find a retailer
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Corporate gifting
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='col-2'>
                        <ul>
                            <li>
                                <Link>
                                    basq magazine
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Press
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Our story
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Affiliate program
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Ambassador program
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='bicycle-gif'>
                    <img src={gif} alt="" />
                </div>

            </div>

            <div className='terms'>
                <span>
                    Terms & Privacy
                </span>

                <span>
                    Accessibility
                </span>
            </div>

        </div>
    )
}

export default Footer