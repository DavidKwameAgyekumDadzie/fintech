import Image from 'next/image';
import Link from 'next/link';
import Author from './_child/author';
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

export default function section1() {
  SwiperCore.use([Autoplay]);

  const bg = {
    // background: "url('/images/woman farming.jpeg') no-repeat",
    backgroundPosition: 'right',
  };

  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>

        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
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
          <Image src={'/images/ifg.jpg'} width={600} height={600} />
        </Link>
      </div>
      <div className="info flex justify-center flex-col px-5">
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
            className="text-2xl md:text-4xl font-bold text-gray-800 hover:text-gray-600"
          >
            ABOUT
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          I am an accomplished Commercial and Investment Banker and Entrepreneur
          with over 35 years professional experience in the banking and finance
          industry as well a the entrepreneurship ecosystem in Ghana and the
          Africa region. I set up and still operates an Investment Banking Firm
          – International financial Services Limited for the past 22 years. I
          also set up an MSME Business Incubator – Emerging Entrepreneurs Centre
          in 2008. This Small Business Incubator is still in operation. I have
          run small and SME Business Incubation and Acceleration Programs for
          over 20 years. I am currently coaching and mentoring businesses in
          Ghana, Kenya, Tanzania etc. I have great natural passion for
          entrepreneurship, coaching and mentoring of start up and other
          entrepreneurs in Ghana and the Africa region. In support of my
          entrepreneurship and financial expertise, I earned two Masters Degrees
          in Entrepreneurship and Small Enterprise development from The
          University of Cape Coast in Ghana and MBA in Social Entrepreneurship
          from ALtis University of Milan in Italy. I also earned a doctorate
          degree (PhD) in Banking and Finance in the year 2000 from Wayne Park
          university in USA.I had worked in Entrepreneurship development for
          more than twenty years. Against this background and age, I am now
          aspiring to be a Career Coach to spend the rest of my life in coaching
          and mentoring start-up MSMEs in Ghana and the Africa region. I believe
          mentoring and coaching can add value to new startup MSME in Africa and
          other regions. I am currently engaged in coaching and mentoring ten
          social businesses (on line/virtual) at the Grow Up Business Incubator
          – Yunus Environment Hub in Kenya as well as some start-ups in Ghana.
          Please refer to my company website: www.ifggh.com for some details and
          on going projects.
        </p>
        <Author></Author>
      </div>
    </div>
  );
}
