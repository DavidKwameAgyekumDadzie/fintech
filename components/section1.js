import Image from 'next/image';
import Link from 'next/link';
import Author from './_child/author';
import SwiperCore, {Autoplay} from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

export default function section1() {

  SwiperCore.use([Autoplay])

  const bg = {
    background: "url('/images/banner.jpg') no-repeat",
    backgroundPosition: 'right',
  };

  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>

        <Swiper
          
          slidesPerView={1}
          loop={true}
          autoplay= {{
            delay: 2000
          }}
        >
          <SwiperSlide> {Slide()}</SwiperSlide>
          <SwiperSlide> {Slide()}</SwiperSlide>
          <SwiperSlide> {Slide()}</SwiperSlide>
          <SwiperSlide> {Slide()}</SwiperSlide>
          <SwiperSlide> {Slide()}</SwiperSlide>
          <SwiperSlide> {Slide()}</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

function Slide() {
  return (
 
      <div className="grid md:grid-cols-2">
        <div className="image">
          <Link href={'/'}>
            <Image src={'/images/img1.jpg'} width={600} height={600} />
          </Link>
        </div>
        <div className="info flex justify-center flex-col px-5">
          <div className="cat">
            <Link href={'/'} className="text-orange-600 hover:text-orange-800">
              Medical Screening
            </Link>
            <Link href={'/'} className="text-gray-800 hover:text-gray-600">
              -July 21, 2014
            </Link>
          </div>
          <div className='title'>
            <Link
              href={'/'}
              className="text-2xl md:text-4xl font-bold text-gray-800 hover:text-gray-600"
            >
              OUR MISSION
            </Link>
          </div>
          <p className="text-gray-500 py-3">
            Our mission is making life better for those living with kidney
            disease. Through our Foundation, we ensure patients and families
            have access to dialysis ...
          </p>
          <Author></Author>
        </div>
      </div>
      

  );
}
