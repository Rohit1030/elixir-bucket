import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { PermissionGroupData } from "../interfaces";

interface SetUserData {
  id: string;
  name: string;
  email: string;
  type: "student" | "teacher" | "admin";
  profile_pic: string;
  permissionGroup: PermissionGroupData;
  institute_name?: string;
  department_name?: string;
}

interface SetInstituteData {
  institute_logo: string;
  institute_code: string;
  is_superadmin: boolean;
  institute_admin: string;
  workspace_type: "research" | string;
  footer: string;
}

interface UserInitialStateData extends SetUserData, SetInstituteData {
  isAuthenticated: boolean;
}

const initialState: UserInitialStateData = {
  id: "",
  name: "",
  email: "",
  type: "student",
  profile_pic: "",
  permissionGroup: {
    level: 0,
    selfTask: "",
    assignTask: "",
    classroom: "",
    analytics: "",
    account: "",
    institute: "",
    milestone: "",
    schedule: "",
    _id: "",
    name: "",
    taskTemplate: "",
    user: "",
    permissionGroup: "",
  },
  institute_name: "",
  department_name: "",
  isAuthenticated: false,
  institute_logo: "",
  institute_code: "",
  is_superadmin: false,
  institute_admin: "",
  workspace_type: "",
  footer: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setIsAuthenticated: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuthenticated = payload;
    },
    setUser: (state, { payload }: PayloadAction<SetUserData>) => {
      state.id = payload.id;
      state.name = payload.name;
      state.email = payload.email;
      state.type = payload.type;
      state.profile_pic = payload.profile_pic;
      state.permissionGroup = payload.permissionGroup;
      state.institute_name = payload.institute_name;
      state.department_name = payload.department_name;
    },
    setInstitute: (state, { payload }: PayloadAction<SetInstituteData>) => {
      state.institute_logo = payload.institute_logo;
      state.institute_code = payload.institute_code;
      state.is_superadmin = payload.is_superadmin;
      state.institute_admin = payload.institute_admin;
      state.workspace_type = payload.workspace_type;
      state.footer = payload.footer;
    },
    resetUser: (state) => Object.assign(state, initialState),
  },
});

export const userSelector = (state: RootState) => state.user;
export const { setIsAuthenticated, setUser, setInstitute, resetUser } = userSlice.actions;
