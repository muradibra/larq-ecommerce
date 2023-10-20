import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react'

function PolicyAccordions() {
    return (
        <div className='policy-accordions'>
            <Accordion allowMultiple>
                <AccordionItem >
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Shipping & returns
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Free shipping within the contiguous U.S. on orders over $80. <br />
                        We would be happy to accept returns of any unused LARQ product (excluding charging cables and personalized LARQ Bottles) in its original packaging within 30 days of the purchase date. <br />
                        Our standard return policy will apply.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Warranty
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        12-month warranty. <br />
                        We offer a 1-year limited warranty to repair or replace any defective material or component. It does not cover any issues due to normal wear and tear, misuse or loss / theft of the bottle.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>

        </div>
    )
}

export default PolicyAccordions