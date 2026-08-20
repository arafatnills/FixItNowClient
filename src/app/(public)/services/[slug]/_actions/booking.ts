export type BookingTypes = {
  serviceId: string;
  technicianId: string;
  scheduledAt?: string;
};

export const confirmBooking = ({
  technicianId,
  serviceId,
  scheduledAt,
}: BookingTypes) => {
  const payload = {
    technicianId,
    serviceId,
    scheduledAt,
  };

  console.log({ payload }, "Im server action");

  return technicianId;
};
