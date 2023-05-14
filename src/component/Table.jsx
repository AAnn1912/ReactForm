import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delInfo, editInfo } from "../redux/reducer/FormReducer";

export default function Table() {
  const dispatch = useDispatch();

  let inFo = useSelector((reducer) => {
    return reducer.FormReducer.arrForm;
  });

  let handleDel = (id) => {
    dispatch(delInfo(id));
  };

  let handleEdit = (value) => {
    dispatch(editInfo(value));
  };

  let renderInfo = () => {
    return inFo.map((value, index) => {
      return (
        <tr key={index}>
          <td>{value.id}</td>
          <td>{value.name}</td>
          <td>{value.phone}</td>
          <td>{value.email}</td>
          <td>
            <button
              className="bg-danger"
              onClick={() => {
                handleDel(value.id);
              }}
            >
              Del.
            </button>
            <button
              className="bg-success ms-1"
              onClick={() => {
                handleEdit(value);
              }}
            >
              Edit
            </button>
          </td>
        </tr>
      );
    });
  };
  return (
    <div className="container">
      <table className="table mt-1">
        <thead>
          <tr className="bg-dark text-light">
            <th>Mã SV</th>
            <th>Họ Tên</th>
            <th>SĐT</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{renderInfo()}</tbody>
      </table>
    </div>
  );
}
