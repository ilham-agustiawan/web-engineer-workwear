import Image from "next/image";
import Link from "next/link";
import { anonymousPro, dmMono, leagueSpartan } from "@/app/ui/fonts";
import Footer from "@/components/footer";
import LineWarning from "@/components/line-warning";

function HeaderHistory() {
  return (
    <header className="relative h-lvh">
      <Image
        src="/history-main.svg" // Replace with your image path
        alt="Background Image"
        layout="fill" // Fill the parent element
        objectFit="cover" // Cover the area
        className="z-0" // Behind other content
      />
      <div className="absolute inset-0 bg-black bg-opacity-10 z-10" />
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between z-20 relative">
        <h1
          className={`${leagueSpartan.className} text-[85px] sm:text-[60px] md:text-[70px] lg:text-[85px] font-extrabold text-black leading-tight `}
        >
          ENGINEER
          <br />
          WORKWEAR
        </h1>
        <div className="relative py-4">
          <div className="container mx-auto">
            <nav className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white font-bold text-lg">
              <Link
                className={`${leagueSpartan.className} text-[30px] sm:text-[20px] md:text-[25px] lg:text-[30px] hover:underline`}
                href="/"
              >
                About
              </Link>
              <Link
                className={`${leagueSpartan.className} text-[30px] sm:text-[20px] md:text-[25px] lg:text-[30px] hover:underline`}
                href="/history"
              >
                History
              </Link>
              <Link
                className={`${leagueSpartan.className} text-[30px] sm:text-[20px] md:text-[25px] lg:text-[30px] hover:underline`}
                href="#store"
              >
                Store
              </Link>
              <Link
                className={`${leagueSpartan.className} text-[30px] sm:text-[20px] md:text-[25px] lg:text-[30px] hover:underline`}
                href="#contact"
              >
                Contact
              </Link>
              <Link
                className={`${leagueSpartan.className} text-[30px] sm:text-[20px] md:text-[25px] lg:text-[30px] hover:underline`}
                href="#product"
              >
                Product
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="text-center">
      <Image
        src="/hero.png"
        alt="Hero Image"
        width={1920}
        height={1080}
        className="w-full h-auto"
      />
    </section>
  );
}

function AboutUs() {
  return (
    <section id="about" className="bg-bg">
      <div className="p-12 pr-36 bg-primary-yellow text-black w-full pb-[17rem]">
        <h2 className="mb-4 font-leagueSpartan text-[40px] font-extrabold">
          About Us
        </h2>
        <p className={`text-[20px] mb-4 font-light ${dmMono.className}`}>
          Engineer Workwear adalah Brand yang fokus mengembangkan Apparel yang
          dispesialisasikan untuk para Engineer dan anak teknik, hingga pekerja
          kasar lapangan. Engineer Workwear ingin mengajak para pekerja lapangan
          untuk lebih sadar tentang keselamatan kerja.
        </p>
        <p className={`text-[20px] mb-4 font-light ${dmMono.className}`}>
          Engineer Workwear membuat Apparel dengan standar industri dengan
          kualitas yang kuat dan bisa dipakai untuk bekerja.
        </p>
      </div>

      <div className="relative">
        <div className=" bg-bg w-full flex justify-center mt-[20rem] pb-[3rem]">
          <div className="absolute rounded-lg transform -translate-y-full">
            <div className="px-30">
              <Image
                src="/about-us.jpeg" // replace with your image path
                alt="Workwear"
                width={900}
                height={125}
                fill={false}
                style={{ objectFit: "contain" }}
                className="rounded-[134px]"
              />
              <p className={`text-[15px] py-4 ${dmMono.className} text-center`}>
                Dengan bangga mempersembahkan Apparel dengan bahan standar
                <br />
                industri yang membuat dirimu terlindungi dan tetap stylist.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function History1() {
  return (
    <section className="bg-bg">
      <div className="p-12 text-white w-full pb-10 px-20">
        <h2
          className={`mb-4 ${leagueSpartan.className} text-[40px] font-extrabold text-right`}
        >
          History
        </h2>
        <p className={`text-[20px] mb-4 font-light ${dmMono.className}`}>
          ENGINEER WORKWEAR Adalah Perusahaan yang bergerak dibidang Apparel
          namun berbeda dari yang lainnya Engineer Workwear mengkhususkan target
          mereka terhadap para Engineer dan pekerja kasar,ciri khas style dari
          baju mereka yang industrialis dengan safety quality dengan standar
          industry. Engineerworkwear sendiri merupakan sebuah brand yang
          tercetus Ketika sang owner dan temannya ingin menambah dan
          memperkenalkan identitas diri mereka sebag aianak Teknik,dari sinilah
          mereka membuat brand Bernama Engineer Workwear.
        </p>
      </div>
    </section>
  );
}

function History2() {
  return (
    <section className="bg-primary-yellow py-10">
      <div className="p-12 text-black w-full pb-10 flex items-center justify-center">
        <p className={`text-[20px] mb-4 font-medium ${dmMono.className}`}>
          Brand in akan terus ada dan berkembang demi
          <br />
          sadarnya masyarakat tentang keselamatan kerja
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderHistory />
      <LineWarning />
      <History1 />
      <LineWarning />
      <History2 />
      <Footer />
    </div>
  );
}
