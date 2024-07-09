import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { UserPersonalPage } from "./components/Users/UserPersonalPage";
import { TodosPage } from "./pages/TodosPage";
import { UserPage } from "./pages/UserPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/users" exact={true} element={<UserPage />} />
        <Route path="/users/:id" exact={true} element={<UserPersonalPage />} />

        <Route path="/todos" exact={true} element={<TodosPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
