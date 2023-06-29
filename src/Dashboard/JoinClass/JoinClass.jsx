// eslint-disable-next-line no-unused-vars
import React from 'react'

const JoinClass = () => {
  return (
    <div>
      <h1>JoinClass</h1>

      {/* search */}
      <div className="row">
        <div className="col">
          <p>Course (Click to load...)</p>
          <select className="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div className="col">
          <p>Batch (Click to load...)</p>
          <select className="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default JoinClass
