import React from 'react'
import Slider from 'react-slick';

const Card = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const cards = [
        { title: 'Web Designing', content: 'Most of us think that Web Designing is a normal Designing process but i...', button: 'Read more', src: 'https://www.ourstaging.in/wp-content/uploads/2024/04/template.svg' },
        { title: 'Website Maintenance', content: 'We make the sure website is update in backed up regularly...', button: 'Read more', src: 'https://www.ourstaging.in/wp-content/uploads/2024/04/maintainance.png' },
        { title: 'Website Launch', content: 'After launch we monitor the website for next to monthes free...', button: 'Read more', src: 'https://www.ourstaging.in/wp-content/uploads/2024/04/launch.png' },
        { title: 'Website Testing', content: 'Our QA team test the website in real online environment across all...', button: 'Read more', src: 'https://www.ourstaging.in/wp-content/uploads/2024/04/testing.png' },
        { title: 'Web Development', content: 'Our web development team then convert these designs into fully...', button: 'Read more', src: 'https://www.ourstaging.in/wp-content/uploads/2024/04/development.png' },
        { title: 'Search Engine Optimization', content: 'SEO, one of those things that those of us in the web design...', button: 'Read more', src: 'https://www.ourstaging.in/wp-content/uploads/2024/04/feature3.png' }
    ];


    return (
        <div>
            <div className='slideImage mt-5'>
                <br />
                <div className='mt-4 w-auto' style={{ marginLeft: '120px' }}>
                    <h6 className='text-primary'>IT SERVICES</h6>
                    <h1>We Solve IT Problems With <br /> Technology</h1>
                </div>

                <div className="card-slider">
                    <Slider {...settings}>
                        {cards.map((card, index) => (
                            <div key={index} className="card">
                                <img src={card.src} alt="" height={'100px'} width={'80 px'} />
                                <h3 className='mt-5 lol'>{card.title}</h3>
                                <p className='content-para'>{card.content}</p>
                                <p>{card.button}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Card
