import "./App.css";
import { SignupForm } from "./Formik_useField/Formik_useField";

function App() {
  return (
    <div className="flex justify-center h-screen w-full">
      <div className="w-1/2  rounded shadow-2xl p-8 m-4">
        <SignupForm />
      </div>
    </div>
  );
}

export default App;

//thêm trường mật khẩu
//sử dụng Yup
// và các tính năng phía dưới
