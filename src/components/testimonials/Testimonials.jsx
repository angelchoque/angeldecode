import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import styles from '@styles/Testimonials.module.scss'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import Image from 'next/image';

const data= [
  {
   avatar: AVTR1,
   name: "Tina Snow",
   review: "Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?"
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: "Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?"
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Carousel 
        className={`container ${styles.testimonials__container}`}
        autoPlay={true}
        infiniteLoop={true}
        interval={2000}
        showThumbs={false}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <div key={index} className={styles.testimonial}>
                <picture className={styles.client__avatar}>
                  <Image src={avatar} alt="" />
                </picture>
                  <h5 className={styles.client__name}>{name}</h5>
                  <small className={styles.client__review}>{review}</small>
              </div>
            )
          })
        }
      </Carousel>
    </section>
  )
}

export default Testimonials