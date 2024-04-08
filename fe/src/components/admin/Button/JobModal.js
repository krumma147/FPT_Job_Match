import React, { useState } from "react";

const JobModal = ({ AddJob }) => {
  const [title, setTitle] = useState("");
  const [salaryRange, setSalaryRange] = useState(0);
  const [isRangeEnabled, setIsRangeEnabled] = useState(false);

  const ToggleModal = async () => {
    const job = {
      title,
    };
    await AddJob(job);
    CloseModal();
  };

  const CloseModal = () => {
    setTitle("");
  };

  const ModalBody = (
    <form>
      <div className="row">
        <div class="mb-3 col">
          <label for="exampleInputEmail1" class="form-label">
            Job Title
          </label>
          <input
            type="text"
            class="form-control rounded"
            aria-describedby="emailHelp"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div class="mb-3 col">
          <label for="exampleInputEmail1" class="form-label">
            Category (Field)
          </label>
          <select class="custom-select custom-select-sm">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div class="mb-3 col">
          <label for="exampleInputEmail1" class="form-label">
            Job Description
          </label>
          <textarea
            class="form-control rounded"
            aria-describedby="emailHelp"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div class="mb-3 col">
            <label for="exampleInputEmail1" class="form-label">
              Skills Required
            </label>
            <input
              type="text"
              class="form-control rounded"
              aria-describedby="emailHelp"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div class="mb-3 col">
            <label for="exampleInputEmail1" class="form-label">
              End Time
            </label>
            <input
              type="text"
              class="form-control rounded"
              aria-describedby="emailHelp"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="col">
          <div class="mb-3 col">
            <label for="exampleInputEmail1" class="form-label">
              Experience required
            </label>
            <input
              type="number"
              class="form-control rounded"
              aria-describedby="emailHelp"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div class="mb-3 col">
            <label for="exampleInputEmail1" class="form-label">
              Education required
            </label>
            <select class="custom-select custom-select-sm">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="enableRangeCheckbox"
            checked={!isRangeEnabled} // Trạng thái của checkbox
            onChange={() => setIsRangeEnabled(!isRangeEnabled)} // Sự kiện khi checkbox thay đổi
          />
          <label className="form-check-label" htmlFor="enableRangeCheckbox">
            Include Salary
          </label>
        </div>
        <label htmlFor="customRange1" className="form-label">
          Salary Range
        </label>
        <input
          type="range"
          className="form-range col"
          id="customRange1"
          value={salaryRange} // Sử dụng giá trị của state làm giá trị của thanh input
          min={0} // Giới hạn số bắt đầu
          max={100000} // Giới hạn số kết thúc
          disabled={isRangeEnabled} // Vô hiệu hóa thanh input nếu checkbox không được chọn
          onChange={(e) => setSalaryRange(e.target.value)} // Sự kiện khi giá trị của thanh input thay đổi
        />
        <p>Salary: ${salaryRange}</p> {/* Hiển thị giá trị của thanh input */}
      </div>
    </form>
  );

  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#JobModal"
      >
        Add Job <span class="mdi mdi-plus"></span>
      </button>

      <div
        class="modal fade text-light"
        id="JobModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-light" id="exampleModalLabel">
                Add Job
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

export default JobModal;
