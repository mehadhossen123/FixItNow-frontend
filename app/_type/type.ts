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
