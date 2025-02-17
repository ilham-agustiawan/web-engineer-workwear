import Image from "next/image";
import Link from "next/link";

export default () => {
  return (
    <div className="bg-bg text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-3 md:mb-0">
          <ul>
            <li className="mb-2">
              <a
                href="/"
                className="relative hover:text-yellow-2 flex items-center text-[20px] font-light"
              >
                About us
                <span className="absolute left-0 bottom-[-4px] w-full border-b-2 border-yellow-2"></span>
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/store"
                className="relative hover:text-yellow-2 flex items-center text-[20px] font-light"
              >
                How to Order
                <span className="absolute left-0 bottom-[-4px] w-full border-b-2 border-yellow-2"></span>
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="relative hover:text-yellow-2 flex items-center text-[20px] font-light"
              >
                FAQ
                <span className="absolute left-0 bottom-[-4px] w-full border-b-2 border-yellow-2"></span>
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/contact"
                className="relative hover:text-yellow-2 flex items-center text-[20px] font-light"
              >
                Contact
                <span className="absolute left-0 bottom-[-4px] w-full border-b-2 border-yellow-2"></span>
              </a>
            </li>
          </ul>
          <div className="">
            <p className="mt-4 flex items-center text-sm">
              <span className="text-yellow-2 mr-2">©</span> 2024 ENGINEER
              WORKWEAR
            </p>
          </div>
        </div>
        <div className="flex space-x-8">
          <a
            href="https://shopee.co.id/engineercloth?categoryId=100009&entryPoint=ShopByPDP&itemId=23602442279"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-yellow-2 p-2 rounded-full"
          >
            <Image src="/shopee.svg" width={40} height={30} alt="Logo" />
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-yellow-2 p-2 rounded-full"
          >
            <Image src="/browse.svg" width={40} height={30} alt="Logo" />
          </a>
          <a
            href="https://www.tokopedia.com/engineerworkwear?source=universe&st=product"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-yellow-2 p-2 rounded-full"
          >
            <Image src="/tokped.svg" width={40} height={30} alt="Logo" />
          </a>
        </div>
      </div>
    </div>
  );
};
