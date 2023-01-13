import Link from 'next/link';
import Image from 'next/image';
import Author from './_child/author';

export default function section2() {
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">
        {' '}
        Mentorship Marketplace
      </h1>

      {/* {grid columns} */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
      </div>
    </section>
  );
}

function Post() {
  return (
    <div className="item">
      <div className="images">
        <Link href={'/'}>
          <Image
            src={'/images/IFG1.jpg'}
            className="rounded"
            width={500}
            height={300}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4 px-5">
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
            className="text-xl  font-bold text-gray-800 hover:text-gray-600"
          >
            Mentorship motivation
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          I am looking for new investments I like to learn about industries and
          new businesses I want to give back to the startup ecosystem and
          entrepreneurs coming up I want to make new connections for myself
          and/or the organization I represent Other I intend also to provide
          access to finance consultancy services (Business Plan Development and
          Finance Facilitation) to upcoming MSMEs to enable them secure equity
          and debt financing to run their businesses successfully. – please
          visit https/www.ifggh.com for more information on The International
          Financial Group Limited.
        </p>
        <Author></Author>
      </div>
    </div>
  );
}
