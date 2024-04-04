import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StudentList } from "./components/StudentList";


const router = createBrowserRouter([
  {
    path: "/student-administration-hp",
    element: <StudentList />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
