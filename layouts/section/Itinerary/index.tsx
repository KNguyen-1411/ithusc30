import './timeline.css'
export default function ItinerarySection() {
  return (
    <div
      style={{
        background:
          'linear-gradient(90deg, #dcf2ff 0%, #e1eaff 50%, #dcf2ff 100%)',
      }}
    >
      <div className="training_timeline pb-10 pt-2">
        <div className="container">
          <h1
            className="text-prussian-blue-800 font-bold text-4xl md:text-5xl  pt-12 montserrat text-center pb-10 md:pb-0"
            data-aos="fade-in"
          >
            Hành trình 30 năm phát triển
          </h1>
          <div className="roadmap">
            <div className="roadmap_step left" data-aos="zoom-out">
              <div className="step_header" id="training">
                <div className="count  text-prussian-blue-900">1994</div>
              </div>
              <div className="step_body">
                <p className="description">
                  Ngày 13 tháng 12 năm 1994, Bộ Giáo Dục và Đào Tạo ra quyết
                  định  thành lập Khoa Công nghệ thông tin tại Đại học Huế.
                </p>
              </div>
            </div>

            <div></div>
            <div className="right-pc" data-aos="zoom-out"></div>

            <div className="roadmap_step right" data-aos="zoom-out">
              <div className="step_header" id="namnhat">
                <div className="count bg-prussian-blue-white">1995</div>
              </div>
              <div className="step_body">
                <p className="description">
                  Ngày 01 tháng 06 năm 1995, Chính thức đào tạo cử nhân ngành
                  Công nghệ thông tin, trở thành 1 trong 6 khoa Công nghệ thông
                  tin trọng điểm trên toàn quốc.
                </p>
              </div>
            </div>

            <div className="roadmap_step left" data-aos="zoom-out">
              <div className="step_header">
                <div className="count text-prussian-blue-900">2000</div>
              </div>
              <div className="step_body">
                <p className="description">
                  Năm 2000, Đào tạo thạc sĩ chuyên ngành Khoa học máy tính được
                  đưa vào hoạt động.
                </p>
              </div>
            </div>

            <div></div>
            <div className="right-pc" data-aos="zoom-out"></div>

            <div className="roadmap_step right" data-aos="zoom-out">
              <div className="step_header">
                <div className="count bg-prussian-blue-white">2010</div>
              </div>
              <div className="step_body">
                <p className="description">
                  Năm 2010, Khoa Công nghệ thông tin được giao trọng trách đào
                  tạo tiến sĩ chuyên ngành Khoa học máy tính.
                </p>
              </div>
            </div>

            <div className="roadmap_step left" data-aos="zoom-out">
              <div className="step_header" id="namhai">
                <div className="count text-prussian-blue-900">2018</div>
              </div>
              <div className="step_body">
                <p className="description">
                  Năm 2018, Mở ngành đào tạo cử nhân Kỹ thuật phần mềm (cơ chế
                  đặc thù).
                </p>
              </div>
            </div>

            <div></div>
            <div></div>

            <div className="roadmap_step right" data-aos="zoom-out">
              <div className="step_header" id="teamduan">
                <div className="count bg-prussian-blue-white">2020</div>
              </div>
              <div className="step_body">
                <p className="description">
                  Năm 2020, Đào tạo Thạc sĩ ngành Quản lí công nghệ thông tin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
