import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StudentList } from "./components/StudentList";
import { StudentCreateForm } from "./components/StudentCreateForm";
import { StudentDetail } from "./components/StudentDetail";
import { StudentEditForm } from "./components/StudentEditForm";


const router = createBrowserRouter([
  {
    path: "/student-administration-hp",
    element: <StudentList />,
  },
  {
    path: "/students/:id",
    element: <StudentDetail />,
  },
  {
    path: "/students/:id/edit",
    element: <StudentEditForm />,
  },
  {
    path: "/students/create",
    element: <StudentCreateForm />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
