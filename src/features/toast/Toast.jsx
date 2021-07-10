import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
export const Toast = () => {
  const notify = (text) => toast.error(text);

  const { showToast, toastMessage } = useSelector((state) => {
    return state.toast;
  });
  if (showToast) {
    notify(toastMessage);
  }
  return (
    <>
      <div>{showToast && <Toaster />}</div>
    </>
  );
};

export default Toast;
