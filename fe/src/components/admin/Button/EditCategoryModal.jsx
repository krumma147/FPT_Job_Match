import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiFileEdit } from "@mdi/js";

const EditCategoryModal = ({ EditCategory, Data }) => {
  const [name, setName] = useState(Data?.name);

  const ToggleEditCatModal = async () => {
    const category = {
      name,
    };
    await EditCategory(Data.id, category);
    CloseModal();
  };

  const OpenModal = () => setName(Data.name);

  const CloseModal = () => setName("");

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
        class="btn btn-primary"
        data-toggle="modal"
        data-target={`#EditCategoryModal${Data.id}`}
        onClick={OpenModal}
      >
        <Icon path={mdiFileEdit} size={1} />
      </button>

      <div
        class="modal fade"
        id={`EditCategoryModal${Data.id}`}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit Category
              </h5>
              <button
                type="button"
                class="btn-close"
                data-dismiss="modal"
              ></button>
            </div>
            <div class="modal-body">{ModalBody}</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
                onClick={CloseModal}
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
                onClick={ToggleEditCatModal}
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

export default EditCategoryModal;
