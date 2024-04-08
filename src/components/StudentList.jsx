import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const StudentList = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchStudents = () => {
        setLoading(true);
        return fetch("https://hp-characters-api.onrender.com/characters")
            .then((response) => response.json())
            .then((data) => setStudents(data))
            .catch((error) => console.error(error))
            .finally(() => {
                setLoading(false);
            });
    };
    const deleteStudent = (id) => {
        return fetch(`https://hp-characters-api.onrender.com/characters/${id}`, { method: "DELETE" });
    };
    useEffect(() => {
        fetchStudents();
    }, []);
    const handleDeleteButton = (id) => {
        deleteStudent(id).then(() => {
            fetchStudents();
        });
    };
    return (
        <>
            <h1>List of students </h1>
            {loading ? (
                <p className="text-loading">
                    Loading data
                </p>
            ) : null}
            {students.length > 0 ? (
                <table className="table table-light table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>House</th>
                            <th>Year</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td>
                                    <Link to={`/students/${student.id}`}>{student.name}</Link>
                                </td>
                                <td>{student.gender}</td>
                                <td>{student.house}</td>
                                <td>{student.year}</td>
                                <td>
                                    <Link to={`/students/${student.id}/edit`}>Edit</Link>{" "}
                                    <button
                                        type="button"
                                        onClick={() => handleDeleteButton(student.id)}
                                        className="btn btn-danger student-delete"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : null}
            <nav>
                <Link to="/students/create">Create new student</Link>
            </nav>
        </>
    );
};