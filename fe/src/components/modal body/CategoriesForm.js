import React, { useState } from "react";

const CategoryForm = () => {
  const [name, setName] = useState("");

  return (
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
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
    </form>
  );
};

export default CategoryForm;
