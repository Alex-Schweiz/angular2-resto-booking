export interface IBooking {
  firstName: string;
  lastName: string;
  phone?: number;
  numberOfPersons: number;
  comment?: string;
  dateOfReservation: string;
  timeOfReservation: string;
  createdAt?: string;
}
