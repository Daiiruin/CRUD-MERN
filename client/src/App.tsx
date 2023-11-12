import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateUser } from "./pages/CreateUser";
import { UpdateUser } from "./pages/UpdateUser";
import { Users } from "./pages/Users";
import "./styles/main-styles.scss";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />}></Route>
          <Route path="/createUser" element={<CreateUser />}></Route>
          <Route path="/updateUser/:id" element={<UpdateUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
