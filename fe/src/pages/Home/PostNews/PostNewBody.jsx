import React from 'react'

export default function PostNewBody() {
    return (
        <div>
            <div>
                {/* recuiter Nav */}
                <nav className="navbar navbar-expand-lg navbar-light nav-recuitment">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNava" aria-controls="navbarNava" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse container" id="navbarNava">
                        <ul className="navbar-nav nav-recuitment-li">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Quản lý đăng tuyển</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Quản lý ứng viên</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Quản lý đăng tin</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Quản lý hồ sơ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Tài khoản</a>
                            </li>
                        </ul>
                        <ul className="rec-nav-right">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Tìm hồ sơ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Đăng tuyển</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/*  recuiter Nav */}
                {/* widget recuitment  */}
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="home-ads">
                                    <a href="#">
                                        <img src="assets/home/img/hna2.jpg" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* (end) widget recuitment  */}
                {/* published recuitment */}
                <div className="container-fluid published-recuitment-wrapper">
                    <div className="container published-recuitment-content">
                        <div className="row">
                            <div className="col-md-8 col-sm-12 col-12 recuitment-inner">
                                <form className="recuitment-form">
                                    <div className="accordion" id="accordionExample">
                                        <div className="card recuitment-card">
                                            <div className="card-header recuitment-card-header" id="headingOne">
                                                <h2 className="mb-0">
                                                    <a className="btn btn-link btn-block text-left recuitment-header" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        Đăng tin tuyển dụng
                                                        <span id="clickc1_advance2" className="clicksd">
                                                            <i className="fa fa fa-angle-up" />
                                                        </span>
                                                    </a>
                                                </h2>
                                            </div>
                                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                <div className="card-body recuitment-body">
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Tiêu đề<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                        <div className="col-sm-9">
                                                            <input type="text" className="form-control" placeholder="Nhập tiêu đề" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Số lượng cần tuyển</label>
                                                        <div className="col-sm-9">
                                                            <input type="number" className="form-control" placeholder={1} />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Giới tính<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                        <div className="col-sm-9">
                                                            <select type="text" className="form-control" id="jobGender">
                                                                <option value>Chọn giới tính</option>
                                                                <option value>Không yêu cầu</option>
                                                                <option value>Nam</option>
                                                                <option value>Nữ</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Mô tả công việc<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                        <div className="col-sm-9">
                                                            <textarea type="text" className="form-control" placeholder="Nhập mô tả công việc" rows={5} defaultValue={""} />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Yêu cầu công việc<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                        <div className="col-sm-9">
                                                            <textarea type="text" className="form-control" placeholder="Nhập yêu cầu công việc" rows={5} defaultValue={""} />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Tính chất công việc<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                        <div className="col-sm-9">
                                                            <select type="text" className="form-control" id="natureWork">
                                                                <option selected="selected" value>Chọn tính chất công việc</option>
                                                                <option value={18}>Giờ hành chính</option>
                                                                <option value={10}>Việc làm thu nhập cao</option>
                                                                <option value={11}>Việc làm thêm/Làm việc ngoài giờ</option>
                                                                <option value={12}>Thầu dự án/Freelance/Việc làm tự do</option>
                                                                <option value={13}>Việc làm online</option>
                                                                <option value={14}>Kinh doanh mạng lưới</option>
                                                                <option value={15}>Giúp việc gia đình</option>
                                                                <option value={16}>Hợp tác lao động/Nước ngoài</option>
                                                                <option value={17}>Việc làm người khuyết tật</option>
                                                                <option value={19}>Việc làm theo ca/Đổi ca</option>
                                                                <option value={20}>Việc làm cho trí thức lớn tuổi (trên 50 tuổi)</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Trình độ<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                        <div className="col-sm-9">
                                                            <select type="text" className="form-control" id="jobLevel">
                                                                <option selected="selected" value>Chọn trình độ</option>
                                                                <option value={6}>Đại học</option>
                                                                <option value={5}>Cao đẳng</option>
                                                                <option value={4}>Trung cấp</option>
                                                                <option value={7}>Cao học</option>
                                                                <option value={3}>Trung học</option>
                                                                <option value={2}>Chứng chỉ</option>
                                                                <option value={1}>Lao động phổ thông</option>
                                                                <option value={8}>Không yêu cầu</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Kinh nghiệm<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                        <div className="col-sm-9">
                                                            <select type="text" className="form-control" id="jobExperience">
                                                                <option selected="selected" value>Chọn kinh nghiệm</option>
                                                                <option value={0}>Chưa có kinh nghiệm</option>
                                                                <option value={7}>Dưới 1 năm</option>
                                                                <option value={1}>1 năm</option>
                                                                <option value={2}>2 năm</option>
                                                                <option value={3}>3 năm</option>
                                                                <option value={4}>4 năm</option>
                                                                <option value={5}>5 năm</option>
                                                                <option value={6}>Trên 5 năm</option>
                                                                <option value={8}>Không yêu cầu kinh nghiệm</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Mức lương<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                        <div className="col-sm-9">
                                                            <select type="text" className="form-control" id="jobSalary">
                                                                <option selected="selected" value>Chọn mức lương</option>
                                                                <option value={2}>Dưới 3 triệu</option>
                                                                <option value={4}>3-5 triệu</option>
                                                                <option value={5}>5-7 triệu</option>
                                                                <option value={7}>7-10 triệu</option>
                                                                <option value={6}>10-12 triệu</option>
                                                                <option value={10}>12-15 triệu</option>
                                                                <option value={8}>15-20 triệu</option>
                                                                <option value={11}>20-25 triệu</option>
                                                                <option value={12}>25-30 triệu</option>
                                                                <option value={13}>30-40 triệu</option>
                                                                <option value={14}>40-50 triệu</option>
                                                                <option value={15}>Trên 50 triệu</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Hình thức làm việc<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                        <div className="col-sm-9">
                                                            <select type="text" className="form-control" id="jobWorkTime">
                                                                <option selected="selected" value>Chọn hình thức làm việc</option>
                                                                <option value={1}>Nhân viên chính thức</option>
                                                                <option value={2}>Nhân viên thời vụ</option>
                                                                <option value={3}>Bán thời gian</option>
                                                                <option value={4}>Làm thêm ngoài giờ</option>
                                                                <option value={5}>Thực tập và dự án</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Thời gian thử việc<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                        <div className="col-sm-9">
                                                            <select type="text" className="form-control" id="jobProbation">
                                                                <option selected="selected" value>Chọn thời gian thử việc</option>
                                                                <option value={0}>Nhận việc ngay</option>
                                                                <option value={1}>1 tháng</option>
                                                                <option value={2}>2 tháng</option>
                                                                <option value={3}>3 tháng</option>
                                                                <option value={4}>Trao đổi trực tiếp khi phỏng vấn</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Quyền lợi<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                        <div className="col-sm-9">
                                                            <textarea type="text" className="form-control" placeholder="Quyền lợi công việc" rows={5} defaultValue={""} />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Ngành nghề</label>
                                                        <div className="col-sm-9">
                                                            <select type="text" className="form-control" id="jobType">
                                                                <option selected="selected" value>Chọn ngành nghề</option>
                                                                <option value={32}>Kinh doanh</option>
                                                                <option value={10}>Bán hàng</option>
                                                                <option value={21}>Chăm sóc khách hàng</option>
                                                                <option value={47}>Tài chính/Kế toán/Kiểm toán</option>
                                                                <option value={29}>Hành chính/Thư ký/Trợ lý</option>
                                                                <option value={33}>Lao động phổ thông</option>
                                                                <option value={16}>Cơ khí/Kĩ thuật ứng dụng</option>
                                                                <option value={35}>Sinh viên/Mới tốt nghiệp/Thực tập</option>
                                                                <option value={22}>Điện/Điện tử/Điện lạnh</option>
                                                                <option value={12}>Báo chí/Biên tập viên</option>
                                                                <option value={20}>Bảo vệ/Vệ sĩ/An ninh</option>
                                                                <option value={13}>Bất động sản</option>
                                                                <option value={14}>Biên dịch/Phiên dịch</option>
                                                                <option value={15}>Bưu chính viễn thông</option>
                                                                <option value={17}>Công nghệ thông tin</option>
                                                                <option value={18}>Dầu khí/Địa chất</option>
                                                                <option value={19}>Dệt may</option>
                                                                <option value={23}>Du lịch/Nhà hàng/Khách sạn</option>
                                                                <option value={24}>Dược/Hóa chất/Sinh hóa</option>
                                                                <option value={25}>Giải trí/Vui chơi</option>
                                                                <option value={26}>Giáo dục/Đào tạo/Thư viện</option>
                                                                <option value={27}>Giao thông/Vận tải/Thủy lợi/Cầu đường</option>
                                                                <option value={28}>Giày da/Thuộc da</option>
                                                                <option value={55}>Khác</option>
                                                                <option value={30}>Kho vận/Vật tư/Thu mua</option>
                                                                <option value={58}>Khu chế xuất/Khu công nghiệp</option>
                                                                <option value={31}>Kiến trúc/Nội thất</option>
                                                                <option value={59}>Làm đẹp/Thể lực/Spa</option>
                                                                <option value={34}>Luật/Pháp lý</option>
                                                                <option value={36}>Môi trường/Xử lý chất thải</option>
                                                                <option value={37}>Mỹ phẩm/Thời trang/Trang sức</option>
                                                                <option value={38}>Ngân hàng/Chứng khoán/Đầu tư</option>
                                                                <option value={39}>Nghệ thuật/Điện ảnh</option>
                                                                <option value={56}>Ngoại ngữ</option>
                                                                <option value={40}>Nhân sự</option>
                                                                <option value={41}>Nông/Lâm/Ngư nghiệp</option>
                                                                <option value={64}>PG/PB/Lễ tân</option>
                                                                <option value={65}>Phát triển thị trường</option>
                                                                <option value={66}>Phục vụ/Tạp vụ/Giúp việc</option>
                                                                <option value={42}>Quan hệ đối ngoại</option>
                                                                <option value={44}>Quản lý điều hành</option>
                                                                <option value={45}>Quảng cáo/Marketing/PR</option>
                                                                <option value={46}>Sản xuất/Vận hành sản xuất</option>
                                                                <option value={60}>Tài xế/Lái xe/Giao nhận</option>
                                                                <option value={43}>Thẩm định/Giám định/Quản lý chất lượng</option>
                                                                <option value={48}>Thể dục/Thể thao</option>
                                                                <option value={49}>Thiết kế/Mỹ thuật</option>
                                                                <option value={50}>Thời vụ/Bán thời gian</option>
                                                                <option value={51}>Thực phẩm/DV ăn uống</option>
                                                                <option value={61}>Trang thiết bị công nghiệp</option>
                                                                <option value={62}>Trang thiết bị gia dụng</option>
                                                                <option value={63}>Trang thiết bị văn phòng</option>
                                                                <option value={11}>Tư vấn bảo hiểm</option>
                                                                <option value={52}>Xây dựng</option>
                                                                <option value={53}>Xuất-Nhập khẩu/Ngoại thương</option>
                                                                <option value={54}>Y tế</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Nơi làm việc</label>
                                                        <div className="col-sm-9">
                                                            <select type="text" className="form-control" id="jobProvince">
                                                                <option value={1}>Hồ Chí Minh</option>
                                                                <option value={2}>Hà Nội</option>
                                                                <option value={3}>An Giang</option>
                                                                <option value={4}>Bạc Liêu</option>
                                                                <option value={5}>Bà Rịa-Vũng Tàu</option>
                                                                <option value={6}>Bắc Cạn</option>
                                                                <option value={7}>Bắc Giang</option>
                                                                <option value={8}>Bắc Ninh</option>
                                                                <option value={9}>Bến Tre</option>
                                                                <option value={10}>Bình Dương</option>
                                                                <option value={11}>Bình Định</option>
                                                                <option value={12}>Bình Phước</option>
                                                                <option value={13}>Bình Thuận</option>
                                                                <option value={14}>Cao Bằng</option>
                                                                <option value={15}>Cà Mau</option>
                                                                <option value={16}>Cần Thơ</option>
                                                                <option value={17}>Đà Nẵng</option>
                                                                <option value={18}>Đắk Lắk</option>
                                                                <option value={19}>Đắk Nông</option>
                                                                <option value={20}>Điện Biên</option>
                                                                <option value={21}>Đồng Nai</option>
                                                                <option value={22}>Đồng Tháp</option>
                                                                <option value={23}>Gia Lai</option>
                                                                <option value={24}>Hà Giang</option>
                                                                <option value={25}>Hà Nam</option>
                                                                <option value={27}>Hà Tĩnh</option>
                                                                <option value={28}>Hải Dương</option>
                                                                <option value={29}>Hải Phòng</option>
                                                                <option value={30}>Hậu Giang</option>
                                                                <option value={31}>Hòa Bình</option>
                                                                <option value={32}>Hưng Yên</option>
                                                                <option value={33}>Khánh Hòa</option>
                                                                <option value={34}>Kiên Giang</option>
                                                                <option value={35}>Kon Tum</option>
                                                                <option value={36}>Lai Châu</option>
                                                                <option value={37}>Lạng Sơn</option>
                                                                <option value={38}>Lào Cai</option>
                                                                <option value={39}>Lâm Đồng</option>
                                                                <option value={40}>Long An</option>
                                                                <option value={41}>Nam Định</option>
                                                                <option value={42}>Nghệ An</option>
                                                                <option value={43}>Ninh Bình</option>
                                                                <option value={44}>Ninh Thuận</option>
                                                                <option value={45}>Phú Thọ</option>
                                                                <option value={46}>Phú Yên</option>
                                                                <option value={47}>Quảng Bình</option>
                                                                <option value={48}>Quảng Nam</option>
                                                                <option value={49}>Quảng Ngãi</option>
                                                                <option value={50}>Quảng Ninh</option>
                                                                <option value={51}>Quảng Trị</option>
                                                                <option value={52}>Sóc Trăng</option>
                                                                <option value={53}>Sơn La</option>
                                                                <option value={54}>Tây Ninh</option>
                                                                <option value={55}>Thái Bình</option>
                                                                <option value={56}>Thái Nguyên</option>
                                                                <option value={57}>Thanh Hóa</option>
                                                                <option value={58}>Thừa Thiên-Huế</option>
                                                                <option value={59}>Tiền Giang</option>
                                                                <option value={60}>Trà Vinh</option>
                                                                <option value={61}>Tuyên Quang</option>
                                                                <option value={62}>Vĩnh Long</option>
                                                                <option value={63}>Vĩnh Phúc</option>
                                                                <option value={64}>Yên Bái</option>
                                                                <option value={65}>Toàn quốc</option>
                                                                <option value={66}>Nước ngoài</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Hạn nộp hồ sơ<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                        <div className="col-sm-9">
                                                            <input type="date" className="form-control" placeholder="Nhập nơi làm việc" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card recuitment-card">
                                            <div className="card-header recuitment-card-header" id="headingTwo">
                                                <h2 className="mb-0">
                                                    <a className="btn btn-link btn-block text-left collapsed recuitment-header" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        Phúc lợi
                                                        <span id="clickc1_advance3" className="clicksd">
                                                            <i className="fa fa fa-angle-up" />
                                                        </span>
                                                    </a>
                                                </h2>
                                            </div>
                                            <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                <div className="card-body recuitment-body">
                                                    <div className="checkboxsec" id="checkboxSection">
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Chế độ bảo hiểm</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Chăm sóc sức khỏe</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Laptop</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Du lịch nước ngoài</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>phụ cấp thâm niên</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Du lịch</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Đào tạo</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Phụ cấp</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Đồng phục</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Nghỉ phép năm</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Chế độ thưởng</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Tăng lương</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Xe đưa đón</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Công tác phí</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>CLB thể thao</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Chế độ bảo hiểm</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Chế độ bảo hiểm</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Chế độ bảo hiểm</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Chế độ bảo hiểm</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Chế độ bảo hiểm</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Chế độ bảo hiểm</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Chế độ bảo hiểm</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Chế độ bảo hiểm</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Chế độ bảo hiểm</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Chế độ bảo hiểm</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Chế độ bảo hiểm</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Chế độ bảo hiểm</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card recuitment-card">
                                            <div className="card-header recuitment-card-header" id="headingThree">
                                                <h2 className="mb-0">
                                                    <a className="btn btn-link btn-block text-left collapsed recuitment-header" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        Thông tin liên hệ
                                                        <span id="clickc1_advance1" className="clicksd">
                                                            <i className="fa fa fa-angle-up" />
                                                        </span>
                                                    </a>
                                                </h2>
                                            </div>
                                            <div id="collapseThree" className="collapse show" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                <div className="card-body recuitment-body">
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Tên người liên hệ<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                        <div className="col-sm-9">
                                                            <input type="text" className="form-control" placeholder="Tên người liên hệ" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Email<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                        <div className="col-sm-9">
                                                            <input type="mail" className="form-control" placeholder="Địa chỉ email" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Địa chỉ<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                        <div className="col-sm-9">
                                                            <input type="text" className="form-control" placeholder="Nhập địa chỉ" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Điện thoại<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                        <div className="col-sm-9">
                                                            <input type="number" className="form-control" placeholder="Nhập số điện thoại" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card recuitment-card">
                                            <div className="card-header recuitment-card-header" id="heading4">
                                                <h2 className="mb-0">
                                                    <a className="btn btn-link btn-block text-left collapsed recuitment-header" type="button" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                                        Thông tin công ty
                                                        <span id="clickc1_advance4" className="clicksd">
                                                            <i className="fa fa fa-angle-up" />
                                                        </span>
                                                    </a>
                                                </h2>
                                            </div>
                                            <div id="collapse4" className="collapse show" aria-labelledby="heading4" data-parent="#collapse4">
                                                <div className="card-body recuitment-body">
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Tên công ty<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                        <div className="col-sm-9">
                                                            <input type="text" className="form-control" placeholder="Tên công ty" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Địa chỉ<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                        <div className="col-sm-9">
                                                            <input type="text" className="form-control" placeholder="Nhập địa chỉ" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Điện thoại<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                        <div className="col-sm-9">
                                                            <input type="number" className="form-control" placeholder="Nhập số điện thoại" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Tỉnh/ Thành phô<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                        <div className="col-sm-9">
                                                            <select type="text" className="form-control" id="jobProvince2">
                                                                <option value={1}>Hồ Chí Minh</option>
                                                                <option value={2}>Hà Nội</option>
                                                                <option value={3}>An Giang</option>
                                                                <option value={4}>Bạc Liêu</option>
                                                                <option value={5}>Bà Rịa-Vũng Tàu</option>
                                                                <option value={6}>Bắc Cạn</option>
                                                                <option value={7}>Bắc Giang</option>
                                                                <option value={8}>Bắc Ninh</option>
                                                                <option value={9}>Bến Tre</option>
                                                                <option value={10}>Bình Dương</option>
                                                                <option value={11}>Bình Định</option>
                                                                <option value={12}>Bình Phước</option>
                                                                <option value={13}>Bình Thuận</option>
                                                                <option value={14}>Cao Bằng</option>
                                                                <option value={15}>Cà Mau</option>
                                                                <option value={16}>Cần Thơ</option>
                                                                <option value={17}>Đà Nẵng</option>
                                                                <option value={18}>Đắk Lắk</option>
                                                                <option value={19}>Đắk Nông</option>
                                                                <option value={20}>Điện Biên</option>
                                                                <option value={21}>Đồng Nai</option>
                                                                <option value={22}>Đồng Tháp</option>
                                                                <option value={23}>Gia Lai</option>
                                                                <option value={24}>Hà Giang</option>
                                                                <option value={25}>Hà Nam</option>
                                                                <option value={27}>Hà Tĩnh</option>
                                                                <option value={28}>Hải Dương</option>
                                                                <option value={29}>Hải Phòng</option>
                                                                <option value={30}>Hậu Giang</option>
                                                                <option value={31}>Hòa Bình</option>
                                                                <option value={32}>Hưng Yên</option>
                                                                <option value={33}>Khánh Hòa</option>
                                                                <option value={34}>Kiên Giang</option>
                                                                <option value={35}>Kon Tum</option>
                                                                <option value={36}>Lai Châu</option>
                                                                <option value={37}>Lạng Sơn</option>
                                                                <option value={38}>Lào Cai</option>
                                                                <option value={39}>Lâm Đồng</option>
                                                                <option value={40}>Long An</option>
                                                                <option value={41}>Nam Định</option>
                                                                <option value={42}>Nghệ An</option>
                                                                <option value={43}>Ninh Bình</option>
                                                                <option value={44}>Ninh Thuận</option>
                                                                <option value={45}>Phú Thọ</option>
                                                                <option value={46}>Phú Yên</option>
                                                                <option value={47}>Quảng Bình</option>
                                                                <option value={48}>Quảng Nam</option>
                                                                <option value={49}>Quảng Ngãi</option>
                                                                <option value={50}>Quảng Ninh</option>
                                                                <option value={51}>Quảng Trị</option>
                                                                <option value={52}>Sóc Trăng</option>
                                                                <option value={53}>Sơn La</option>
                                                                <option value={54}>Tây Ninh</option>
                                                                <option value={55}>Thái Bình</option>
                                                                <option value={56}>Thái Nguyên</option>
                                                                <option value={57}>Thanh Hóa</option>
                                                                <option value={58}>Thừa Thiên-Huế</option>
                                                                <option value={59}>Tiền Giang</option>
                                                                <option value={60}>Trà Vinh</option>
                                                                <option value={61}>Tuyên Quang</option>
                                                                <option value={62}>Vĩnh Long</option>
                                                                <option value={63}>Vĩnh Phúc</option>
                                                                <option value={64}>Yên Bái</option>
                                                                <option value={65}>Toàn quốc</option>
                                                                <option value={66}>Nước ngoài</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Quy mô nhân sự<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                        <div className="col-sm-9">
                                                            <select type="text" className="form-control" id="jobEmployerScale">
                                                                <option value>Chọn quy mô</option>
                                                                <option selected="selected" value={1}>Dưới 20 người</option>
                                                                <option value={2}>20 - 150 người</option>
                                                                <option value={3}>150 - 300 người</option>
                                                                <option value={4}>Trên 300 người</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Quy mô nhân sự</label>
                                                        <div className="col-sm-9">
                                                            <select type="text" className="form-control" id="jobFieldsActivity">
                                                                <optgroup label="NÔNG NGHIỆP, LÂM NGHIỆP VÀ THUỶ SẢN">
                                                                    <option value={22}>Nông nghiệp và hoạt động dịch vụ có liên quan</option>
                                                                    <option value={23}>Lâm nghiệp và hoạt động dịch vụ có liên quan</option>
                                                                    <option value={24}>Khai thác, nuôi trồng thủy sản</option>
                                                                </optgroup>
                                                                <optgroup label="KHAI KHOÁNG">
                                                                    <option value={25}>Khai thác than cứng và than non</option>
                                                                    <option value={26}>Khai thác dầu thô và khí đốt tự nhiên</option>
                                                                    <option value={27}>Khai thác quặng kim loại</option>
                                                                    <option value={28}>Khai khoáng khác</option>
                                                                    <option value={29}>Hoạt động dịch vụ hỗ trợ khai khoáng</option>
                                                                </optgroup>
                                                                <optgroup label="CÔNG NGHIỆP CHẾ BIẾN, CHẾ TẠO">
                                                                    <option value={30}>Sản xuất, chế biến thực phẩm</option>
                                                                    <option value={31}>Sản xuất đồ uống</option>
                                                                    <option value={32}>Sản xuất sản phẩm thuốc lá</option>
                                                                    <option value={33}>Dệt</option>
                                                                    <option value={34}>Sản xuất trang phục</option>
                                                                    <option value={35}>Sản xuất da và các sản phẩm có liên quan</option>
                                                                    <option value={36}>Chế biến gỗ và sản xuất sản phẩm từ gỗ, tre, nứa (trừ giường, tủ, bàn, ghế); sản xuất sản phẩm từ rơm, rạ và vật liệu tết bện</option>
                                                                    <option value={37}>Sản xuất giấy và sản phẩm từ giấy</option>
                                                                    <option value={38}>In, sao chép bản ghi các loại</option>
                                                                    <option value={39}>Sản xuất than cốc, sản phẩm dầu mỏ tinh chế</option>
                                                                    <option value={40}>Sản xuất hoá chất và sản phẩm hoá chất</option>
                                                                    <option value={41}>Sản xuất thuốc, hoá dược và dược liệu</option>
                                                                    <option value={42}>Sản xuất sản phẩm từ cao su và plastic</option>
                                                                    <option value={43}>Sản xuất sản phẩm từ khoáng phi kim loại khác</option>
                                                                    <option value={44}>Sản xuất kim loại</option>
                                                                    <option value={45}>Sản xuất sản phẩm từ kim loại đúc sẵn (trừ máy móc, thiết bị)</option>
                                                                    <option value={46}>Sản xuất sản phẩm điện tử, máy vi tính và sản phẩm quang học</option>
                                                                    <option value={47}>Sản xuất thiết bị điện</option>
                                                                    <option value={48}>Sản xuất máy móc, thiết bị chưa được phân vào đâu</option>
                                                                    <option value={49}>Sản xuất ô tô và xe có động cơ khác</option>
                                                                    <option value={50}>Sản xuất phương tiện vận tải khác</option>
                                                                    <option value={51}>Sản xuất giường, tủ, bàn, ghế</option>
                                                                    <option value={52}>Công nghiệp chế biến, chế tạo khác</option>
                                                                    <option value={53}>Sửa chữa, bảo dưỡng và lắp đặt máy móc và thiết bị</option>
                                                                </optgroup>
                                                                <optgroup label="SẢN XUẤT VÀ PHÂN PHỐI ĐIỆN, KHÍ ĐỐT, NƯỚC NÓNG, HƠI NƯỚC VÀ ĐIỀU HOÀ KHÔNG KHÍ">
                                                                    <option value={54}>Sản xuất và phân phối điện, khí đốt, nước nóng, hơi nước và điều hoà không khí</option>
                                                                </optgroup>
                                                                <optgroup label="CUNG CẤP NƯỚC; HOẠT ĐỘNG QUẢN LÝ VÀ XỬ LÝ RÁC THẢI, NƯỚC THẢI">
                                                                    <option value={55}>Khai thác, xử lý và cung cấp nước</option>
                                                                    <option value={56}>Thoát nước và xử lý nước thải</option>
                                                                    <option value={57}>Hoạt động thu gom, xử lý và tiêu hủy rác thải; tái chế phế liệu</option>
                                                                    <option value={58}>Xử lý ô nhiễm và hoạt động quản lý chất thải khác</option>
                                                                </optgroup>
                                                                <optgroup label="XÂY DỰNG">
                                                                    <option value={59}>Xây dựng nhà các loại</option>
                                                                    <option value={60}>Xây dựng công trình kỹ thuật dân dụng</option>
                                                                    <option value={61}>Hoạt động xây dựng chuyên dụng</option>
                                                                </optgroup>
                                                                <optgroup label="BÁN BUÔN VÀ BÁN LẺ; SỬA CHỮA Ô TÔ, MÔ TÔ, XE MÁY VÀ XE CÓ ĐỘNG CƠ KHÁC">
                                                                    <option value={62}>Bán, sửa chữa ô tô, mô tô, xe máy và xe có động cơ khác</option>
                                                                    <option value={63}>Bán buôn (trừ ô tô, mô tô, xe máy và xe có động cơ khác)</option>
                                                                    <option value={64}>Bán lẻ (trừ ô tô, mô tô, xe máy và xe có động cơ khác)</option>
                                                                </optgroup>
                                                                <optgroup label="VẬN TẢI KHO BÃI">
                                                                    <option value={65}>Vận tải đường sắt, đường bộ và vận tải đường ống</option>
                                                                    <option value={66}>Vận tải đường thủy</option>
                                                                    <option value={67}>Vận tải hàng không</option>
                                                                    <option value={68}>Kho bãi và các hoạt động hỗ trợ cho vận tải</option>
                                                                    <option value={69}>Bưu chính và chuyển phát</option>
                                                                </optgroup>
                                                                <optgroup label="DỊCH VỤ LƯU TRÚ VÀ ĂN UỐNG">
                                                                    <option value={70}>Dịch vụ lưu trú</option>
                                                                    <option value={71}>Dịch vụ ăn uống</option>
                                                                </optgroup>
                                                                <optgroup label="THÔNG TIN VÀ TRUYỀN THÔNG">
                                                                    <option value={72}>Hoạt động xuất bản</option>
                                                                    <option value={73}>Hoạt động điện ảnh, sản xuất chương trình truyền hình, ghi âm và xuất bản âm nhạc</option>
                                                                    <option value={74}>Hoạt động phát thanh, truyền hình</option>
                                                                    <option value={75}>Viễn thông</option>
                                                                    <option value={76}>Lập trình máy vi tính, dịch vụ tư vấn và các hoạt động khác liên quan đến máy vi tính</option>
                                                                </optgroup>
                                                                <optgroup label="HOẠT ĐỘNG TÀI CHÍNH, NGÂN HÀNG VÀ BẢO HIỂM">
                                                                    <option value={82}>Hoạt động dịch vụ tài chính (trừ bảo hiểm và bảo hiểm xã hội)</option>
                                                                    <option value={83}>Bảo hiểm, tái bảo hiểm và bảo hiểm xã hội (trừ bảo đảm xã hội bắt buộc)</option>
                                                                    <option value={84}>Hoạt động tài chính khác</option>
                                                                </optgroup>
                                                                <optgroup label="HOẠT ĐỘNG KINH DOANH BẤT ĐỘNG SẢN">
                                                                    <option value={85}>Hoạt động kinh doanh bất động sản</option>
                                                                </optgroup>
                                                                <optgroup label="HOẠT ĐỘNG CHUYÊN MÔN, KHOA HỌC VÀ CÔNG NGHỆ">
                                                                    <option value={86}>Hoạt động pháp luật, kế toán và kiểm toán</option>
                                                                    <option value={87}>Hoạt động của trụ sở văn phòng; hoạt động tư vấn quản lý</option>
                                                                    <option value={88}>Hoạt động kiến trúc; kiểm tra và phân tích kỹ thuật</option>
                                                                    <option value={89}>Nghiên cứu khoa học và phát triển công nghệ</option>
                                                                    <option value={90}>Quảng cáo và nghiên cứu thị trường</option>
                                                                    <option value={91}>Hoạt động chuyên môn, khoa học và công nghệ khác</option>
                                                                    <option value={92}>Hoạt động thú y</option>
                                                                </optgroup>
                                                                <optgroup label="HOẠT ĐỘNG HÀNH CHÍNH VÀ DỊCH VỤ HỖ TRỢ">
                                                                    <option value={93}>Cho thuê máy móc, thiết bị (không kèm người điều khiển); cho thuê đồ dùng cá nhân và gia đình; cho thuê tài sản vô hình phi tài chính</option>
                                                                    <option value={94}>Hoạt động dịch vụ lao động và việc làm</option>
                                                                    <option value={95}>Hoạt động của các đại lý du lịch, kinh doanh tua du lịch và các dịch vụ hỗ trợ, liên quan đến quảng bá và tổ chức tua du lịch</option>
                                                                    <option value={96}>Hoạt động điều tra bảo đảm an toàn</option>
                                                                    <option value={97}>Hoạt động dịch vụ vệ sinh nhà cửa, công trình và cảnh quan</option>
                                                                    <option value={98}>Hoạt động hành chính, hỗ trợ văn phòng và các hoạt động hỗ trợ kinh doanh khác</option>
                                                                </optgroup>
                                                                <optgroup label="GIÁO DỤC VÀ ĐÀO TẠO">
                                                                    <option value={99}>Giáo dục và đào tạo</option>
                                                                </optgroup>
                                                                <optgroup label="Y TẾ VÀ HOẠT ĐỘNG TRỢ GIÚP XÃ HỘI">
                                                                    <option value={100}>Hoạt động y tế</option>
                                                                    <option value={101}>Hoạt động chăm sóc, điều dưỡng tập trung</option>
                                                                    <option value={102}>Hoạt động trợ giúp xã hội không tập trung</option>
                                                                </optgroup>
                                                                <optgroup label="NGHỆ THUẬT, VUI CHƠI VÀ GIẢI TRÍ">
                                                                    <option value={103}>Hoạt động sáng tác, nghệ thuật và giải trí</option>
                                                                    <option value={104}>Hoạt động của thư viện, lưu trữ, bảo tàng và các hoạt động văn hóa khác</option>
                                                                    <option value={105}>Hoạt động xổ số, cá cược và đánh bạc</option>
                                                                    <option value={106}>Hoạt động thể thao, vui chơi và giải trí</option>
                                                                </optgroup>
                                                                <optgroup label="HOẠT ĐỘNG DỊCH VỤ KHÁC">
                                                                    <option value={107}>Hoạt động của các hiệp hội, tổ chức khác</option>
                                                                    <option value={108}>Sửa chữa máy vi tính, đồ dùng cá nhân và gia đình</option>
                                                                    <option value={109}>Hoạt động dịch vụ phục vụ cá nhân khác</option>
                                                                </optgroup>
                                                                <optgroup label="HOẠT ĐỘNG LÀM THUÊ CÁC CÔNG VIỆC TRONG CÁC HỘ GIA ĐÌNH, SẢN XUẤT SẢN PHẨM VẬT CHẤT VÀ DỊCH VỤ TỰ TIÊU DÙNG CỦA HỘ GIA ĐÌNH">
                                                                    <option value={110}>Hoạt động làm thuê công việc gia đình trong các hộ gia đình</option>
                                                                    <option value={111}>Hoạt động sản xuất sản phẩm vật chất và dịch vụ tự tiêu dùng của hộ gia đình</option>
                                                                </optgroup>
                                                                <optgroup label="HOẠT ĐỘNG CỦA CÁC TỔ CHỨC VÀ CƠ QUAN QUỐC TẾ">
                                                                    <option value={112}>Hoạt động của các tổ chức và cơ quan quốc tế</option>
                                                                </optgroup>
                                                                <optgroup label>
                                                                </optgroup></select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Sơ lược về công ty<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                        <div className="col-sm-9">
                                                            <textarea type="text" className="form-control" placeholder="Sơ lược về công ty" rows={5} defaultValue={""} />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Logo</label>
                                                        <div className="col-sm-9 ">
                                                            <div id="drop-area">
                                                                <input type="file" id="fileElem" multiple accept="image/*" onchange="handleFiles(this.files)" />
                                                                <label style={{ cursor: 'pointer' }} htmlFor="fileElem">Tải ảnh lên hoặc kéo thả vào đây</label>
                                                                <progress id="progress-bar" max={100} value={0} className="d-none" />
                                                                <div id="gallery" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Website</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" className="form-control" placeholder="Website" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rec-submit">
                                        <button type="submit" className="btn-submit-recuitment" name>
                                            <i className="fa fa-floppy-o pr-2" />Lưu Tin
                                        </button>
                                    </div>
                                </form>
                            </div>
                            {/* Side bar */}
                            <div className="col-md-4 col-sm-12 col-12">
                                <div className="recuiter-info">
                                    <div className="recuiter-info-avt">
                                        <img src="assets/home/img/icon_avatar.jpg" />
                                    </div>
                                    <div className="clearfix list-rec">
                                        <h4>NESTLE Inc.</h4>
                                        <ul>
                                            <li><a href="#">Việc làm đang đăng <strong>(0)</strong></a></li>
                                            <li><a href="#">Follower <strong>(450)</strong></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="block-sidebar" style={{ marginBottom: 20 }}>
                                    <header>
                                        <h3 className="title-sidebar font-roboto bg-primary">
                                            Trung tâm quản lý
                                        </h3>
                                    </header>
                                    <div className="content-sidebar menu-trung-tam-ql menu-ql-employer">
                                        <h3 className="menu-ql-ntv">
                                            Quản lý tài khoản
                                        </h3>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    Tài khoản
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Giấy phép kinh doanh
                                                </a>
                                            </li>
                                        </ul>
                                        <h3 className="menu-ql-ntv">
                                            Quản lý dịch vụ
                                        </h3>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    Lịch sử dịch vụ
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    Báo giá
                                                </a>
                                            </li>
                                        </ul>
                                        <h3 className="menu-ql-ntv">
                                            Quản lý tin tuyển dụng
                                        </h3>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    Đăng tin tuyển dụng
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Danh sách tin tuyển dụng
                                                </a>
                                            </li>
                                        </ul>
                                        <h3 className="menu-ql-ntv">
                                            Quản lý ứng viên
                                        </h3>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    Tìm kiếm hồ sơ
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Hồ sơ đã lưu
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Hồ sơ đã ứng tuyển
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" title="Thông báo hồ sơ phù hợp">
                                                    Thông báo hồ sơ phù hợp
                                                </a>
                                            </li>
                                        </ul>
                                        <h3 className="menu-ql-ntv">
                                            Hỗ trợ và thông báo
                                        </h3>
                                        <ul>
                                            <li>
                                                <a href="#" title="Gửi yêu cầu đến ban quản trị">
                                                    Gửi yêu cầu đến ban quản trị
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" title="Ban quản trị thông báo">
                                                    Ban quản trị thông báo
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" title="Hướng dẫn thao tác">
                                                    Hướng dẫn thao tác
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    <span>Thông tin thanh toán</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a target="_blank" href="#">
                                                    <span>Cổng tra cứu lương</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a target="_blank" href="#">
                                                    <span> Cẩm nang tuyển dụng</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li className="logout">
                                                <a href="#" title="Đăng xuất">
                                                    Đăng xuất
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
