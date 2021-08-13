import React, { useState } from 'react';
import './ClientsReview.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import ReviewData from '../../FakeData/ClientReviewData.json'

const ClientsReview = () => {
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
    const [reviewData, setReviewData] = useState(ReviewData)
    return (
        <section>
            <div className="container mb-5">
            <div className="py-4 d-flex">
                    <div className="common-border"></div>
                    <div className="ms-3">
                        <h2><span className="text-warning">What People</span> say our Institution</h2>
                        <p>It is a long established fact that a reader will be distracted<br /> by the readable content of a page</p>
                    </div>
                </div>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={2}
                    navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        reviewData.map(data =>
                            <SwiperSlide  >
                                <div class="card h-100 p-4 swiper-card">
                                    <div className="d-flex">
                                        <div className="img-area">
                                            <img src={data.imgUrl} width="60px" height="60px" alt="..." />
                                        </div>
                                        <div className="title-area ms-4">
                                            <h5 class="card-title">{data.name}</h5>
                                            <p>{data.title}</p>
                                        </div>
                                    </div>
                                    <div class="card-body">

                                        <p class="card-text">{data.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                        )
                    }



                </Swiper>
            </div>
        </section>
    );
};

export default ClientsReview;