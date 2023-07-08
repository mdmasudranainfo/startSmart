const SubmitHomeWork = () => {
  return (
    <div>
      <h1>Homework Submit</h1>

      {/* search */}
      <div className="row">
        <div className="col-sm-6">
          <p>Course (Click to load...)</p>
          <select className="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div className="col-sm-6">
          <p>Batch (Click to load...)</p>
          <input className="form-control" placeholder="Submit HomeWork Link" />
        </div>

        <div className="d-flex justify-content-center  mt-4">
          <button className="btn btn-primary ">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default SubmitHomeWork
