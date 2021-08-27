import { instance } from "../api/Axios";
import { Toaster } from "react-hot-toast";
import { notify } from "./notification";

function Interceptor() {
  const addErrorInterceptor = () => {
    instance.interceptors.response.use(
      (response) => {
        if (response !== undefined) {
          // console.log("from interceptors response", response);
          return response;
        }
      },
      (error) => {
        console.log("from interceptors error", error);
        if (error.response) {
          const code = error.response.status;
          if (code === 400) {
            notify("Password incorrect ❌")
            console.log("Password incorrect - 401");
          }

          if (code === 404) {
            notify("Email not registered, please register first ! ❌")
            console.log("Email not registered 404");
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
