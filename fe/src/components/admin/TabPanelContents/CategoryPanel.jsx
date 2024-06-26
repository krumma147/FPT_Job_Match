import React, { useEffect } from "react";
import CategoryModal from "../Button/CategoryModal";
import EditCategoryModal from "../Button/EditCategoryModal";
import Icon from "@mdi/react";
import { mdiTrashCan } from "@mdi/js";

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
      <div className="bg-grayE8 rounded h-100 p-4 m-4">
        <div className="row mb-4">
          <h4 className="col">Category Manager</h4>
          <div className="col-2">
            <CategoryModal AddCategory={AddCategory} />
          </div>
        </div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Job Category Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {categories?.length > 0 ? null : "There are no category!"}
              {categories?.map((cat, index) => (
                <tr key={index}>
                  <td className="col-md-1">
                    <span>{cat.id}</span>
                  </td>
                  <td className="col-md-8">{cat.name}</td>
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
                        <Icon path={mdiTrashCan} size={1} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CategoryPanel;
