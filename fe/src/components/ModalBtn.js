import React, { useState } from "react";

const ModalBtn = ({
  BtnText,
  ModalTitle = "Title",
  ModalBody,
  ModalSaveFunction,
}) => {
  const [modal, setModal] = useState("");

  const ToggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#managerModal"
      >
        {BtnText}
      </button>

      <div
        class="modal fade text-light"
        id="managerModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden={modal}
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-light" id="exampleModalLabel">
                {ModalTitle}
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
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={ModalSaveFunction}
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

export default ModalBtn;
