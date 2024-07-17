import React from 'react';
import test1 from './testimonials-1.jpg';
import test2 from './testimonials-2.jpg';
import test3 from './testimonials-3.jpg';

const data = [
    {
        title: "Margaret E.",
        content: "This is fantastic! Thanks so much guys!",
        img: test1,
        
    },
    {
        title: "Fred S.",
        content: "Bootstrap is amazing. I've been using it to create lots of super nice landing pages.",
        img: test2,
       
    },
    {
        title: "Sarah W.",
        content: "Thanks so much for making these free resources available to us!",
        img: test3,
        
    },
];

function Testimonials() {
    return (
        <>
            <section className="testimonials text-center bg-light">
                <div className="container">
                    <h2 className="mb-5">What people are saying...</h2>
                    <div className="row">
                        {
                            data.map((e, i) => (
                                <div className="col-lg-4" key={i}>
                                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                                        <img className="img-fluid rounded-circle mb-3" src={e.img} alt={e.title} />
                                        <h5>{e.title}</h5>
                                        <p className="font-weight-light mb-0">{e.content}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default Testimonials;
