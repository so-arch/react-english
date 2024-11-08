function TodoItems ({todoname, tododate, todotime}) {
    return (
        <div className="row kg-row">
          <div className="col-3">{todoname}</div>
          <div className="col-3">{tododate}</div>
          <div className="col-3">{todotime}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger kg-button">Delete</button>
          </div>
        </div>
    );
}
export default TodoItems;