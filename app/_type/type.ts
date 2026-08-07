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
    technicianProfile: null;
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

export type UserRole = "ADMIN" | "TECHNICIAN" | "CUSTOMER";

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

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: number;
  categoryId: string;
  technicianId: string;
  createdAt: string;
  updatedAt: string;
  technician: {
    id: string;
    userId: string;
    bio: string;
    experience: number;
    location: string;
    slots?: any[];
    user?: {
      name?: string;
      email?: string;
      profileImg?: string;
    };
  };
}

export interface ServiceCardProps {
  services: ServiceItem[];
}

export interface PayloadInterface {
  technicianId: string;
  serviceId: string;
  bookingDate: string;
  totalCost: number;
}
 
 interface User {
  name?: string;
  email?: string;
  image?: string;
}

export interface Technician {
  id: string;
  userId: string;
  bio?: string | null;
  experience: number;
  location: string;
  slots: any[];
  user?: User;
}




 export interface BookingItem {
  id: string;
  totalCost: string;
  status: "PENDING" | "COMPLETED" | "CANCELLED" | string;
  bookingDate: string;
  createdAt: string;
  service?: {
    title: string;
    description: string;
    price: number;
  };
  technician?: {
    location: string;
    experience: number;
    user?: {
      name: string;
      email: string;
    };
  };
}



// Booking Nested Object Interface
export interface IBooking {
  id: string;
  customerId: string;
  serviceId: string;
  technicianId: string;
  totalCost: string; // response e string hisebe asche ('600')
  status: "PAID" | "PENDING" | "CANCELLED" | "ACCEPTED"; 
  bookingDate: string; // ISO Date String
  createdAt: string;
  updatedAt: string;
}

// Main Payment History Interface
export interface IPaymentHistory {
  id: string;
  bookingId: string;
  customerId: string;
  status: "PAID" | "UNPAID" | "REFUNDED" | string;
  createdAt: string;
  updatedAt: string;
  booking: IBooking;
}

export interface Message{
  id:string,
  name:string,
  email:string,
  phone:string,
  text:string

}


export interface MessageItem {
  id: string;
  name: string;
  email: string;
  phone: string;
  text: string;
  createdAt: string;
}