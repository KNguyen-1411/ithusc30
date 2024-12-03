import banner from '@a/imgs/banner2.png'
import gv from '@a/imgs/cntt.jpg'
import Image from 'next/image'
import { Button } from '@nextui-org/button'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import DNCB from './dncb'
import mang from '@a/imgs/mang.png'
import ai from '@a/imgs/ai.png'
import pm from '@a/imgs/pm.png'
import img from '@a/imgs/img-8.webp'

export default function AboutSection() {
  return (
    <>
      <div className="container" data-aos="fade-up">
        <h1 className="text-prussian-blue-800 font-bold text-4xl md:text-5xl pt-12 montserrat">
          Giới thiệu
        </h1>
        <div className="flex items-center mb-10 mt-6 ms-1">
          <h2 className="text-gray-600 font-semibold text-2xl mr-5">
            Quyết định thành lập
          </h2>
          <hr className="flex-1 border-none mt-1 h-[2px] bg-black opacity-50 rounded-lg" />
        </div>
        <div className="flex flex-col md:flex-row ">
          <div className="md:mr-10 mr-0">
            <Image
              src={banner}
              alt="banner"
              className="rounded-full object-cover mb-5 md:mb-0 mx-auto img-banner-ll"
              style={{ width: '340px', height: '340px' }}
            />
          </div>
          <div className="center flex-1 mb-5">
            <p className="text-justify text-xl text-gray-700">
              Ngày 13/12/1994 Bộ Giáo dục và Đào tạo ký quyết định thành lập
              khoa Công nghệ thông tin (CNTT) thuộc trường Đại học Khoa học -
              Đại học Huế, một trong sáu khoa CNTT trọng điểm trên toàn quốc.
              Tuy nhiên, khoa CNTT chính thức hoạt động từ ngày 01/06/1995 với 6
              thành viên chuyển từ Bộ môn Toán ứng dụng của Khoa Toán – Cơ – Tin
              học.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-prussian-blue-100 py-10 mb-8 mt-12">
        <div className="container">
          <div className="flex items-center">
            <hr className="flex-1 border-none h-[2px] bg-black opacity-50 rounded-lg" />
            <h1 className="text-gray-700 font-semibold text-2xl mx-5">
              Đội ngũ cán bộ
            </h1>
            <hr className="flex-1 border-none h-[2px] bg-black opacity-50 rounded-lg" />
          </div>
          <DNCB />
        </div>
      </div>
      <div
        className="container pt-5"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <div className="relative about__img--hover">
          <Image
            src={gv}
            alt="gv"
            className="rounded-2xl object-cover "
            style={{ height: 400, objectPosition: 'center x' }}
          />
          <div className="ovl flex justify-center absolute bottom-0">
            <Button
              size="lg"
              className="absolute hover:opacity-100 font-bold"
              onClick={() => {
                window.open('https://it.husc.edu.vn/giang-vien', '_blank')
              }}
            >
              Xem đội ngũ cán bộ
            </Button>
          </div>
        </div>
      </div>
      <div className="container mt-14">
        <div className="flex items-center">
          <hr className="flex-1 border-none h-[2px] bg-black opacity-50 rounded-lg" />
          <h1 className="text-gray-700 font-semibold text-2xl mx-5">Bộ môn</h1>
          <hr className="flex-1 border-none h-[2px] bg-black opacity-50 rounded-lg" />
        </div>
        <div className="flex justify-between mt-10 md:flex-row flex-col">
          <Card
            data-aos="zoom-in"
            className="flex-1 md:mr-10 mb-10 min-h-60 cursor-pointer hover:shadow-xl"
            style={{ transition: 'all 0.3s ease' }}
          >
            <CardBody className="center">
              <Image src={ai} alt="AI" width={100} height={100} />
            </CardBody>
            <hr />
            <CardFooter className="center text-gray-700 text-xl font-semibold">
              Khoa học máy tính
            </CardFooter>
          </Card>
          <Card
            data-aos="zoom-in"
            className="flex-1 mb-10 min-h-60 cursor-pointer hover:shadow-xl"
            style={{ transition: 'all 0.3s ease' }}
          >
            <CardBody className="center">
              <Image src={pm} alt="pm" width={100} height={100} />
            </CardBody>
            <hr />
            <CardFooter className="center text-gray-700 text-xl font-semibold">
              Công nghệ phần mềm
            </CardFooter>
          </Card>
          <Card
            data-aos="zoom-in"
            className="flex-1 md:ms-10 mb-10 min-h-60 cursor-pointer hover:shadow-xl"
            style={{ transition: 'all 0.3s ease' }}
          >
            <CardBody className="center">
              <Image src={mang} alt="mang" width={100} height={100} />
            </CardBody>
            <hr />
            <CardFooter className="center text-gray-700 text-xl font-semibold">
              Mạng máy tính
            </CardFooter>
          </Card>
        </div>
      </div>
      <div
        className="w-full bg-prussian-blue-100 pt-8 pb-10"
        data-aos="fade-in"
      >
        <div className="container">
          <div className="flex items-center">
            <hr className="flex-1 border-none h-[2px] bg-black opacity-50 rounded-lg" />
            <h1 className="text-gray-700 font-semibold text-2xl mx-5">
              Đào tạo
            </h1>
            <hr className="flex-1 border-none h-[2px] bg-black opacity-50 rounded-lg" />
          </div>
          <div className="flex justify-between mt-10 md:flex-row flex-col">
            <Card
              data-aos="zoom-in"
              className="flex-1 min-h-60 cursor-pointer hover:shadow-xl"
              style={{ transition: 'all 0.3s ease' }}
            >
              <CardHeader className="center py-3">
                <h2 className="text-2xl font-semibold text-gray-600">
                  Bậc Đại học
                </h2>
              </CardHeader>
              <hr />
              <CardBody className="center pb-10">
                <p className="text-lg text-gray-700 font-semibold mt-2">
                  Công nghệ thông tin
                </p>
                <p className="text-lg text-gray-700 font-semibold mt-2">
                  Kỹ thuật phần mềm
                </p>
              </CardBody>
            </Card>
            <Card
              data-aos="zoom-in"
              className="flex-1 mx-0 md:mx-10 my-8 md:my-0 min-h-60 cursor-pointer hover:shadow-xl"
              style={{ transition: 'all 0.3s ease' }}
            >
              <CardHeader className="center py-3">
                <h2 className="text-2xl font-semibold text-gray-600">
                  Bậc Thạc sĩ
                </h2>
              </CardHeader>
              <hr />
              <CardBody className="center pb-10">
                <p className="text-lg text-gray-700 font-semibold mt-2">
                  Khoa học máy tính
                </p>
                <p className="text-lg text-gray-700 font-semibold mt-2">
                  Quản lí công nghệ
                </p>
              </CardBody>
            </Card>
            <Card
              data-aos="zoom-in"
              className="flex-1  min-h-60 cursor-pointer hover:shadow-xl"
              style={{ transition: 'all 0.3s ease' }}
            >
              <CardHeader className="center py-3">
                <h2 className="text-2xl font-semibold text-gray-600">
                  Bậc Tiến sĩ
                </h2>
              </CardHeader>
              <hr />
              <CardBody className="center pb-10">
                <p className="text-lg text-gray-700 font-semibold mt-2">
                  Khoa học máy tính
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <div className="w-full bg-prussian-blue-200">
        <Image
          src={img}
          alt=""
          className="w-full opacity-75 h-[250px] object-cover object-center"
        />
      </div>
      <div
        className="container flex items-center my-6 flex-col md:flex-row"
        data-aos="zoom-in"
      >
        <div className="flex mr-5 items-center">
          <h1
            className="font-bold tomorrow text-prussian-blue-900 opacity-80"
            style={{ fontSize: 150 }}
          >
            30
          </h1>
          <p className="text-3xl font-bold mb-20 text-prussian-blue-900 opacity-80">
            năm
          </p>
        </div>
        <div>
          <p className="text-xl text-gray-700 text-justify">
            Xây dựng và phát triển, khoa đã đào tạo được số lượng lớn các cử
            nhân, thạc sĩ, tiến sĩ đang công tác trên mọi miền tổ quốc và thế
            giới, hướng tới đóng góp cho sự phát triển của đất nước và hội nhập
            quốc tế tích cực, sâu rộng.
          </p>
        </div>
      </div>
    </>
  )
}
