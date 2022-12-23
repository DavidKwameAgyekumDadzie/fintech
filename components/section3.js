import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import Author from './_child/author';

export default function section3() {
  return (
    <section className="container mx-auto md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

      {/* {swiper} */}
      <Swiper slidesPerView={2}>
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
      </Swiper>
    </section>
  );
}

function Post() {
  return (
    <div className="grid px-10">
      <div className="images">
        <Link href={'/'}>
          <Image
            src={'/images/Dr.jpg'}
            className="rounded"
            width={600}
            height={400}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link href={'/'} className="text-orange-600 hover:text-orange-800">
            Medical Screening
          </Link>
          <Link href={'/'} className="text-gray-800 hover:text-gray-600">
            -July 21, 2014
          </Link>
        </div>
        <div className="title">
          <Link
            href={'/'}
            className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600"
          >
            OUR MISSION
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          Our mission is making life better for those living with kidney
          disease. Through our Foundation, we ensure patients and families have
          access to dialysis ...
        </p>
        <Author></Author>
      </div>
    </div>
  );
}
