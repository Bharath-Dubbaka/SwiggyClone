import { useRouteError } from "react-router-dom";

const Error = () => {
   const err = useRouteError();
   console.log(err);
   return (
      <div className="errorPage">
         <h1>Oops!!! Something went Wrong</h1>
         <h3>
            {err.status} / {err.statusText}
         </h3>
         <h3>{err.error.message}</h3>
      </div>
   );
};

export default Error;
