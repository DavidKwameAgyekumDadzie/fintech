import Image from 'next/image';
import Link from 'next/link';

export default function header() {
  return (
    <header className="bg-green-500">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
          <input type="text" className="input-text" placeholder="Search..." />
        </div>
        <div className="shrink w-80 sm:order-3 flex justify-center ">
          <Link href={'/'}>
            <Image
              src={'/images/ifg logo.png'}
              width={60}
              height={60}
              className="display: flex justify-center "
            />
            <h2 className="font-bold ">International Financial Group</h2>
          </Link>
        </div>
        <div className="Nav w-100 order-3 flex justify-center font-green ">
          <div className="flex  gap-6 ">
            <Link href={'/'} className="hover:text-white">
              Who We Are{' '}
            </Link>
            <Link href={'/'} className="hover:text-white">
              Working Capital{' '}
            </Link>
            <Link href={'/'} className="hover:text-white">
              Funding Solutions
            </Link>
            <Link href={'/'} className="hover:text-white">
              News
            </Link>
            <Link href={'/'} className="hover:text-white">
              Blog
            </Link>
            <Link href={'/'} className="hover:text-white">
              Testimonials
            </Link>
            <Link href={'/'} className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
