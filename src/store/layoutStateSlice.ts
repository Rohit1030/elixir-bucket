import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { FixedScheduleData } from "../interfaces";
import dayjs from "dayjs";

type CalViewType = "month" | "week" | "day";
type AssignedType = "assignedTo" | "assignedBy";
interface LayoutStateInitialStateData {
  selectedSchedule: FixedScheduleData;
  isSidebarClosed?: boolean;
  openedMilestones?: string[];
  dashboard?: {
    [key: string]: any;
  };
  calView: CalViewType;
  calTitle: string;
  assignView: AssignedType;
}

const initialState: LayoutStateInitialStateData = {
  selectedSchedule: {
    _id: "",
    name: "",
    description: "",
    for_students: false,
    term: 1,
    expected_start_month: 0,
    created_by: "",
    is_template: false,
    is_draft: false,
    shared_ids: [""],
    editor_ids: [""],
    assigned_ids: [""],
    classroom_ids: [""],
    institute_id: "",
    permission: "viewer",
  },
  isSidebarClosed: false,
  openedMilestones: [],
  dashboard: {},
  calView: "month",
  calTitle: dayjs().format("MMMM YYYY"),
  assignView: "assignedTo",
};

export const layoutStateSlice = createSlice({
  name: "layoutState",
  initialState: initialState,
  reducers: {
    setSelectedSchedule: (state, { payload }: PayloadAction<FixedScheduleData>) => {
      state.selectedSchedule = payload;
    },
    setIsSidebarClosed: (state, { payload }: PayloadAction<boolean>) => {
      state.isSidebarClosed = payload;
    },
    setOpenedMilestones: (state, { payload }: PayloadAction<string[]>) => {
      state.openedMilestones = payload;
    },
    setDashboard: (state, { payload }: any) => {
      state.dashboard = payload;
    },
    setCalView: (state, { payload }: PayloadAction<CalViewType>) => {
      state.calView = payload;
    },
    setCalTitle: (state, { payload }: PayloadAction<string>) => {
      state.calTitle = payload;
    },
    setAssignView: (state, { payload }: PayloadAction<AssignedType>) => {
      state.assignView = payload;
    },
    resetLayoutState: (state) => Object.assign(state, initialState),
  },
});

export const layoutStateSelector = (state: RootState) => state.layoutState;
export const {
  setSelectedSchedule,
  setIsSidebarClosed,
  resetLayoutState,
  setOpenedMilestones,
  setDashboard,
  setCalView,
  setCalTitle,
  setAssignView,
} = layoutStateSlice.actions;
