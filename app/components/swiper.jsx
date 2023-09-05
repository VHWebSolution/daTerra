'use client'
import React from 'react';
import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

import C1 from '../../public/macarrao.png'
import C2 from '../../public/frango.png'
import C3 from '../../public/arroz.png'
import C4 from '../../public/doce.png'
import C5 from '../../public/sucoverde.png'
import C6 from '../../public/doce2.png'
import C7 from '../../public/vinagrete.png'

const MySwiper = () => {
    return (
      <div className="flex justify-center items-center h-full p-5">
        <ReactSwiper
          slidesPerView={1}
          spaceBetween={15}
          pagination={{
            clickable: true,           
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            540: {
                slidesPerView: 2,
              },
            740: {
                slidesPerView: 3,
              },
            840: {
              slidesPerView: 5,
            },
          }}
        >
      <SwiperSlide className="flex items-center justify-center">
          <div className="w-68 h-68 bg-black">
            <Image src={C1} alt="" width={300} height={300} layout="responsive" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <div className="w-68 h-68 bg-black">
            <Image src={C2} alt="" width={300} height={300} layout="responsive" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <div className="w-68 h-68 bg-black">
            <Image src={C3} alt="" width={300} height={300} layout="responsive" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <div className="w-68 h-68 bg-black">
            <Image src={C4} alt="" width={300} height={300} layout="responsive" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <div className="w-68 h-68 bg-black">
            <Image src={C5} alt="" width={300} height={300} layout="responsive" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <div className="w-68 h-68 bg-black">
            <Image src={C6} alt="" width={300} height={300} layout="responsive" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <div className="w-68 h-68 bg-black">
            <Image src={C7} alt="" width={300} height={300} layout="responsive" />
          </div>
        </SwiperSlide>
    </ReactSwiper>
  </div>
);
};

export default MySwiper;
