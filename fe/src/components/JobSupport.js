const JobSupport = () => {
  return (
    <div class="container-fluid job-support-wrapper">
      <div class="container-fluid job-support-wrap">
        <div class="container job-support">
          <div class="row">
            <div class="col-md-6 col-sm-12 col-12">
              <ul class="spp-list">
                <li>
                  <span>
                    <i class="fa fa-question-circle pr-2 icsp"></i>Hỗ trợ nhà
                    tuyển dụng:
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fa fa-phone pr-2 icsp"></i>0123.456.789
                  </span>
                </li>
              </ul>
            </div>
            <div class="col-md-6 col-sm-12 col-12">
              <div class="newsletter">
                <span class="txt6">Đăng ký nhận bản tin việc làm</span>
                <div class="input-group frm1">
                  <input
                    type="text"
                    placeholder="Nhập email của bạn"
                    class="newsletter-email form-control"
                  />
                  <a href="#" class="input-group-addon">
                    <i class="fa fa-lg fa-envelope-o colorb"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSupport;
