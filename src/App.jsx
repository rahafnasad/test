import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { RouterProvider } from "react-router-dom";
import { UserContext } from "./context/userContext";
import { router } from "./routes";

function App() {
  const { ShowAdd } = useContext(UserContext);

  return (
    <div className=" overflow-hidden">
      <RouterProvider router={router} />
      {ShowAdd ? <div className="overLaydata" ></div>
        : ""}
    </div>
  );
}

export default App;
