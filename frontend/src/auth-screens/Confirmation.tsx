import { useSearchParams, useNavigate } from "react-router-dom";
import { CheckCircle, XCircle } from "lucide-react"; // or use any icon lib

export default function Confirmation() {
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");
  const navigate = useNavigate();

  const isSuccess = status === "success";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      {isSuccess ? (
        <>
          <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
          <h1 className="text-2xl font-aeonik">Account Registered Successfully!</h1>
          <p className="text-gray-600 mt-2 max-w-md font-manrope">
            Thank you for choosing Affitnity. Your new account has been registered. Log in your new account and start
            training with us!
          </p>
          <button
            onClick={() => navigate("/login-v2")}
            className="font-dmsans mt-6 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-emerald transition"
          >
            Go to Log in
          </button>
        </>
      ) : (
        <>
          <XCircle className="w-16 h-16 text-red-500 mb-4" />
          <h1 className="text-2xl font-aeonik">Registration Failed</h1>
          <p className="text-gray-600 mt-2 max-w-md font-manrope">
            We're sorry, something went wrong while registering your account. Please try again or contact support if the
            issue persists.
          </p>
          <button
            onClick={() => navigate("/register-v2")}
            className="font-dmsans mt-6 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
          >
            Back to Register
          </button>
        </>
      )}
    </div>
  );
}
