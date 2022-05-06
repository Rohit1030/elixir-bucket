import { AxiosResponse } from "axios";
import { WorkspaceData } from "interfaces/misc";
import { useMutation, useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { resetLayoutState } from "../store/layoutStateSlice";
import { setInstitute, setIsAuthenticated, setUser } from "../store/userSlice";
import api, { authHeader } from "./index";

export function useLoginQuery(setShow: Function) {
  return useMutation((data: any) => api.post("/auth/login", data, { withCredentials: true }), {
    onSuccess: (res: AxiosResponse) => {
      localStorage.setItem("token", res.data.result.accessToken);
      setShow("setup");
    },
  });
}

export async function logoutUser() {
  try {
    return await api.get("/auth/logout", authHeader());
  } catch (error) {
    return error;
  }
}

export function useSetupWorkspace(path?: string) {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    isLoading: isWorkspaceLoading,
    isError: isWorkspaceError,
    isSuccess: isWorkspaceSuccess,
  } = useQuery(
    "auth/setup-workspace",
    async () => {
      // const userData = await api.get("/auth/user", authHeader());
      return await api.get("/auth/setup-workspace", authHeader());
    },
    {
      onSuccess: (res: AxiosResponse<{ result: { workspace: WorkspaceData } }>) => {
        dispatch(resetLayoutState());
        const {
          user_id,
          user_name,
          email,
          profile_picture,
          user_type,
          institute_name = "",
          department_name = "",
          permissions,
          intitute_logo,
          short_code,
          is_superadmin,
          configuration,
          insitute_admin,
        } = res.data.result.workspace;

        dispatch(
          setUser({
            id: user_id,
            name: user_name,
            email: email,
            type: user_type,
            profile_pic: profile_picture,
            institute_name: institute_name,
            department_name: department_name,
            permissionGroup: permissions,
          })
        );

        dispatch(
          setInstitute({
            institute_logo: intitute_logo,
            institute_code: short_code,
            is_superadmin: is_superadmin,
            institute_admin: insitute_admin,
            workspace_type: configuration.workspace_type,
            footer: configuration.footer,
          })
        );
        const imageCount = 3;
        sessionStorage.setItem("ornament", String(Math.floor(Math.random() * imageCount + 1)));

        dispatch(setIsAuthenticated(true));
        history.push(path ? path : "/dashboard");
      },
      onError: () => {
        history.push("/");
      },
    }
  );
  return { isWorkspaceLoading, isWorkspaceError, isWorkspaceSuccess };
}
