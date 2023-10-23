export type GetReservationsResponse = ReservationsType[];

export type ReservationsType = {
  id: number;
  key_name: string;
  key_number: number;
  user_name: string;
  user_registration_number: number;
  created_at: string;
  returned_at: string;
  // status: boolean
};
