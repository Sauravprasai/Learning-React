import { useDispatch, useSelector } from "react-redux";
import { changeName, changeGrade, changeRollNo, submittingCard } from "../Store";

function CarForm() {
    const dispatch = useDispatch();
    const { name, grade, rollNo } = useSelector((state) => {
        return {
            name: state.form.name,
            grade: state.form.grade,
            rollNo: state.form.rollNo
        };
    });

    const handleChangeName = (event) => {
        dispatch(changeName(event.target.value));
    };

    const handleChangeGrade = (event) => {
        dispatch(changeGrade(event.target.value));
    };

    const handleChangeRollNo = (event) => {
        dispatch(changeRollNo(event.target.value));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(submittingCard({ name, rollNo, grade }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="title">Submit Card Details</h1>
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input
                        className="input"
                        value={name}
                        onChange={handleChangeName}
                        type="text"
                        placeholder="Enter name"
                    />
                </div>
            </div>
            <div className="field">
                <label className="label">Grade</label>
                <div className="control">
                    <input
                        className="input"
                        value={grade || ""}
                        onChange={handleChangeGrade}
                        type="number"
                        placeholder="Enter grade"
                    />
                </div>
            </div>
            <div className="field">
                <label className="label">Roll No</label>
                <div className="control">
                    <input
                        className="input"
                        value={rollNo || ""}
                        onChange={handleChangeRollNo}
                        type="number"
                        placeholder="Enter roll number"
                    />
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <button type="submit" className="button is-primary">
                        Submit form
                    </button>
                </div>
            </div>
        </form>
    );
}

export default CarForm;
