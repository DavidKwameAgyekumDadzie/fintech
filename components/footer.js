import Link from 'next/link';
import {
  ImFacebook2,
  ImTwitter,
  ImYoutube2,
  ImInstagram,
} from 'react-icons/im';
import Newsletter from "./_child/newsletter"

export default function footer() {

  const bg = {
    // backgroundImage: "url('/images/SHEFLOGO.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom-left',
  };


  return (
    <footer className="bg-gray-500" style={bg}>
      <Newsletter></Newsletter>
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <div className="w-96 order-3 flex justify-center">
              <div className="flex gap-6">
                <Link href={'/'}>
                  <ImFacebook2 />
                </Link>
                <Link href={'/'}>
                  <ImInstagram />
                </Link>
                <Link href={'/'}>
                  <ImTwitter />
                </Link>
                <Link href={'/'}>
                  <ImYoutube2 />
                </Link>
              </div>
            </div>
          </div>
          <p className="py-5 text-gray-400 text-center">
            Copyright IFGGHⒸ2023 All rights reserved
          </p>
          <p className="text-gray-400 text-center">OPT-IN TO RECEIVE COMMUNICATION</p>
        </div>
      </div>
    </footer>
  );
}
