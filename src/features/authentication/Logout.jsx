import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <button disabled={isLoading} onClick={logout}>
      Deconectare
      {!isLoading ? <HiArrowRightOnRectangle /> : "Se incarca..."}
    </button>
  );
}

export default Logout;
