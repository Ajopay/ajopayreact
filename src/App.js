import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./jsx component/homepage";
import SignUp from "./jsx component/signupPage";
import SignIn from "./jsx component/signIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
    // <div>
    //   <SignIn />
    // </div>
  );
}

export default App;
