import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const StudentDetail = () => {
    const { id } = useParams();
    const [student, setStudent] = useState(null);
    const fetchStudent = () => {
        return fetch(`https://hp-characters-api.onrender.com/characters/${id}`)
            .then((response) => response.json())
            .then((body) => setStudent(body))
            .catch(error => {
                console.error(error);
              });
    };
    useEffect(() => {
        fetchStudent();
    }, []);
    return (
        <>
            <h1>Student detail</h1>
            {student !== null ? (
                <table className="table table-light table-bordered">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <td>
                                {student.name}
                            </td>
                        </tr>
                        <tr>
                            <th>Gender</th>
                            <td>{student.gender}</td>
                        </tr>
                        <tr>
                            <th>House</th>
                            <td>{student.house}</td>
                        </tr>
                        <tr>
                            <th>Year</th>
                            <td>{student.year}</td>
                        </tr>
                    </tbody>
                </table>
            ) : null}
            <nav>
                <Link to="/student-administration-hp">Back to student list</Link>{" "}
                {student !== null ? (
                    <Link to={`/students/${student.id}/edit`}>
                        Edit {student.name}
                    </Link>
                ) : null}
            </nav>
        </>
    );
};