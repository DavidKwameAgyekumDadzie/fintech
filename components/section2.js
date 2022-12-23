import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";

export default function section2() {
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

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
            src={'/images/img2.jpg'}
            className="rounded"
            width={500}
            height={300}
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
            className="text-xl  font-bold text-gray-800 hover:text-gray-600"
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
