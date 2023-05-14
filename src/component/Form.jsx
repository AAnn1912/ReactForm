import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createForm, upload } from "../redux/reducer/FormReducer";

export default function Form() {
  const dispatch = useDispatch();
  let arrForm = useSelector((reducer) => {
    return reducer.FormReducer.arrForm;
  });

  console.log(arrForm);
  let { idEdit, nameEdit, phoneEdit, emailEdit } = useSelector((reducer) => {
    return reducer.FormReducer;
  });

  let [id, setId] = useState("");
  let [name, setName] = useState("");
  let [phone, setPhone] = useState("");
  let [email, setEmail] = useState("");
  let [errorid, setErrorId] = useState("");
  let [errorname, setErrorName] = useState("");
  let [errorphone, setErrorPhone] = useState("");
  let [erroremail, setErrorEmail] = useState("");

  useEffect(() => {
    setId(idEdit);
    setName(nameEdit);
    setPhone(phoneEdit);
    setEmail(emailEdit);
  }, [idEdit]);
  let resForm = () => {
    setId("");
    setName("");
    setPhone("");
    setEmail("");
  };
  let handleInputId = (event) => {
    let value = event.target.value;
    setId(value);
    let regexnumbers = /^[0-9]+$/;

    if (value.trim() !== "" && regexnumbers.test(value)) {
      setErrorId("");
    } else {
      setErrorId("Mã sinh viên phải là số và không được để trống");
    }
  };
  let handleInputName = (event) => {
    let value = event.target.value;
    setName(value);
    var regexLetter =
      /^[A-Z a-z  ă â e ê đ ý ỳ ỷ ỹ ỵ ú ù ủ ũ ụ ư ứ ừ ử ữ ự ó ò ỏ õ ọ ô ố ồ ổ ỗ ộ ơ ớ ờ ở ỡ ợ ó ò ỏ õ ọ ô ố ồ ổ ỗ ộ ơ ớ ờ ở ỡ ợ i í ì ỉ ĩ ị é è ẻ ẽ ẹ ê ế ề ể ễ ệ á à ả ạ ã ă ắ ằ ẳ ẵ ặ â ấ ầ ẩ ẫ ậ Ă Â E Ê Đ Ý Ỳ Ỷ Ỹ Ỵ Ú Ù Ủ Ũ Ụ Ư Ứ Ừ Ử Ữ Ự Ó Ò Ỏ Õ Ọ Ô Ố Ồ Ổ Ỗ Ộ Ơ Ớ Ờ Ở Ỡ Ợ Ó Ò Ỏ Õ Ọ Ô Ố Ồ Ổ Ỗ Ộ Ơ Ớ Ờ Ở Ỡ Ợ I Í Ì Ỉ Ĩ Ị É È Ẻ Ẽ Ẹ Ê Ế Ề Ể Ễ Ệ Á À Ả Ạ Ã Ă Ắ Ằ Ẳ Ẵ Ặ Â Ấ Ầ Ẩ Ẫ Ậ]+$/;
    if (value.trim() !== "" && regexLetter.test(value)) {
      setErrorName("");
    } else {
      setErrorName("Tên phải là tý tự và không được để trống");
    }
  };
  let handleInputPhone = (event) => {
    let value = event.target.value;
    setPhone(value);

    let regexnumbers = /^[0-9]+$/;
    if (value.trim() !== "" && regexnumbers.test(value)) {
      setErrorPhone("");
    } else {
      setErrorPhone("Số điện thoại phải là số và không được để trống");
    }
  };

  let handleInputEmail = (event) => {
    let value = event.target.value;
    setEmail(value);
    let regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (value.trim() !== "" && regexEmail.test(email)) {
      setErrorEmail("");
    } else {
      setErrorEmail("Email phải đúng định dạng và không được bỏ trống");
    }
  };

  let handleSubmit = () => {
    for (const key in arrForm) {
      if (id === arrForm[key].id) {
        return setErrorId("Mã sinh viên đã tồn tại");
      }
    }
    if (
      errorid === "" &&
      errorname === "" &&
      errorphone === "" &&
      erroremail === "" &&
      id !== "" &&
      name !== "" &&
      phone !== "" &&
      email !== ""
    ) {
      dispatch(createForm({ id, name, phone, email }));
      resForm();
    }
  };
  let handleUpdate = () => {
    let newUpdate = { id, name, phone, email };
    dispatch(upload(newUpdate));
    resForm();
  };
  let lock = false;
  if (id === idEdit && id !== "") {
    lock = true;
  }
  console.log(lock);
  return (
    <div className="container">
      <header className="header">
        <h3 className="bg-dark text-white p-2 ">Thông tin sinh viên</h3>
        <div className="form-input row">
          <div className="col-6 mt-1">
            <p className="text-start mb-0">Mã Sinh viên</p>
            <input
              type="text"
              className="form-control w-100"
              value={id}
              onInput={handleInputId}
              disabled={lock}
            />
            {errorid && <p className="text-danger text-start">{errorid}</p>}
          </div>
          <div className="col-6 mt-1">
            <p className="text-start mb-0">Họ tên</p>
            <input
              type="text"
              className="form-control w-100"
              value={name}
              onInput={handleInputName}
            />
            <p className="text-danger text-start">{errorname}</p>
          </div>

          <div className="col-6 mt-1">
            <p className="text-start mb-0">SĐT</p>
            <input
              type="text"
              className="form-control w-100"
              value={phone}
              onInput={handleInputPhone}
            />
            <p className="text-danger text-start">{errorphone}</p>
          </div>
          <div className="col-6 mt-1">
            <p className="text-start mb-0">Email</p>
            <input
              type="text"
              className="form-control w-100"
              value={email}
              onInput={handleInputEmail}
            />
            <p className="text-danger text-start">{erroremail}</p>
          </div>
          <div className="w-100 text-end">
            <button
              className="btn btn-success p-1 mt-2  p-2"
              onClick={handleSubmit}
            >
              Thêm sinh viên
            </button>
            <button
              className="btn btn-primary p-1 mt-2 ms-2  p-2"
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
