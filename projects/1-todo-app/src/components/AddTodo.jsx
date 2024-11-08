function AddTodo () {
    return (
        <div className="row kg-row">
            <div className="col-3">
                <input type="text" placeholder="Enter Todo Here"/>
            </div>
            <div className="col-3">
                <input type="date" />
            </div>
            <div className="col-3">
                <input type="time" />
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-success kg-button">Add</button>
            </div>
        </div>
    );
}
export default AddTodo;