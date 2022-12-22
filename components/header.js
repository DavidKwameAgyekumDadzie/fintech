import Link from 'next/Link';

export default function header() {
  return (
    <header className="bg-gray-50">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
          <input type="text" className="input-text" placeholder="Search..." />
        </div>
        <div className="shrink w-80 sm:order-3 ">
          <Link href={'/'}>
            <h2 className="font-bold ">IFG</h2>
          </Link>
        </div>
        <div className="w-100 order-3 flex justify-center">
          <div className="flex  gap-6">
            <Link href={'/'}>Who We Are </Link>
            <Link href={'/'}k>Working Capital </Link>
            <Link href={'/'}>Funding Solutions</Link>
            <Link href={'/'}>News</Link>
            <Link href={'/'}>Blog</Link>
            <Link href={'/'}>Testimonials</Link>
            <Link href={'/'}>Contact</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
