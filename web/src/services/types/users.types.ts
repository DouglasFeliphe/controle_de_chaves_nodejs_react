export type GetUsersResponse = UsersType[];
export interface PostUserRequest
  extends Omit<UsersType, 'created_at' | 'updated_at'> {}

export type UsersType = {
  registration_number: number;
  name: string;
  course_name: string;
  degree: string;
  shift: string;
  created_at: string;
  updated_at: string;
  image: string;
};
