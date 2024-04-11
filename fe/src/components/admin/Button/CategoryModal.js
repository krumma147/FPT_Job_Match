import React, { useState } from "react";

const CategoryModal = ({ AddCategory }) => {
  const [name, setName] = useState("");

  const ToggleModal = async () => {
    const category = {
      name,
    };
    await AddCategory(category);
    CloseModal();
  };

  const CloseModal = () => {
    setName("");
  };

  const ModalBody = (
    <div className="bg-light rounded h-100 p-4">
      <h6 className="mb-4">Job Type Name</h6>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Name of the category"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#CategoryModal"
      >
        Add Category <span className="mdi mdi-plus"></span>
      </button>

      <div
        className="modal fade"
        id="CategoryModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered text-dark">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Category
              </h5>
              <button
                type="button"
                className="btn-close"
                data-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">{ModalBody}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={CloseModal}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={ToggleModal}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryModal;
