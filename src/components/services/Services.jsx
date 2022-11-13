import React from 'react'
import './services.css'
import { AiOutlineCheck } from 'react-icons/ai';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

function Services() {
  return (
    <section id='services'>
      <h5> What I Offer</h5>
      <h2>Services</h2>

      <div className="container ">
      <div className="box">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        breakpoints={{
          300:{
            slidesPerView: 1,
          },
          740:{
            slidesPerView: 3,
          }
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100, 
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {/* UI/UX Design*/}  
        <SwiperSlide>
          <article className='service'>
            <div className="service_head">
              <h3>UI/UX Design</h3>
            </div>

            <div className="service_list">
              <ul>
                <li>
                  <AiOutlineCheck className='service_list-icon'/>
                  <p>Lorem ipsum dolor sit amet</p>
                </li>

                <li>
                  <AiOutlineCheck className='service_list-icon'/>
                  <p>
                    Lorem ipsum dolor sit amet
                  </p>
                </li>

                <li>
                  <AiOutlineCheck className='service_list-icon'/>
                  <p>
                    Lorem ipsum dolor sit amet
                  </p>
                </li>

                <li>
                  <AiOutlineCheck className='service_list-icon'/>
                  <p>
                    Lorem ipsum dolor sit amet
                  </p>
                </li>
              </ul>
            </div>
          </article>
        </SwiperSlide>
        {/* WEB DEVELOPMENT  */}
        <SwiperSlide>
          <article className='service'>
            <div className="service_head">
              <h3>Web Development</h3>
            </div>

            <div className="service_list">
              <ul>
                <li>
                  <AiOutlineCheck className='service_list-icon'/>
                  <p>Lorem ipsum dolor sit amet</p>
                </li>

                <li>
                  <AiOutlineCheck className='service_list-icon'/>
                  <p>Lorem ipsum dolor sit amet</p>
                </li>

                <li>
                  <AiOutlineCheck className='service_list-icon'/>
                  <p>Lorem ipsum dolor sit amet</p>
                </li>

                <li>
                  <AiOutlineCheck className='service_list-icon'/>
                  <p>Lorem ipsum dolor sit amet</p>
                </li>

                <li>
                  <AiOutlineCheck className='service_list-icon'/>
                  <p>
                    Lorem ipsum dolor sit amet
                  </p>
                </li>

                <li>
                  <AiOutlineCheck className='service_list-icon'/>
                  <p>
                    Lorem ipsum dolor sit amet
                  </p>
                </li>

                <li>
                  <AiOutlineCheck className='service_list-icon'/>
                  <p>
                    Lorem ipsum dolor sit amet
                  </p>
                </li>
              </ul>
            </div>
          </article>
        </SwiperSlide>
        {/*CONTENT CREATION */}
        <SwiperSlide>
          <article className='service'>
            <div className="service_head">
              <h3>Content Creation</h3>
            </div>
            <div className="service_list">
              <ul>
                <li>
                  <AiOutlineCheck className='service_list-icon'/>
                  <p>Lorem ipsum dolor sit amet</p>
                </li>

                <li>
                  <AiOutlineCheck className='service_list-icon'/>
                  <p>Lorem ipsum dolor sit amet</p>
                </li>

                <li>
                  <AiOutlineCheck className='service_list-icon'/>
                  <p>Lorem ipsum dolor sit amet</p>
                </li>

                <li>
                  <AiOutlineCheck className='service_list-icon'/>
                  <p>
                    Lorem ipsum dolor sit amet
                  </p>
                </li>

                <li>
                  <AiOutlineCheck className='service_list-icon'/>
                  <p>
                    Lorem ipsum dolor sit amet
                  </p>
                </li>

                <li>
                  <AiOutlineCheck className='service_list-icon'/>
                  <p>
                    Lorem ipsum dolor sit amet
                  </p>
                </li>
              </ul>
            </div>
          </article>
        </SwiperSlide>
        {/*Code Language  */}
        <SwiperSlide>
          <article className='service'>
            <div className="service_head">
              <h3>Code Language</h3>
            </div>

            <div className="service_list">
              <ul>
                <li>
                  <AiOutlineCheck className='service_list-icon'/>
                  <p>Lorem ipsum dolor sit amet</p>
                </li>

                <li>
                  <AiOutlineCheck className='service_list-icon'/>
                  <p>Lorem ipsum dolor sit amet</p>
                </li>

                <li>
                  <AiOutlineCheck className='service_list-icon'/>
                  <p>Lorem ipsum dolor sit amet</p>
                </li>

                <li>
                  <AiOutlineCheck className='service_list-icon'/>
                  <p>Lorem ipsum dolor sit amet</p>
                </li>

                <li>
                  <AiOutlineCheck className='service_list-icon'/>
                  <p>
                    Lorem ipsum dolor sit amet
                  </p>
                </li>

                <li>
                  <AiOutlineCheck className='service_list-icon'/>
                  <p>
                    Lorem ipsum dolor sit amet
                  </p>
                </li>

                <li>
                  <AiOutlineCheck className='service_list-icon'/>
                  <p>
                    Lorem ipsum dolor sit amet
                  </p>
                </li>
              </ul>
            </div>
          </article>
        </SwiperSlide>
        {/*Code Presentation  */}
        <SwiperSlide>
          <article className='service'>
            <div className="service_head">
              <h3>Code Presentation</h3>
            </div>

            <div className="service_list">
              <ul>
                <li>
                  <AiOutlineCheck className='service_list-icon'/>
                  <p>Lorem ipsum dolor sit amet</p>
                </li>

                <li>
                  <AiOutlineCheck className='service_list-icon'/>
                  <p>
                    Lorem ipsum dolor sit amet
                  </p>
                </li>

                <li>
                  <AiOutlineCheck className='service_list-icon'/>
                  <p>
                    Lorem ipsum dolor sit amet
                  </p>
                </li>

                <li>
                  <AiOutlineCheck className='service_list-icon'/>
                  <p>
                    Lorem ipsum dolor sit amet
                  </p>
                </li>
              </ul>
            </div>
          </article>
        </SwiperSlide>
        
      </Swiper>
      </div>
      </div>
    </section>
  )
}

export default Services