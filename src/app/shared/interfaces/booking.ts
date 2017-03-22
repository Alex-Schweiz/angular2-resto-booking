export interface IBooking {
  key?: string;
  firstName: string;
  lastName: string;
  phone?: number;
  email?: string;
  numberOfPersons: number;
  comment?: string;
  dateOfReservation: string;
  timeOfReservation: string;
  createdAt?: string;
}
