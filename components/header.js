export default function header() {
  return (
    <header className="bg-gray-50">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
          <input type="text" className="input-text" placeholder="Search..." />
        </div>
        <div className="shrink w-80 sm:order-3 ">
          <a className="font-bold ">IFG</a>
        </div>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6">
            <a>Who We Are </a>
            <a>Working Capital </a>
            <a>Funding Solutions</a>
            <a>News</a>
            <a>Blog</a>
            <a>Testimonials</a>
            <a>Contact</a>
          </div>
        </div>
      </div>
    </header>
  );
}
