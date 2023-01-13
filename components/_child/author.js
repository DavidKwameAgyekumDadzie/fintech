import Image from "next/image"
import Link from "next/link"

export default function author() {
  return (
    <div className="author flex py-5">
      <Image
        src={'/images/author/dr-macjohn.png'}
        width={70}
        height={70}
        className="rounded-full "
      ></Image>
      <div className="flex flex-col justify-center px-4">
        <Link
          href={'/'}
          className="text-md font-bold text-gray-800 hover:text-gray-600"
        >
          Dr. MacJohn Gordon Yaovi Geraldo
        </Link>
        <span className="text-sm text-gray-500">
          Founder& Chief Executive Officer at International Financial Services
          Limited
        </span>
      </div>
    </div>
  );
}
