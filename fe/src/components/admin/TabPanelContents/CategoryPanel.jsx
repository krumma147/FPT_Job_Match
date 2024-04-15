import React, { useEffect } from "react";
import CategoryModal from "../Button/CategoryModal";
import EditCategoryModal from "../Button/EditCategoryModal";
import Icon from "@mdi/react";
import { mdiTrashCan } from "@mdi/js";
import connection from '../../../Service/signalRConfig';
import { toast } from 'react-toastify';
import CustomToastContainer from "../Notification/CustomToastContainer";
const CategoryPanel = ({
  categories,
  AddCategory,
  ModifyCategory,
  RemoveCategory,
}) => {
  //notifications
  // useEffect(() => {
  //   connection.on('createdCategory', (newCategory) => {
  //   console.log('createdCategory event received'); // Thêm log ở đây
  //   AddCategory(newCategory);
  //   toast.success(`New Category registered: ${newCategory.name}`);
  // });

  //   connection.on('updatedCategory', (updatedCategoryId) => {
  //     ModifyCategory(updatedCategoryId);
  //     toast.info(`category updated: ${updatedCategoryId.name}`);
  //   });

  //   connection.on('deletedCategory', (deletedCategoryId) => {
  //     RemoveCategory(deletedCategoryId);
  //     toast.info(`Category deleted: ${deletedCategoryId.name}`);
  //   });

  //   return () => {
  //     connection.off('createdCategory');
  //     connection.off('updatedCategory')
  //     connection.off('deletedCategory');
  //   };
  // }, []);

  const HandleDelete = (e, id) => {
    e.preventDefault();
    const cf = window.confirm("Are you sure you want to delete");
    if (cf) {
      RemoveCategory(id);
    }
  };

  return (
    <>
      <CustomToastContainer />
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
                        <Icon path={mdiTrashCan} size={1} /> Delete
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
