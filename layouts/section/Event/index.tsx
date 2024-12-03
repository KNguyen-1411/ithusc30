'use client'
import TimeLine from '@/layouts/section/Event/time-line'
export default function EventSection() {
  return (
    <div
      className="w-full "
      style={{
        background: '#fff',
      }}
    >
      <div className="container text-turbo-300 pt-5 pb-10">
        <div className="py-10">
          <h1
            className="text-prussian-blue-800 font-bold text-4xl md:text-5xl  montserrat text-center mb-3"
            data-aos="fade-in"
          >
            Lịch trình sự kiện
          </h1>
        </div>
        <section
          className="timeline"
          data-aos="fade-in"
          data-aos-duration="3000"
        >
          <TimeLine />
        </section>
      </div>
    </div>
  )
}
