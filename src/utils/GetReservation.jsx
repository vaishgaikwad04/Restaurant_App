export const getReservations = () =>
  JSON.parse(localStorage.getItem("reservations")) || [];