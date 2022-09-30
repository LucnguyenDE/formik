import { useFormik } from "formik";
import * as Yup from "yup";
import "./App.css";
//getFieldProps(): bỏ bớt code trong input so với ban đầu

//<input id="firstName" type="text" {...formik.getFieldProps("firstName")} />;

const validate = (values) => {
  const errors = {};
  if (!values.studentCode.trim()) {
    errors.studentCode = "Trường này không được để rỗng";
  } else if (values.studentCode.trim().length > 3) {
    errors.studentCode = "Độ dài không vượt 3 chữ số";
  }
  if (!values.studentName.trim()) {
    errors.studentName = "Trường này không được để rỗng";
  } else if (
    !/[a-zA-Z\s?\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u024F]/i.test(
      values.studentName.trim()
    )
  ) {
    errors.studentName = "Tên không hợp lệ";
  }
  if (!values.studentPhone.trim()) {
    errors.studentPhone = "Trường này không được để rỗng";
  } else if (!/^[0-9]+$/.test(values.studentPhone.trim())) {
    errors.studentPhone = "Số điện thoại không hợp lệ";
  }
  if (!values.studentEmail.trim()) {
    errors.studentEmail = "Trường này không được để rỗng";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
      values.studentEmail.trim()
    )
  ) {
    errors.studentEmail = "Email không hợp lệ";
  }
  if (!values.studentPassWord.trim()) {
    errors.studentPassWord = "Trường này không được để rỗng";
  } else if (
    values.studentPassWord.trim().length < 6 ||
    values.studentPassWord.trim().length > 8
  ) {
    errors.studentPassWord = "Độ dài mật khẩu từ 6 đến 8 kí tự";
  } else if (
    !/[\`\~\!\@\#\%\&\>\<\:\;\,\_\=\"\'-.*+?^${}()|/[\]\\]{1,}/.test(
      values.studentPassWord.trim()
    ) ||
    !/[0-9]{1,}/.test(values.studentPassWord.trim()) ||
    !/[A-Z]{1,}/.test(values.studentPassWord.trim())
  ) {
    errors.studentPassWord =
      "Mật khẩu bao gồm 1 ký tự số, 1 ký tự in hoa, 1 kí tự đặc biệt";
  }
  return errors;
};
function App() {
  const formik = useFormik({
    initialValues: {
      studentCode: "",
      studentName: "",
      studentPhone: "",
      studentEmail: "",
      studentPassWord: "",
    },
    validate,
    onSubmit: (values) => {
      //thực hiện việc gì khi submit
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="flex justify-center h-screen w-full bg-blue-400">
      <div className="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
        <h1 className="block w-full text-center text-gray-500 text-2xl font-bold mb-6">
          THÔNG TIN SINH VIÊN
        </h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col mb-4">
            <label
              className="mb-2 font-bold text-lg text-gray-500"
              htmlFor="studentCode"
            >
              Mã SV
            </label>
            <input
              className="border py-2 px-3 text-grey-800"
              type="text"
              id="studentCode"
              {...formik.getFieldProps("studentCode")}
            />
            {formik.touched.studentCode && formik.errors.studentCode ? (
              <div className="text-xs" style={{ color: "red" }}>
                {formik.errors.studentCode}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="mb-2 font-bold text-lg text-gray-500"
              htmlFor="studentName"
            >
              Họ &amp; Tên
            </label>
            <input
              className="border py-2 px-3 text-grey-800"
              type="text"
              id="studentName"
              {...formik.getFieldProps("studentName")}
            />

            {formik.touched.studentName && formik.errors.studentName ? (
              <div className="text-xs" style={{ color: "red" }}>
                {formik.errors.studentName}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="mb-2 font-bold text-lg text-gray-500"
              htmlFor="studentPhone"
            >
              Số điện thoại
            </label>
            <input
              className="border py-2 px-3 text-grey-800"
              type="text"
              id="studentPhone"
              {...formik.getFieldProps("studentPhone")}
            />

            {formik.touched.studentPhone && formik.errors.studentPhone ? (
              <div className="text-xs" style={{ color: "red" }}>
                {formik.errors.studentPhone}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="mb-2 font-bold text-lg text-gray-500"
              htmlFor="studentEmail"
            >
              Email
            </label>
            <input
              className="border py-2 px-3 text-grey-800"
              type="text"
              id="studentEmail"
              {...formik.getFieldProps("studentEmail")}
            />
            {formik.touched.studentEmail && formik.errors.studentEmail ? (
              <div className="text-xs" style={{ color: "red" }}>
                {formik.errors.studentEmail}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="mb-2 font-bold text-lg text-gray-500"
              htmlFor="studentPassWord"
            >
              MK
            </label>
            <input
              className="border py-2 px-3 text-grey-800"
              type="text"
              id="studentPassWord"
              {...formik.getFieldProps("studentPassWord")}
            />
            {formik.touched.studentPassWord && formik.errors.studentPassWord ? (
              <div className="text-xs" style={{ color: "red" }}>
                {formik.errors.studentPassWord}
              </div>
            ) : null}
          </div>
          <button
            className="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded"
            type="submit"
          >
            Thêm sinh viên
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

//thêm trường mật khẩu
//sử dụng Yup
// và các tính năng phía dưới
