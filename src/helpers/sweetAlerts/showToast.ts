import MySwal from "./mySwal";

function showToast(icon?: string, message?: string, time?: number): void {
  const Toast = MySwal.mixin({
    toast: true,
    position: "center-center",
    showConfirmButton: false,
    timer: time || 3000,
    timerProgressBar: true,
    didOpen: (toast: any) => {
      toast.addEventListener("mouseenter", MySwal.stopTimer);
      toast.addEventListener("mouseleave", MySwal.resumeTimer);
    },
  });

  Toast.fire({
    icon: icon || "success",
    title: message || "Thành công",
  });
}

export default showToast;
