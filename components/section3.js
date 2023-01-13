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
            src={'/images/Funding-solutions-01.jpg'}
            className="rounded"
            width={600}
            height={400}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        {/* <div className="cat">
          <Link href={'/'} className="text-orange-600 hover:text-orange-800">
            Medical Screening
          </Link>
          <Link href={'/'} className="text-gray-800 hover:text-gray-600">
            -July 21, 2014
          </Link>
        </div> */}
        <div className="title">
          <Link
            href={'/'}
            className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600"
          >
            Funding Solutions
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          An easy-to-use funding platform for counterparties looking to be
          brought together in the debt capital markets. Driven by efficiency,
          Funding Solutions restores the balance in the relationships between
          corporates and funders. Addendum’s simple platform connects a large
          community of diverse corporate issuers and institutional funders in
          the debt capital markets. This gives corporates unparalleled access to
          funding at a minimal cost with no upfront outlay required.
        </p>
        <Author></Author>
      </div>
    </div>
  );
}
