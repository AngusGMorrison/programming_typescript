// You want the ability to book a vacation that starts immediately.
// Update the overloaded reserve function from earlier in this chapter
// with a third call signature that takes just a destination, without
// an explicit start date. Update reserve's implementation to support
// this new overload signature.

type Reservation = {
  destination: string
  from: Date
  to?: Date
};

type Reserve = (destination: string, from?: Date, to?: Date) => Reservation;

const reserve: Reserve = (destination, from = new Date(), to) => {
  return {
    destination,
    from,
    to
  };
};