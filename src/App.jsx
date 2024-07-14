import { RouterProvider } from "react-router-dom";
import Router from "./routes";

const App = function () {
  return (
    <RouterProvider router={Router} />
  );
};
export default App;