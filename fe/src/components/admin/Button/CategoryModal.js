import React, { useState } from "react";

const CategoryModal = ({ AddCategory }) => {
  const [name, setName] = useState("");

  const ToggleModal = async () => {
    const category = {
      name
    };
    await AddCategory(category);
    CloseModal();
  };

  const CloseModal = () => {
    setName("");
  };

  const ModalBody = (
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Job Type Name
        </label>
        <input
          type="text"
          class="form-control"
          aria-describedby="emailHelp"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </form>
  );

  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#CategoryModal"
      >
        Add Category <span class="mdi mdi-plus"></span>
      </button>

      <div
        class="modal fade text-light"
        id="CategoryModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-light" id="exampleModalLabel">
                Add Category
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div class="modal-body">{ModalBody}</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={CloseModal}
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
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
