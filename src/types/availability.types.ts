export type Availability = {
  id: string;
  day: string;
  startTime: string;
  endTime: string;

  tutorId: string;
};

export enum WeekDay {
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY",
}

export type CreateAvailabilityFormValues = {
  day: WeekDay;
  startTime: string;
  endTime: string;
};

export type CreateAvailabilityPayload = {
  day: string;
  startTime: string;
  endTime: string;
};

export type UpdateAvailabilityFormValues = {
  day?: string;
  startTime?: string;
  endTime?: string;
};
