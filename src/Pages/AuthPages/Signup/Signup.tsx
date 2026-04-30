import { useForm, type SubmitHandler } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import useAuth from "../../../hooks/AuthHook/useAuth";
import { toast } from "react-toastify";
interface FormInput {
  name: string;
  email: string;
  photo: FileList;
  password: string;
}

const Signup = () => {
  const { createUser, user } = useAuth();
  const { register, handleSubmit } = useForm<FormInput>();
  console.log(user);
  const handleSignin: SubmitHandler<FormInput> = async (data) => {
    try {
      const result = await createUser(data.email, data.password);
      toast.success("User signed in successfully.");
    } catch (error) {
      console.error(error);
      toast.error("something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center p-4">
      {/* Card Container: Using bg-white to pop against base-100 background */}
      <div className="card w-full max-w-md bg-white shadow-xl border border-base-300">
        <div className="card-body">
          {/* Header Section */}
          <div className="text-center mb-8">
            <Link
              to={"/"}
              className="text-3xl font-bold text-primary tracking-tight"
            >
              Learners Care
            </Link>
            <p className="text-base-content/70 mt-2">
              Start your learning journey today
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignin)}>
            {/* Full Name Input - নতুন যোগ করা হয়েছে */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold text-base-content">
                  Full Name
                </span>
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="John Doe"
                className="input input-bordered w-full focus:input-primary transition-all"
                required
              />
              {/* text-base-content: থিম থেকে অটোমেটিক ডার্ক টেক্সট কালার নিবে */}
            </div>

            {/* Email Input */}
            <div className="form-control w-full mt-4">
              <label className="label">
                <span className="label-text font-semibold text-base-content">
                  Email Address
                </span>
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="name@example.com"
                className="input input-bordered w-full focus:input-primary transition-all"
                required
              />
              {/* focus:input-primary: Highlights border with your #1A73E8 on click */}
            </div>

            {/* profile photo */}
            <div className="form-control w-full mt-3">
              <label className="label">
                <span className="label-text font-semibold text-base-content">
                  Profile Photo
                </span>
              </label>
              <input
                {...register("photo")}
                type="file"
                className="file-input file-input-bordered file-input-primary w-full bg-base-100"
                accept="image/*"
              />
              {/* file-input-primary: ফাইল সিলেক্ট করার বাটনটি তোমার দেওয়া নীল (#1A73E8) রঙে দেখাবে */}
            </div>

            {/* Password Input */}
            <div className="form-control w-full mt-4">
              <label className="label">
                <span className="label-text font-semibold text-base-content">
                  Password
                </span>
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full focus:input-primary transition-all"
                required
              />
              <label className="label mt-1">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-primary"
                >
                  Forgot password?
                </a>
              </label>
            </div>

            {/* sign in Button: Uses your primary brand color */}
            <div className="form-control mt-4">
              <button className="btn btn-primary w-full text-white text-lg font-bold">
                Signin
              </button>
            </div>
          </form>

          {/* Divider with Muted Text */}
          <div className="divider text-base-content/40 text-sm">OR</div>

          {/* Social Login: Neutral style */}
          <button className="btn hover:btn-neutral w-full flex items-center gap-2 font-medium">
            <FcGoogle size={22} />
            Continue with Google
          </button>

          {/* Footer: Uses Secondary color (#34A853) for the Call to Action */}
          <p className="text-center mt-4 text-base-content/80 text-sm">
            Already have an account?
            <Link
              to="/login"
              className="text-secondary font-bold hover:underline ml-1"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
