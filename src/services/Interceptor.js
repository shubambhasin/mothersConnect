import { instance } from "../api/Axios";
import { Toaster } from "react-hot-toast";

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
          if (code === 401) {
            console.log("Password incorrect - 401");
          }

          if (code === 404) {
            // notify("Email not registered 404")
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
