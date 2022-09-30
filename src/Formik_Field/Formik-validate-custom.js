import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
//custom validate
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
const SignupForm = () => {
  return (
    <Formik
      initialValues={{
        studentCode: "",
        studentName: "",
        studentPhone: "",
        studentEmail: "",
        studentPassWord: "",
      }}
      validate={validate}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));

          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <div className="flex flex-col mb-4">
          <label
            className="mb-2 font-bold text-lg text-gray-500"
            htmlFor="studentCode"
          >
            Mã SV
          </label>
          <Field
            className="border py-2 px-3 text-grey-800"
            name="studentCode"
            type="text"
          />
          <div className="text-xs" style={{ color: "red" }}>
            <ErrorMessage name="studentCode" />
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <label
            className="mb-2 font-bold text-lg text-gray-500"
            htmlFor="studentName"
          >
            Họ và tên
          </label>
          <Field
            className="border py-2 px-3 text-grey-800"
            name="studentName"
            type="text"
          />
          <div className="text-xs" style={{ color: "red" }}>
            <ErrorMessage name="studentName" />
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <label
            className="mb-2 font-bold text-lg text-gray-500"
            htmlFor="studentPhone"
          >
            Số điện thoại
          </label>
          <Field
            className="border py-2 px-3 text-grey-800"
            name="studentPhone"
            type="text"
          />
          <div className="text-xs" style={{ color: "red" }}>
            <ErrorMessage name="studentPhone" />
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <label
            className="mb-2 font-bold text-lg text-gray-500"
            htmlFor="studentEmail"
          >
            Email
          </label>
          <Field
            className="border py-2 px-3 text-grey-800"
            name="studentEmail"
            type="text"
          />
          <div className="text-xs" style={{ color: "red" }}>
            <ErrorMessage name="studentEmail" />
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <label
            className="mb-2 font-bold text-lg text-gray-500"
            htmlFor="studentPassWord"
          >
            Mật khẩu
          </label>
          <Field
            className="border py-2 px-3 text-grey-800"
            name="studentPassWord"
            type="text"
          />
          <div className="text-xs" style={{ color: "red" }}>
            <ErrorMessage name="studentPassWord" />
          </div>
        </div>
        <button
          className="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};
export default SignupForm;
