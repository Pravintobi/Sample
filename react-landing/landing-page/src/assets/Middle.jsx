import React from 'react';
import bgImage from './bg-showcase-1.jpg';
import bgImage1 from './bg-showcase-2.jpg';
import bgImage2 from './bg-showcase-3.jpg';
const data = [
    {
        title: "Fully Responsive Design",
        content: "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
        img: bgImage,
        align: "order-lg-2"
    },
    {
        title: "Updated For Bootstrap 5",
        content: "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
        img: bgImage1,
        align: "order-lg-1"
    },
    {
        title: "Easy to Use & Customize",
        content: "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
        img: bgImage2,
        align: "order-lg-2"
    },
];

function Middle() {
    return (
        <>
            {
                data.map((e, i) => (
                    <section className="showcase" key={i}>
                        <div className="container-fluid p-0">
                            <div className="row g-0">
                                <div className={`col-lg-6 ${e.align} text-white showcase-img`} style={{ backgroundImage: `url(${e.img})` }}>
                                </div>
                                <div className={`col-lg-6 ${e.align === 'order-lg-2' ? 'order-lg-1' : 'order-lg-2'} my-auto showcase-text`}>
                                    <h2>{e.title}</h2>
                                    <p className="lead mb-0">{e.content}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                ))
            }
        </>
    );
}

export default Middle;
