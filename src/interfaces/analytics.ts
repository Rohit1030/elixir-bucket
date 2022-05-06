import { ExtendedTaskAssignmentData } from "interfaces";

export interface MinimalUserData {
  _id: string;
  profile_pic: string;
  name: string;
  [key: string]: any;
}

export type ExtendMinimalUser<T extends {}> = T & MinimalUserData;

export interface User {
  type: string;
  _id: string;
  name: string;
  email: string;
  profile_pic: string;
  collegeId: string;
  collegeName: string;
  departmentId: string;
  enrollment_number: number;
  departmentName?: string;
}
export interface DeptStudentsData {
  _id: string;
  name: string;
  email: string;
  profile_pic: string;
  enrollment_number: number;
  teachers: User[];
  associated_teachers: User[];
  schedules: number;
  milestones: number;
  tasks: number;
  milestones_completed: number;
  tasks_completed: number;
  tasks_ongoing: number;
  tasks_overdue: number;
  type: string;
}

export interface Department {
  _id: string;
  name: string;
  school_name?: string;
  description: string;
}

export interface DeptTeachersData {
  _id: string;
  name: string;
  email: string;
  profile_pic: string;
  enrollment_number: number;
  students: User[];
  others: User[];
  schedules: number;
  milestones: number;
  tasks: number;
  departmentsManaged: Department[];
  type: string;
}

export interface DeptStudentData extends DeptStudentsData {
  assignments: {
    completed: ExtendedTaskAssignmentData[];
    ongoing: ExtendedTaskAssignmentData[];
    overdue: ExtendedTaskAssignmentData[];
    upcoming: ExtendedTaskAssignmentData[];
  };
  department: Department;
}

export interface DeptTeacherData extends DeptTeachersData {
  assignments: {
    completed: ExtendedTaskAssignmentData[];
    ongoing: ExtendedTaskAssignmentData[];
    overdue: ExtendedTaskAssignmentData[];
    upcoming: ExtendedTaskAssignmentData[];
  };
  department: Department;
}

interface Approver extends MinimalUserData {
  email: string;
  type: "student" | "teacher" | "admin";
}
export interface AdminUserData extends Omit<User, "departmentId"> {
  departmentId: Department;
  approvers: Approver[];
}