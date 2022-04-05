import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ArrowUp } from "phosphor-react";
import { motion, AnimatePresence } from 'framer-motion'
import { scrollTopVariants, scrollTopVariants_two } from '../utils/Animations';

const ScrollToTopClick = () => {
    const [showScrollToTop, setShowScrollToTop] = useState(null)

    const changeNav = () => {
        if (window.scrollY >= 400) {
            setShowScrollToTop(true)
        } else {
            setShowScrollToTop(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
        return () => {
            window.removeEventListener('scroll', changeNav);
        };
    }, [])
    return (
        <div>

            <AnimatePresence>
                {showScrollToTop &&
                    <a href='#header'>
                        <ScrollToTopButton
                          variants={scrollTopVariants_two}
                          initial="initial"
                          animate="final"
                          exit="exit"
                        >

                            <motion.div
                                variants={scrollTopVariants}
                                initial="initial"
                                animate="final"
                                exit="exit"
                            ><ArrowUp size={20} color="#140000" weight="bold" />
                            </motion.div>

                        </ScrollToTopButton>
                    </a>
                }
            </AnimatePresence>
        </div>
    )
}

const ScrollToTopButton = styled(motion.button)`
    position: fixed;
    bottom: 20px;
    right:20px;
    z-index: 9;
    padding:0.5rem;
    border-radius: 9999px;
    background: #fff;
    border:1px solid #3E68FF;
    color:#fff;
    font-weight: 700;
`

export default ScrollToTopClick;
