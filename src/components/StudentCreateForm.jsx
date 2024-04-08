import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const StudentCreateForm = () => {
    const navigate = useNavigate();

    const [student, setStudent] = useState({ name: "", gender: "", house: "", year: "" });

    const setName = (name) => {
        setStudent({ ...student, name });
    };
    const setGender = (gender) => {
        setStudent({ ...student, gender });
    };
    const setHouse = (house) => {
        setStudent({ ...student, house });
    };
    const setYear = (year) => {
        setStudent({ ...student, year });
    };
    const createStudent = () => {
        return fetch(`https://hp-characters-api.onrender.com/characters`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(student),
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        createStudent()
            .then((response) => response.json())
            .then((body) => {
                navigate(`/students/${body.id}`);
            });
    };
    return (
        <>
            <h1>Edit student</h1>
            <form onSubmit={handleSubmit}>
                <table className="table table-light table-bordered">
                    <tbody>
                        <tr>
                            <th>
                                <label htmlFor="name" className="form-label">
                                    Name
                                </label>
                            </th>
                            <td>
                                <input
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    value={student.name}
                                    onChange={(event) => setName(event.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>Gender</th>
                            <td>
                                <select
                                    id="gender"
                                    name="gender"
                                    className="form-select"
                                    value={student.gender}
                                    onChange={(event) => setGender(event.target.value)}
                                >
                                    <option key=""></option>
                                    <option key="male" value="male">
                                        male
                                    </option>
                                    <option key="female" value="female">
                                        female
                                    </option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label htmlFor="house" className="form-label">
                                    House
                                </label>
                            </th>
                            <td>
                                <select
                                    id="house"
                                    name="house"
                                    className="form-select"
                                    value={student.house}
                                    onChange={(event) => setHouse(event.target.value)}
                                >
                                    <option key=""></option>
                                    <option key="Gryffindor" value="Gryffindor">
                                        Gryffindor
                                    </option>
                                    <option key="Hufflepuff" value="Hufflepuff">
                                        Hufflepuff
                                    </option>
                                    <option key="Ravenclaw" value="Ravenclaw">
                                        Ravenclaw
                                    </option>
                                    <option key="Slytherin" value="Slytherin">
                                        Slytherin
                                    </option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label htmlFor="year" className="form-label">
                                    Year
                                </label>
                            </th>
                            <td>
                                <select
                                    id="year"
                                    name="year"
                                    className="form-select"
                                    value={student.year}
                                    onChange={(event) => setYear(event.target.value)}
                                >
                                    <option key=""></option>
                                    <option key="1" value="1">
                                        1
                                    </option>
                                    <option key="2" value="2">
                                        2
                                    </option>
                                    <option key="3" value="3">
                                        3
                                    </option>
                                    <option key="4" value="4">
                                        4
                                    </option>
                                    <option key="5" value="5">
                                        5
                                    </option>
                                    <option key="6" value="6">
                                        6
                                    </option>
                                    <option key="7" value="7">
                                        7
                                    </option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button className="btn btn-primary">Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <nav>
                <Link to="/">Back to student list</Link>
            </nav>
        </>
    );
};
