import { NotesData, PermissionGroupData } from "interfaces";
import { ExtendMinimalUser } from "./analytics";

export interface ChatObjectData {
  textTime: any;
  attachment: {
    folder_id: string;
    size: number;
    filePath: string;
    file_name: string;
    file_id: string;
    type: string;
  };
  metaRef: string;
  content: string;
  authorId: string;
  authorName: string;
}

export interface WorkspaceData {
  user_name: string;
  email: string;
  user_id: string;
  user_type: "teacher" | "admin" | "student";
  profile_picture: string;
  storageUsed: number;
  insitiute_account: boolean;
  is_superadmin: boolean;
  insitute_admin: string;
  intitute_logo: string;
  short_code: string;
  permissions: PermissionGroupData;
  configuration: {
    workspace_type: string;
    footer: string;
  };
  institute_name?: string;
  department_name?: string;
}

export interface AllNotesApiData {
  notes: NotesData[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  page: number;
  totalObjects: number;
  totalPages: number;
  prevPage: number | null;
  nextPage: number | null;
}

export interface RecordData {
  _id: string;
  user_id: string;
  title: string;
  description: string;
  revision_date: string;
  files: any[];
  approval_status: string;
  approving_date: string;
  remarks: string;
  approver_id?: ExtendMinimalUser<{ email: string }>;
}

export type PaginationData<T extends {}> = T & {
  hasNextPage?: boolean;
  hasPrevPage?: boolean;
  limit?: number;
  nextPage?: null | boolean;
  prevPage?: null | boolean;
  page?: number;
  totalObjects?: number;
  totalPages?: number;
};

export interface ApiTemplateData {
  _id: string;
  institute_id: string;
  for_students: boolean;
  is_template: boolean;
  is_draft: boolean;
  name: string;
  term: number;
  description: string;
  expected_start_month: number;
  expected_end_month: number;
  expected_duration_years: number;
  createdAt: string;
}