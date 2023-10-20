import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsArrowLeft, BsQuestionCircle } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { apiUrl } from '../../../../config';
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';
import PlusIcon from '../../../lib/PlusIcon';
import MinusIcon from '../../../lib/MinusIcon';

function ProductFaqs() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        axios.get(`${apiUrl}/faqs?slug=${slug}`)
            .then((resp) => setFaqs(resp.data));
    }, [slug]);




    return (
        <div className="product-faqs">

            <div className="faq-accordions">
                
                <div className="back-btn">
                    <button onClick={() => navigate('/support')}>
                        <BsArrowLeft />
                        Back to support
                    </button>
                </div>

                {faqs?.map((item, index) => (
                    <div key={index}>
                        <div className='details'>
                            <h1>{item.product}</h1>
                            {
                                item.slug.includes("larq") ?
                                    <div className='links'>
                                        <Link to={`/product/${slug}`}>
                                            Product page
                                        </Link>
                                        <Link to={`/product/${slug}`}>
                                            Product manual
                                        </Link>
                                    </div> : ''
                            }
                        </div>

                        <div className='faqs'>
                            <div className='title'>
                                <h2>Frequently asked questions</h2>
                            </div>
                            {item.faqs.map((faq) => (
                                <div className='faq' key={faq.id}>
                                    <Accordion allowToggle>
                                        <AccordionItem>
                                            {({ isExpanded }) => (
                                                <>
                                                    <h2>
                                                        <AccordionButton >
                                                            <Box as="span" flex="1" textAlign="left">
                                                                {faq.question}
                                                            </Box>
                                                            {isExpanded ?
                                                                <MinusIcon />
                                                                :
                                                                <PlusIcon />}
                                                        </AccordionButton>
                                                    </h2>
                                                    <AccordionPanel pb={4}>
                                                        {faq.answer}
                                                    </AccordionPanel>
                                                </>
                                            )}
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className='reach-out'>
                <div className='question-icon'>
                    <BsQuestionCircle />
                </div>

                <div className='title'>
                    <h3>Didn't find what you were looking for?</h3>
                </div>

                <div className='mail'>
                    <p>Reach out to <Link>hello@livelarq.com</Link> and we'll be glad to help!</p>
                </div>

                <div className='address'>
                    <span>LARQ, 1900 South Norfolk Street, Suite 350</span>
                    <br />
                    <span>San Mateo, CA 94403, U.S.</span>
                </div>
            </div>
        </div>
    );
}

export default ProductFaqs;
