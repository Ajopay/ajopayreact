import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./jsx component/homepage";
import SignUp from "./jsx component/signupPage";
import Payment from "./jsx component/payment";
import Dashboard from "./jsx component/dashboard";
import SignIn from "./jsx component/signIn";
import TransferModal from "./jsx component/transferModal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="payment" element={<Payment />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <div>
    //   <TransferModal />
    // </div>
  );
}

export default App;
