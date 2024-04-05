import React from "react";

export default function home() {
  return (
    <div>
      <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active"
            data-toggle="tab"
            href="#tabs-1"
            role="tab"
          >
            First Panel
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab">
            Second Panel
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#tabs-3" role="tab">
            Third Panel
          </a>
        </li>
      </ul>

      <div class="tab-content">
        <div class="tab-pane active" id="tabs-1" role="tabpanel">
          <p>First Panel</p>
        </div>
        <div class="tab-pane" id="tabs-2" role="tabpanel">
          <p>Second Panel</p>
        </div>
        <div class="tab-pane" id="tabs-3" role="tabpanel">
          <p>Third Panel</p>
        </div>
      </div>
    </div>
  );
}
