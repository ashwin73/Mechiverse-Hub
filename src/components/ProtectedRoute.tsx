import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthUser } from "@/hooks/useAuthUser";
import { Loader } from "lucide-react";

// Only allow @iitbbs.ac.in emails
const ALLOWED_EMAIL_DOMAIN = "@iitbbs.ac.in";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuthUser();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader className="animate-spin w-8 h-8 mr-3" />
        <span className="text-lg">Checking authentication…</span>
      </div>
    );
  }

  // If not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If email is not in the allowed domain
  if (!user.email?.endsWith(ALLOWED_EMAIL_DOMAIN)) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-2 text-red-700">Access Denied</h2>
        <p className="text-muted-foreground mb-2">Please login with your IIT BBS (@iitbbs.ac.in) email address.</p>
        <a href="/login" className="underline text-primary">Go to Login</a>
      </div>
    );
  }

  // Otherwise show content
  return <>{children}</>;
};

export default ProtectedRoute;
