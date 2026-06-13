import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const ADMIN_ID = import.meta.env.VITE_ADMIN_ID;

export default function AdminRoute({ children }) {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded) return <div>Loading...</div>;

  console.log("SIGNED IN:", isSignedIn);
  console.log("USER:", user);
  console.log("USER ID:", user?.id);

  if (!isSignedIn) {
    return <Navigate to="/" replace />;
  }

  const isAdmin = user?.id === ADMIN_ID;

  return isAdmin ? children : <Navigate to="/" replace />;
}