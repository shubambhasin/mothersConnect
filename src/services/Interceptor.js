import { instance } from "../api/Axios";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { hideToast, showToast } from "../features/toast/toastSlice";
function Interceptor() {
  const dispatch = useDispatch();

  const addErrorInterceptor = () => {
    instance.interceptors.response.use(
      (response) => {
        if (response !== undefined) {
          console.log("from interceptors response", response);
          return response;
        }
      },
      (error) => {
        console.log("from interceptors error", error);
        if (error.response) {
          const code = error.response.status;
          if (code === 401) {
            console.log("Password incorrect - 401");
            dispatch(showToast("PASSWORD INCORRECT"));
            dispatch(hideToast());
          }

          if (code === 404) {
            // notify("Email not registered 404")
            console.log("Email not registered 404");
            dispatch(showToast("EMAIL NOT REGISTERED"));
            dispatch(hideToast());
          }
        }
      }
    );
  };

  addErrorInterceptor();

  return (
    <>
      <div>
        <Toaster />
      </div>
    </>
  );
}

export default Interceptor;
