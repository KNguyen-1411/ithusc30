import h from './home.module.scss'
import Image from 'next/image'
import Logo from '@a/imgs/logo_it.png'
import BackgroundHome from './bg'
import { ChevronDown } from 'lucide-react'
import { Link } from 'react-scroll'
export default function HomeSection() {
  return (
    <>
      <div className=" min-h-[102vh] relative bg-dark">
        <div
          className={`${h.ovl} container center flex-col md:flex-row text-center md:text-left md:scale-105`}
        >
          <div
            className="mr-0 md:mr-12 mb-0  md:mb-10 
          scale-[80%] md:scale-100"
          >
            <Image
              src={Logo}
              alt="Logo"
              width={400}
              height={400}
              style={{
                width: 360,
              }}
              className="y-in"
            />
          </div>
          <div className="y-in">
            <div className="md:mb-10 mb-4">
              <h2 className="text-[32px] md:text-[40px] mb-1 font-bold">
                Khoa <span className="text-blue-400">C</span>ông nghệ thông tin
              </h2>
              <p className="text-xl md:text-2xl font-semibold text-gray-200">
                Trường Đại học Khoa học, Đại học Huế
              </p>
            </div>
            <div className="flex items-center">
              <div className="flex flex-col items-center relative ps-2 md:ps-0">
                <div className="flex glow">
                  <span className="font-bold tomorrow text-[150px] md:text-[180px] block leading-none ">
                    3
                  </span>
                  <span className="font-bold tomorrow text-[150px] md:text-[180px] block leading-none">
                    0
                  </span>
                </div>
                <div className="home-ovl-hr"></div>
              </div>
              <div className="flex flex-col md:ml-4 ml-1 glow">
                <p
                  className="text-3xl text-left md:text-5xl font-bold 
                mb-8 md:mb-12 charm glow"
                >
                  năm
                </p>
                <p className="text-[25px] md:text-4xl text-left font-bold">
                  Thành lập
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-5 hover:bottom-9 text-white w-full hidden md:block transition-all duration-400 ease-in-out">
          <Link
            to="AboutSection"
            smooth
            duration={800}
            offset={-70}
            className="center flex-col cursor-pointer transition-all duration-300 ease-in-out opacity-50 hover:opacity-100"
            style={{
              animation: 'lenxuong 3s infinite',
            }}
          >
            <p className="font-bold text-2xl monterrat">Xem thêm</p>
            <ChevronDown className="mr-1 -mt-1 font-bold" size={30} />
          </Link>
        </div>
        <BackgroundHome />
      </div>
    </>
  )
}
