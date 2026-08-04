export interface UserProfileResponse {
  success: boolean;
  message: string;
  data: {
    id: string;
    name: string;
    email: string;
    role: string;
    isActive: boolean;
    status: string;
    createdAt: string;
    updatedAt: string;
    stripeCustomerId: string | null;
    technicianProfile:null;
  };
}


export interface RegisteredUserData {
  id: string;
  name: string;
  email: string;
  role: "CUSTOMER" | "TECHNICIAN" | "ADMIN" | string;
  isActive: boolean;
  status: "ACTIVE" | "INACTIVE" | "BLOCKED" | string;
  createdAt: string;
  updatedAt: string;
  stripeCustomerId: string | null;
}


export interface RegisterResponse {
  success: boolean;
  message: string;
  data: RegisteredUserData;
}


export interface CategoryData {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}


export interface PostCategoryResponse {
  success: boolean;
  message: string;
  data?: CategoryData; // ব্যর্থ হলে data নাও থাকতে পারে, তাই optional (?) রাখা হয়েছে
}

export interface Category {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}



export type UserRole = 'ADMIN' | 'TECHNICIAN' | 'CUSTOMER';


export type UserStatus = "ACTIVE" | "BLOCKED";


export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  isActive: boolean;
  status: UserStatus;
  createdAt: string; // ISO Date String
  updatedAt: string; // ISO Date String
  stripeCustomerId: string | null;
}