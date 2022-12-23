import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";


export default function section4() {
  return (
    <section className="container mx-auto md:px-20 py-16">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="font-bold text-4xl py-12">Services</h1>
          <div className="flex flex-col gap-6">
            {/* {posts} */}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
          </div>
        </div>
        <div className="item">
          <h1 className="font-bold text-4xl py-12">Products</h1>
          <div className="flex flex-col gap-6">
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
          </div>
        </div>
      </div>
    </section>
  );
}

function Post() {
   return (
     <div className="flex gap-5">
       <div className="image flex flex-col justify-start">
         <Link href={'/'}>
           <Image
             src={'/images/SHEF CONNECTED CARE .jpg'}
             className="rounded"
             width={500}
             height={350}
           />
         </Link>
       </div>
       <div className="info flex justify-center flex-col">
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
             className="text-xl font-bold text-gray-800 hover:text-gray-600"
           >
             OUR MISSION
           </Link>
         </div>
         <Author></Author>
       </div>
     </div>
   ); 
}
