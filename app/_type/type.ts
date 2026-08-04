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