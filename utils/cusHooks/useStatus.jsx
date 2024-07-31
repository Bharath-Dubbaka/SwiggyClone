import { useState } from "react";

const useStatus = () => {
   const [status, setStatus] = useState(true);
   window.addEventListener("offline", () => {
      setStatus(false);
   });
   window.addEventListener("online", () => {
      setStatus(true);
   });
   return status;
};

export default useStatus;
