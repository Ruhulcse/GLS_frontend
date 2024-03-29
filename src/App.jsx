import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Routes";
import useAuthChecked from "./hooks/useAuthChecked";

function App() {
  const authChecked = useAuthChecked()
  console.log(authChecked);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
