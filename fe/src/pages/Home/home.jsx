import React from 'react'

export default function home() {
  return (
    <div>
<div>
  <ul className="nav nav-tabs" role="tablist">
    <li role="presentation"> <a href="#list1" id="list1-tab" data-bs-toggle="tab" data-bs-target="#list1" role="tab" aria-controls="list1" aria-selected="true" className="active">List 1</a> </li>
    <li role="presentation"> <a href="#list2" id="list2-tab" data-bs-toggle="tab" data-bs-target="#list2" role="tab" aria-controls="list2" aria-selected="false" className>List 2</a> </li>
    <li role="presentation"> <a href="#list3" id="list3-tab" data-bs-toggle="tab" data-bs-target="#list3" role="tab" aria-controls="list3" aria-selected="false" className>List 3</a> </li>
    <li role="presentation"> <a href="#list4" id="list4-tab" data-bs-toggle="tab" data-bs-target="#list4" role="tab" aria-controls="list4" aria-selected="false" className>List 4</a> </li>
  </ul>
  <div className="tab-content">
    <div id="list1" role="tabpanel" aria-labelledby="list1-tab" className="tab-pane active">
      <div className="info">List 1 info</div>
      <a href="#" className="go-to" id="goToList2">Go to List 2</a>
    </div>
    <div id="list2" role="tabpanel" aria-labelledby="list2-tab" className="tab-pane">
      <div className="info">List 2 info</div>
    </div>
    <div id="list3" role="tabpanel" aria-labelledby="list3-tab" className="tab-pane">
      <div className="info">List 3 info</div>
    </div>
    <div id="list4" role="tabpanel" aria-labelledby="list4-tab" className="tab-pane">
      <div className="info">List 4 info</div>
    </div>
  </div>
</div>

    </div>
  )
}
