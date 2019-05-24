import React from 'react';

import './Faq.scss';

export const Faq = () => {
    return (
        <div className="faq">
            <h1 className="faq-header">FAQ</h1>
            <div className="faq-point">
                <p className="faq-point-question">1. Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
                <p className="faq-point-answer">Praesent nec risus gravida, placerat ipsum sit amet, porta ante. Sed tristique ex sed mauris ultrices malesuada.</p>
            </div>
            <div className="faq-point">
                <p className="faq-point-question">2. Suspendisse nec tortor interdum, aliquet massa sit amet, gravida ipsum?</p>
                <p className="faq-point-answer">Quisque maximus felis at nisi sagittis facilisis. Maecenas tincidunt arcu ut lacus laoreet euismod. Donec interdum elit et ullamcorper pretium.</p>
            </div>
            <div className="faq-point">
                <p className="faq-point-question">3. Nullam tincidunt purus at augue aliquet vulputate eget eget mi?</p>
                <p className="faq-point-answer">No. Nunc venenatis justo sed erat accumsan tempus.</p>
            </div>
            <div className="faq-point">
                <p className="faq-point-question">4. Curabitur nec leo quis ex maximus faucibus et in sapien?</p>
                <p className="faq-point-answer">Aenean quis nibh in augue euismod semper ut eget massa. Mauris auctor quam et turpis lacinia, ut laoreet tellus laoreet. Aliquam id tortor vel erat viverra euismod a eu orci.</p>
            </div>
            <div className="faq-point">
                <p className="faq-point-question">5. Sed at odio condimentum, molestie diam sit amet, dapibus neque?</p>
                <p className="faq-point-answer">Curabitur ornare velit in arcu aliquam blandit. Maecenas tincidunt purus sit amet diam sodales, sed imperdiet libero vestibulum.</p>
            </div>
        </div>
    )
}

export default Faq;