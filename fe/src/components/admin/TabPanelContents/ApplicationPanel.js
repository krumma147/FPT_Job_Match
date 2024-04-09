import React, { Component } from "react";

const ApplicationPanel = () => {
  const TestBtnHandle = () => {
    alert("Testing Adding Application Btn!");
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
                    <h4 className="text-light">Applications Manager</h4>
                  </div>
                  <div class="col">
                    {/* <ModalBtn
                      BtnText="Add new"
                      ModalSaveFunction={TestBtnHandle}
                      ModalBody={<CategoryForm />}
                      ModalTitle="Adding Application"
                    /> */}
                  </div>
                </div>
              </div>
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th className="col-1"> ID </th>
                      <th className="col-1"> Status </th>
                      <th className="col"> Resume </th>
                      <th className="col-1"> JobId </th>
                      <th className="col-1"> UserId </th>
                      <th className="col-3"> Apply Day </th>
                      <th className="col-2"> Action </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
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

export default ApplicationPanel;
