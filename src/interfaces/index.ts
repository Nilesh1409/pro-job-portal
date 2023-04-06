export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  date_joined: Date;
  role: string;
  gender: string;
  email: string;
}

export interface ITag {
  id: number;
  name: string;
}

export interface IApplicantJob extends IJob {
  job_tags: ITag[];
}

export interface IApplicant {
  id: number;
  job_id: number;
  applied_user: IUser;
  job: IApplicantJob;
  status: string;
  comment: string;
  created_at: Date;
}

export interface IJob {
  id: number;
  _id: number;
  title: string;
  description: string;
  location: string;
  type: string | number;
  category: string;
  last_date: Date;
  company_name?: string;
  company?: string;
  company_description?: string;
  website?: string;
  created_at: Date;
  filled: boolean;
  salary: number;
  // tags: Array<number> | undefined
  user: IUser;
  applicant: IApplicant | undefined;
  job_tags?: ITag[];
  tags?: ITag[];
  tag: string;
  total_candidates?: number;
}

export interface ICategory {
  id: number | undefined;
  name: string;
  slug: string;
  icon: string;
  // total_jobs: number
}
