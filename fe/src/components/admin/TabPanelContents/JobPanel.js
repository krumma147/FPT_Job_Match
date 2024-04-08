import ModalBtn from "../../ModalBtn";
import JobModal from "../Button/JobModal";

const JobPanel = ({ jobs }) => {
  const TestBtnHandle = () => {
    alert("Testing Adding Job Btn!");
  };

  return (
    <>
      <div className="row ">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <div className="row">
                  <div className="col-10">
                    <h4 className="text-light">Jobs Manager</h4>
                  </div>
                  <div className="col">
                    {/* <CategoryModal AddCategory={AddCategory} /> */}
                    <JobModal  />
                  </div>
                </div>
              </div>
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      {/* Add job detail here */}
                      <th className="col-md-3"> Job Title </th>
                      {/* <th className="col-md"> Description </th> */}
                      <th className="col-md-2"> SalaryRange </th>
                      <th className="col-md-1 col-sm-0"> Experience_required </th>
                      <th className="col-md-1 col-sm-0"> Education_required </th>
                      <th className="col-md-1 col-sm-0"> status </th>
                      <th className="col-md-2"> Category </th>
                      <th className="col-md"> Action </th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs?.length > 0 ? null : "There are no job!"}
                    {jobs?.map((job) => (
                      <tr>
                        <td>
                          <span>{job.id}</span>
                        </td>
                        <td>{job.name}</td>
                        <td>
                          <div className="d-flex">
                            {/* <EditCategoryModal
                              EditCategory={ModifyCategory}
                              Data={cat}
                            /> */}
                            <button
                              type="button"
                              className="btn btn-info"
                              //onClick={(e) => HandleDelete(e, cat.id)}
                            ></button>
                            <button
                              type="button"
                              className="btn btn-danger"
                              // onClick={(e) => HandleDelete(e, cat.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
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

export default JobPanel;
