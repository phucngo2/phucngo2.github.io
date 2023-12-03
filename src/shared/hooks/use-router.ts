import { useLocation, useNavigate } from "react-router-dom";

export const useRouter = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return { location, navigate };
};
