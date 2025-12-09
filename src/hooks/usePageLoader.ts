import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const usePageLoader = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Initial load
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Route change load
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return loading;
};
