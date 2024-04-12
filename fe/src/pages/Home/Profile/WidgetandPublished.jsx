import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import { getUserId } from '../../Auth/Auth';

const toggle2FA = async (userId, enable) => {
    try {
        const response = await axios.put(`https://localhost:7282/api/Home/Check2FA/${userId}`, { enable });
        Swal.fire({
            title: 'Success!',
            text: 'Two-factor authentication has been ' + (enable ? 'enabled' : 'disabled') + ' for your account.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
        return response.data;
    } catch (error) {
        console.error('There was an error!', error.response.data);
        Swal.fire({
            title: 'Error!',
            text: 'There was an error!',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return null;
    }
}
export default function WidgetandPublished() {
    const [is2FAEnabled, setIs2FAEnabled] = useState(false); // Assume 2FA is disabled initially
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const fetchUserId = async () => {
            const id = await getUserId();
            console.log('userId:', id);
            setUserId(id);
        };

        fetchUserId();
    }, []);

    const handleToggle2FA = async (event) => {
        event.preventDefault();
        // Cập nhật trạng thái is2FAEnabled
        setIs2FAEnabled(!is2FAEnabled);
        await toggle2FA(userId, is2FAEnabled);
    }
    return (
        <div>
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
                            <form className="employee-form">
                                <div className="accordion" id="accordionExample">
                                    <div className="card recuitment-card">
                                        <div className="card-header recuitment-card-header" id="headingOne">
                                            <h2 className="mb-0">
                                                <a className="btn btn-link btn-block text-left recuitment-header" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Thông tin tài khoản
                                                    <span id="clickc1_advance2" className="clicksd">
                                                        <i className="fa fa fa-angle-up" />
                                                    </span>
                                                </a>
                                            </h2>
                                        </div>
                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                            <div className="card-body recuitment-body row">
                                                <div className="col-md-3">
                                                    <div className="avatar-upload">
                                                        <div className="avatar-edit">
                                                            <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" />
                                                            <label htmlFor="imageUpload" />

                                                        </div>
                                                        <div className="avatar-preview">
                                                            <div id="imagePreview" style={{ backgroundImage: 'url(https://i.pravatar.cc/500?img=7)' }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button onClick={handleToggle2FA}>
                                                        {is2FAEnabled ? 'Turn off 2FA' : 'Turn on 2FA'}
                                                    </button>
                                                </div>
                                                <div className="col-md-9">
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Họ tên<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                        <div className="col-sm-9">
                                                            <input type="text" className="form-control" placeholder="Nhập họ và tên" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Số điện thoại</label>
                                                        <div className="col-sm-9">
                                                            <input type="number" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Giới tính<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                        <div className="col-sm-9">
                                                            <select type="text" className="form-control" id="jobGender">
                                                                <option value>Chọn giới tính</option>
                                                                <option value>Nam</option>
                                                                <option value>Nữ</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Ngày sinh<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                        <div className="col-sm-9 row">
                                                            <div className="col-md-4 pr-0">
                                                                <select type="text" className="form-control d-inline-block w-25" id="empDayOb">
                                                                    <option value={0}>Ngày</option>
                                                                    <option value={1}>1</option>
                                                                    <option value={2}>2</option>
                                                                    <option value={3}>3</option>
                                                                    <option value={4}>4</option>
                                                                    <option value={5}>5</option>
                                                                    <option value={6}>6</option>
                                                                    <option value={7}>7</option>
                                                                    <option value={8}>8</option>
                                                                    <option value={9}>9</option>
                                                                    <option value={10}>10</option>
                                                                    <option value={11}>11</option>
                                                                    <option value={12}>12</option>
                                                                    <option value={13}>13</option>
                                                                    <option value={14}>14</option>
                                                                    <option value={15}>15</option>
                                                                    <option value={16}>16</option>
                                                                    <option value={17}>17</option>
                                                                    <option value={18}>18</option>
                                                                    <option value={19}>19</option>
                                                                    <option value={20}>20</option>
                                                                    <option value={21}>21</option>
                                                                    <option value={22}>22</option>
                                                                    <option value={23}>23</option>
                                                                    <option value={24}>24</option>
                                                                    <option value={25}>25</option>
                                                                    <option value={26}>26</option>
                                                                    <option value={27}>27</option>
                                                                    <option value={28}>28</option>
                                                                    <option value={29}>29</option>
                                                                    <option value={30}>30</option>
                                                                    <option value={31}>31</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-md-4 pr-0">
                                                                <select type="text" className="form-control d-inline-block w-25" id="empMonthOb">
                                                                    <option selected="selected" value={0}>Tháng</option>
                                                                    <option value={1}>1</option>
                                                                    <option value={2}>2</option>
                                                                    <option value={3}>3</option>
                                                                    <option value={4}>4</option>
                                                                    <option value={5}>5</option>
                                                                    <option value={6}>6</option>
                                                                    <option value={7}>7</option>
                                                                    <option value={8}>8</option>
                                                                    <option value={9}>9</option>
                                                                    <option value={10}>10</option>
                                                                    <option value={11}>11</option>
                                                                    <option value={12}>12</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-md-4 pr-0">
                                                                <select type="text" className="form-control d-inline-block w-25" id="empYearOb">
                                                                    <option selected="selected" value={0}>Năm</option>
                                                                    <option value={2020}>2020</option>
                                                                    <option value={2019}>2019</option>
                                                                    <option value={2018}>2018</option>
                                                                    <option value={2017}>2017</option>
                                                                    <option value={2016}>2016</option>
                                                                    <option value={2015}>2015</option>
                                                                    <option value={2014}>2014</option>
                                                                    <option value={2013}>2013</option>
                                                                    <option value={2012}>2012</option>
                                                                    <option value={2011}>2011</option>
                                                                    <option value={2010}>2010</option>
                                                                    <option value={2009}>2009</option>
                                                                    <option value={2008}>2008</option>
                                                                    <option value={2007}>2007</option>
                                                                    <option value={2006}>2006</option>
                                                                    <option value={2005}>2005</option>
                                                                    <option value={2004}>2004</option>
                                                                    <option value={2003}>2003</option>
                                                                    <option value={2002}>2002</option>
                                                                    <option value={2001}>2001</option>
                                                                    <option value={2000}>2000</option>
                                                                    <option value={1999}>1999</option>
                                                                    <option value={1998}>1998</option>
                                                                    <option value={1997}>1997</option>
                                                                    <option value={1996}>1996</option>
                                                                    <option value={1995}>1995</option>
                                                                    <option value={1994}>1994</option>
                                                                    <option value={1993}>1993</option>
                                                                    <option value={1992}>1992</option>
                                                                    <option value={1991}>1991</option>
                                                                    <option value={1990}>1990</option>
                                                                    <option value={1989}>1989</option>
                                                                    <option value={1988}>1988</option>
                                                                    <option value={1987}>1987</option>
                                                                    <option value={1986}>1986</option>
                                                                    <option value={1985}>1985</option>
                                                                    <option value={1984}>1984</option>
                                                                    <option value={1983}>1983</option>
                                                                    <option value={1982}>1982</option>
                                                                    <option value={1981}>1981</option>
                                                                    <option value={1980}>1980</option>
                                                                    <option value={1979}>1979</option>
                                                                    <option value={1978}>1978</option>
                                                                    <option value={1977}>1977</option>
                                                                    <option value={1976}>1976</option>
                                                                    <option value={1975}>1975</option>
                                                                    <option value={1974}>1974</option>
                                                                    <option value={1973}>1973</option>
                                                                    <option value={1972}>1972</option>
                                                                    <option value={1971}>1971</option>
                                                                    <option value={1970}>1970</option>
                                                                    <option value={1969}>1969</option>
                                                                    <option value={1968}>1968</option>
                                                                    <option value={1967}>1967</option>
                                                                    <option value={1966}>1966</option>
                                                                    <option value={1965}>1965</option>
                                                                    <option value={1964}>1964</option>
                                                                    <option value={1963}>1963</option>
                                                                    <option value={1962}>1962</option>
                                                                    <option value={1961}>1961</option>
                                                                    <option value={1960}>1960</option>
                                                                    <option value={1959}>1959</option>
                                                                    <option value={1958}>1958</option>
                                                                    <option value={1957}>1957</option>
                                                                    <option value={1956}>1956</option>
                                                                    <option value={1955}>1955</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Hôn nhân<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                        <div className="col-sm-9">
                                                            <select type="text" className="form-control" id="empStatus">
                                                                <option value>Chọn tình trạng hôn nhân</option>
                                                                <option value>Độc thân</option>
                                                                <option value>Đã kết hôn</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Tỉnh/ Thành phố<span style={{ color: 'red' }} className="pl-2">*</span></label>
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
                                                        <label className="col-sm-3 col-form-label text-right label">Chỗ ở hiện tại<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                        <div className="col-sm-9">
                                                            <input type="text" className="form-control" placeholder="Nhập địa chỉ" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card recuitment-card">
                                        <div className="card-header recuitment-card-header" id="headingTwo">
                                            <h2 className="mb-0">
                                                <a className="btn btn-link btn-block text-left collapsed recuitment-header" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    File đính kèm
                                                    <span id="clickc1_advance3" className="clicksd">
                                                        <i className="fa fa fa-angle-up" />
                                                    </span>
                                                </a>
                                            </h2>
                                        </div>
                                        <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                            <div className="card-body recuitment-body">
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label text-right label">Chọn hồ sơ đính kèm<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                    <div className="col-sm-9">
                                                        <input type="file" id="file" className="recuitment-card-acttachment" />
                                                        <label htmlFor="file" className="btn-1"><i className="fa fa-paperclip pr-2" />Chọn file</label>
                                                        {/* jQuery lấy tên file */}
                                                        <p className="output-file">
                                                            <span id="previewFileName" />
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card recuitment-card">
                                        <div className="card-header recuitment-card-header" id="headingThree">
                                            <h2 className="mb-0">
                                                <a className="btn btn-link btn-block text-left collapsed recuitment-header" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Thông tin chung
                                                    <span id="clickc1_advance1" className="clicksd">
                                                        <i className="fa fa fa-angle-up" />
                                                    </span>
                                                </a>
                                            </h2>
                                        </div>
                                        <div id="collapseThree" className="collapse show" aria-labelledby="headingThree" data-parent="#accordionExample">
                                            <div className="card-body recuitment-body">
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label text-right label">Tiêu đề hồ sơ<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                    <div className="col-sm-9">
                                                        <input type="text" className="form-control" placeholder="Nhập tiêu đề" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label text-right label">Trình độ cao nhất<span style={{ color: 'red' }} className="pl-2">*</span></label>
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
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label text-right label">Số năm kinh nghiệm<span style={{ color: 'red' }} className="pl-2">*</span></label>
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
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label text-right label">Cấp bậc hiện tại<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                    <div className="col-sm-9">
                                                        <select type="text" className="form-control" id="empLevel">
                                                            <option selected="selected" value={100}>Chọn cấp bậc</option>
                                                            <option value={0}>Nhân viên</option>
                                                            <option value={7}>CTV</option>
                                                            <option value={8}>Trưởng nhóm</option>
                                                            <option value={9}>Chuyên gia</option>
                                                            <option value={3}>Trưởng phó phòng</option>
                                                            <option value={5}>Quản lý cấp cao</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label text-right label">Cấp bậc mong muốn<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                    <div className="col-sm-9">
                                                        <select type="text" className="form-control" id="empWishLevel">
                                                            <option selected="selected" value={100}>Chọn cấp bậc</option>
                                                            <option value={0}>Nhân viên</option>
                                                            <option value={7}>CTV</option>
                                                            <option value={8}>Trưởng nhóm</option>
                                                            <option value={9}>Chuyên gia</option>
                                                            <option value={3}>Trưởng phó phòng</option>
                                                            <option value={5}>Quản lý cấp cao</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label text-right label">Công việc mong muốn<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                    <div className="col-sm-9">
                                                        <select type="text" className="form-control" id="empWishJob">
                                                            <option value={10}>Bán hàng</option>
                                                            <option value={47}>Tài chính/Kế toán/Kiểm toán</option>
                                                            <option value={29}>Hành chính/Thư ký/Trợ lý</option>
                                                            <option value={32}>Kinh doanh</option>
                                                            <option value={21}>Chăm sóc khách hàng</option>
                                                            <option value={50}>Thời vụ/Bán thời gian</option>
                                                            <option value={22}>Điện/Điện tử/Điện lạnh</option>
                                                            <option value={40}>Nhân sự</option>
                                                            <option value={38}>Ngân hàng/Chứng khoán/Đầu tư</option>
                                                            <option value={12}>Báo chí/Biên tập viên</option>
                                                            <option value={20}>Bảo vệ/Vệ sĩ/An ninh</option>
                                                            <option value={13}>Bất động sản</option>
                                                            <option value={14}>Biên dịch/Phiên dịch</option>
                                                            <option value={15}>Bưu chính viễn thông</option>
                                                            <option value={16}>Cơ khí/Kĩ thuật ứng dụng</option>
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
                                                            <option value={33}>Lao động phổ thông</option>
                                                            <option value={34}>Luật/Pháp lý</option>
                                                            <option value={36}>Môi trường/Xử lý chất thải</option>
                                                            <option value={37}>Mỹ phẩm/Thời trang/Trang sức</option>
                                                            <option value={39}>Nghệ thuật/Điện ảnh</option>
                                                            <option value={56}>Ngoại ngữ</option>
                                                            <option value={41}>Nông/Lâm/Ngư nghiệp</option>
                                                            <option value={64}>PG/PB/Lễ tân</option>
                                                            <option value={65}>Phát triển thị trường</option>
                                                            <option value={66}>Phục vụ/Tạp vụ/Giúp việc</option>
                                                            <option value={42}>Quan hệ đối ngoại</option>
                                                            <option value={44}>Quản lý điều hành</option>
                                                            <option value={45}>Quảng cáo/Marketing/PR</option>
                                                            <option value={46}>Sản xuất/Vận hành sản xuất</option>
                                                            <option value={35}>Sinh viên/Mới tốt nghiệp/Thực tập</option>
                                                            <option value={60}>Tài xế/Lái xe/Giao nhận</option>
                                                            <option value={43}>Thẩm định/Giám định/Quản lý chất lượng</option>
                                                            <option value={48}>Thể dục/Thể thao</option>
                                                            <option value={49}>Thiết kế/Mỹ thuật</option>
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
                                                    <label className="col-sm-3 col-form-label text-right label">Mong muốn mức lương tối thiểu (VNĐ/ tháng)<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                    <div className="col-sm-9">
                                                        <input type="number" className="form-control" placeholder="Nhập số" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label text-right label">Nơi làm việc mong muốn<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                    <div className="col-sm-9">
                                                        <select type="text" className="form-control" id="empWishPlace">
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rec-submit">
                                    <button type="submit" className="btn-submit-recuitment mb-3 ml-3" name>
                                        <i className="fa fa-floppy-o pr-2" />Lưu Hồ Sơ
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
                                    <h4>Hồ Quốc Hiếu</h4>
                                    <ul>
                                        <li><a href="#">Nhà tuyển dụng của tôi <strong>(0)</strong></a></li>
                                        <li><a href="#">Việc làm đã lưu <strong>(450)</strong></a></li>
                                        <li><a href="#">Việc làm đã nộp <strong>(1150)</strong></a></li>
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
                                        Hồ sơ của bạn
                                    </h3>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                Quản lý Tài khoản
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Quản lý hồ sơ
                                            </a>
                                        </li>
                                    </ul>
                                    <h3 className="menu-ql-ntv">
                                        Việc làm của bạn
                                    </h3>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                Việc làm đã lưu
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                Việc làm dã ứng tuyển
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

    )
}
