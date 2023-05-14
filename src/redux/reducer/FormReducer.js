import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  phone: "",
  email: "",
  arrForm: [
    { id: "01", name: "Nguyễn Văn A", phone: "09090909", email: "a@gmail.com" },
    { id: "02", name: "Nguyễn Văn B", phone: "09090908", email: "b@gmail.com" },
    { id: "03", name: "Nguyễn Văn C", phone: "09090907", email: "c@gmail.com" },
  ],
  formEdit: {},
  idEdit: "",
  nameEdit: "",
  phoneEdit: "",
  emailEdit: "",
};

const FormReducer = createSlice({
  name: "FormReducer",
  initialState,
  reducers: {
    createForm: (state, action) => {
      state.arrForm.push(action.payload);
    },
    delInfo: (state, action) => {
      let itemId = action.payload;
      state.arrForm = state.arrForm.filter((item) => item.id != itemId);
    },
    editInfo: (state, action) => {
      console.log(action);
      state.idEdit = action.payload.id;
      state.nameEdit = action.payload.name;
      state.phoneEdit = action.payload.phone;
      state.emailEdit = action.payload.email;
    },
    upload: (state, action) => {
      const index = state.arrForm.findIndex((info) => {
        return info.id === action.payload.id;
      });
      if (index !== -1) {
        state.arrForm[index] = action.payload;
      }
    },
  },
});

export const { createForm, delInfo, editInfo, upload } = FormReducer.actions;

export default FormReducer.reducer;
