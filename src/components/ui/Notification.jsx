import { toast } from "react-toastify";

export const showNotification = (type, message) => {
  const settings = JSON.parse(localStorage.getItem("appSettings"));

  // if notifications disabled
  if (!settings?.notifications) return;

  if (type === "success") {
    toast.success(message);
  }

  if (type === "error") {
    toast.error(message);
  }

  if (type === "info") {
    toast.info(message);
  }
};