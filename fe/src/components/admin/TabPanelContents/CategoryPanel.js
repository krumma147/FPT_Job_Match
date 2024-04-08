import React from "react";
import CategoryModal from "../Button/CategoryModal";
import EditCategoryModal from "../Button/EditCategoryModal";

const CategoryPanel = ({
  categories,
  AddCategory,
  ModifyCategory,
  RemoveCategory,
}) => {
  const HandleDelete = (e, id) => {
    e.preventDefault();
    const cf = window.confirm("Are you sure you want to delete");
    if (cf) {
      RemoveCategory(id);
    }
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
                    <h4 className="text-light">Categories Manager</h4>
                  </div>
                  <div className="col">
                    <CategoryModal AddCategory={AddCategory} />
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="col-md-2"> Categoy ID </th>
                      <th className="col-md"> Category Name </th>
                      <th className="col-md-2"> Action </th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories?.length > 0 ? null : "There are no category!"}
                    {categories?.map((cat) => (
                      <tr>
                        <td>
                          <span className="col">{cat.id}</span>
                        </td>
                        <td className="col">{cat.name}</td>
                        <td>
                          <div className="d-flex">
                            <EditCategoryModal
                              EditCategory={ModifyCategory}
                              Data={cat}
                            />
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={(e) => HandleDelete(e, cat.id)}
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

export default CategoryPanel;
