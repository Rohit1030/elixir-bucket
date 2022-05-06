export interface UserData {
  _id?: string;
  name?: string;
  email?: string;
  password?: string;
  profile_pic?: string;
  type?: "student" | "teacher" | "admin";
  institute_name?: string;
  department_name?: string;
  permissionGroup?: PermissionGroupData;
}

export interface ApiUserData {
  _id: string;
  name: string;
  email: string;
  password: string;
  profile_pic: string;
  type: "student" | "teacher" | "admin";
  institute_name: string;
  department_name: string;
  permissionGroup: PermissionGroupData;
}

export interface ScheduleData {
  _id?: string;
  name?: string;
  description?: string;
  for_students?: boolean;
  term?: number;
  expected_start_month?: number;
  created_by?: string;
  is_template?: Boolean;
  is_draft?: Boolean;
  shared_ids?: string[];
  editor_ids?: string[];
  assigned_ids?: string[];
  classroom_ids?: string[];
  institute_id?: string;
}

export interface FixedScheduleData {
  _id: string;
  name: string;
  description: string;
  for_students: boolean;
  term: number;
  expected_start_month: number;
  created_by: string;
  is_template: Boolean;
  is_draft: Boolean;
  shared_ids: string[];
  editor_ids: string[];
  assigned_ids: string[];
  classroom_ids: string[];
  institute_id: string;
  permission: "owner" | "editor" | "viewer" | "assignee";
  name_override?: null | string;
}

export interface MilestoneData {
  _id?: string;
  name?: string;
  description?: string;
  rank?: number;
  year?: string;
  term?: string;
  schedule_id?: string;
  created_by?: string;
  special_category?: string;
  terminal_milestone?: boolean;
  end_date?: {
    month?: number;
    year?: number;
  };
}

export interface CommentPriorityData {
  name: string;
  color: string;
  tag: string;
  priority: number;
}

export interface CommentData {
  category: "task" | string;
  content: string;
  priority: number;
  timestamp: Date;
  user_id: string;
  user_name: string;
  _id: string;
}

export interface MinimumUserData {
  name: string;
  _id: string;
  profile_pic: string;
  email: string;
}
export interface ApiScheduleData {
  _id: string;
  name: string;
  description: string;
  for_students: boolean;
  term: number;
  expected_start_month: number;
  created_by: string;
  is_template: boolean;
  is_draft: boolean;
  shared_ids: MinimumUserData[];
  assigned_ids: MinimumUserData[];
  editor_ids: string[];
  classroom_ids: string[];
  institute_id: string;
  permission?: "owner" | "editor" | "viewer" | "assignee";
  assignment_status?: string;
  name_override?: null | string;
}

export interface ApiMilestoneData {
  _id: string;
  name: string;
  description: string;
  rank: number;
  year: string;
  term: string;
  schedule_id: string;
  created_by: string;
}

export interface ApiTaskData {
  _id: string;
  name: string;
  message: string;
  taskType?: string;
  filesAttached: Array<string | any>;
  linkAttachment: Array<string>;
  deadLine: string;
  isSubmitted: boolean;
  assignedTo: string;
  assignedBy: string;
  createdAt: string;
  createdBy: {
    _id: string;
    name: string;
    email: string;
    profile_pic: string;
  };
  updatedBy: string;
  scheduleID: FixedScheduleData;
  milestoneID: ApiMilestoneData;
  comments: CommentData[];
  gradingScale: "percentage" | "grade" | "text" | "four" | "five" | "ten";
  showGrade: boolean;
  qualifyGrade: boolean;
  is_trash: boolean;
  startDate?: string;
}

export interface TaskData {
  // taskId: string;
  name?: string;
  message?: string;
  taskType?: string;
  filesAttached?: Array<string | any>;
  linkAttachment?: Array<string>;
  startDate?: string;
  deadLine?: string;
  isSubmitted?: boolean;
  assignedTo?: string;
  assignedBy?: string;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: string;
  updatedBy?: string;
  scheduleID?: string;
  milestoneID?: string;
  comments?: CommentData[];
  gradingScale?: "percentage" | "grade" | "text" | "four" | "five" | "ten";
  showGrade?: boolean;
  qualifyGrade?: string | number;
  is_trash?: boolean;
  _id?: string;
}

export interface UpdateTaskData {
  name: string;
  message: string;
  taskType: string;
  filesAttached: Array<string | any>;
  linkAttachment: Array<string>;
  deadLine: string;
  isSubmitted: boolean;
  assignedTo: string;
  assignedBy: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  scheduleID: string;
  milestoneID: string;
  comments: CommentData[];
  gradingScale: "percentage" | "grade" | "text" | "four" | "five" | "ten";
  showGrade: boolean;
  qualifyGrade: string | number;
  is_trash: boolean;
  _id: string;
  startDate?: string;
}

export interface PermissionGroupData {
  account: string;
  analytics: string;
  assignTask: string;
  classroom: string;
  institute: string;
  level: number;
  milestone: string;
  name: string;
  schedule: string;
  selfTask: string;
  taskTemplate: string;
  user: string;
  _id: string;
  permissionGroup: string;
}

export interface ClassroomData {
  name: string;
  description: string;
  instructors?: string[];
  students?: string[];
}

export interface ApiTaskAssignmentData {
  assignedAt: string;
  submittedAt: null | Date;
  isSubmitted: boolean;
  filesAttached: string[];
  linkAttached: string[];
  submission?: string;
  grade: null | string | number;
  remarks: string;
  _id: string;
  taskId: string;
  assignedTo: {
    _id: string;
    name: string;
    email: string;
    profile_pic: string;
  };
  assignedBy: {
    _id: string;
    name: string;
    email: string;
    profile_pic: string;
  };
  milestoneId: string;
  scheduleId: string;
  comments: CommentData[];
  startedAt: string;
  subtasks?: {
    user_id: string;
    title: string;
    is_completed: boolean;
    date?: string;
  }[];
}

export interface ExtendedTaskAssignmentData extends Omit<ApiTaskAssignmentData, "taskId"> {
  taskId: ApiTaskData;
}

export interface TaskTypeData {
  name: string;
  // | "Assignment"
  // | "Link"
  // | "Presentation"
  // | "Word Document"
  // | "PDF Only"
  // | "Spreadsheet"
  // | "Online Event"
  // | "Lecture"
  // | "Online Assessment"
  // | "Study Material";
  // key: "rtf" | "link" | "ppt" | "doc" | "pdf" | "xls";
  color: string;
  config?: {
    showGrade: boolean;
    gradingScale: boolean;
    qualifyGrade: boolean;
    filesAttached: boolean;
    linkAttachment: boolean;
    startDate: boolean;
  };
  labels?: {
    [key in keyof TaskData]: string;
  };
}

export interface GradeTypeData {
  type: "step" | "range";
  name: "percentage" | "grade" | "text" | "four" | "five" | "ten";
  display: string;
  scale: string[] | number[];
}

export interface ManagerData {
  type: string;
  _id: string;
  profile_pic: string;
  name: string;
  email: string;
  collegeId: string;
  collegeName: string;
  departmentId: string;
  departmentName: string;
  enrollment_number: number;
}

export interface DeptData {
  school_name: null | string;
  managers: ManagerData[];
  _id: string;
  parent_id: string;
  name: string;
  level: number;
  description?: string;
  created_by: string;
}

export interface WidgetData {
  identifier: string;
  title: string;
  description: string;
  type: string;
  data: any;
  rank: number;
  row: number;
  colspan: string;
  update_frequency: number;
}

export interface FeedbackData {
  type: string;
  content: string;
  author_name: string;
  author_email: string;
  author_type: string;
  collegeName: string;
}
export interface NotesData {
  content: string;
  deadline: string;
  _id: string;
  is_public: boolean;
  author: string;
  createdAt: string;
  updatedAt: string;
}
