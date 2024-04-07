import ModalBtn from "../../ModalBtn";
import CategoryForm from "../../modal body/CategoriesForm";

const UserPanel = () => {
  const TestBtnHandle = () => {
    alert("Testing Add User Btn!");
  };

  return (
    <>
      <div class="row ">
        <div class="col-12 grid-margin">
          <div class="card">
            <div class="card-body">
              <div className="card-title">
                <div className="row">
                  <div class="col-10">
                    <h4 className="text-light">User Manager</h4>
                  </div>
                  <div class="col">
                    <ModalBtn
                      BtnText="Add new"
                      ModalSaveFunction={TestBtnHandle}
                      ModalBody={<CategoryForm />}
                      ModalTitle="Adding User"
                    />
                  </div>
                </div>
              </div>
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>
                        <div class="form-check form-check-muted m-0">
                          <label class="form-check-label">
                            <input type="checkbox" class="form-check-input" />
                          </label>
                        </div>
                      </th>
                      <th> Categories ID </th>
                      <th> Categories Name </th>
                      <th> Action </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="form-check form-check-muted m-0">
                          <label class="form-check-label">
                            <input type="checkbox" class="form-check-input" />
                          </label>
                        </div>
                      </td>
                      <td>
                        <img src="assets/images/faces/face1.jpg" alt="image" />
                        <span class="pl-2">Henry Klein</span>
                      </td>
                      <td> Dashboard </td>
                      <td>
                        <div class="badge badge-outline-success">Approved</div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div class="form-check form-check-muted m-0">
                          <label class="form-check-label">
                            <input type="checkbox" class="form-check-input" />
                          </label>
                        </div>
                      </td>
                      <td>
                        <img src="assets/images/faces/face2.jpg" alt="image" />
                        <span class="pl-2">Estella Bryan</span>
                      </td>
                      <td> 02312 </td>
                      <td>
                        <div class="badge badge-outline-warning">Pending</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="form-check form-check-muted m-0">
                          <label class="form-check-label">
                            <input type="checkbox" class="form-check-input" />
                          </label>
                        </div>
                      </td>
                      <td>
                        <img src="assets/images/faces/face5.jpg" alt="image" />
                        <span class="pl-2">Lucy Abbott</span>
                      </td>
                      <td> 02312 </td>
                      <td>
                        <div class="badge badge-outline-danger">Rejected</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPanel;
