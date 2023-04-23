import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const schema = z.object({
  firstName: z.string().min(2, { message: "Oi oi. 2 letters min" }),
  lastName: z.string().min(2, { message: "Oi oi. 3 letters min" }),
  email: z.string().email({ message: "Oi oi. Is that a valid email??" }),
  phoneNumber: z.string().regex(/^\+44\s?\d{10}$/),
});

type FormData = z.infer<typeof schema>;

const Membership = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <form>
      <div className="m-5">
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input
          {...register("firstName")}
          id="firstName"
          type="text"
          className="form-control"
        />
      </div>
      <div className="m-5">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          {...register("lastName")}
          id="lastName"
          type="text"
          className="form-control"
        />
      </div>
      <div className="m-5">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          {...register("email")}
          id="email"
          type="text"
          className="form-control"
        />
      </div>
      <div className="m-5">
        <label htmlFor="phoneNumber" className="form-label">
          Phone Number
        </label>
        <input
          {...register("phoneNumber")}
          id="phoneNumber"
          type="text"
          className="form-control"
        />
      </div>
      <div className="m-5">
        <button disabled={!isValid} className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Membership;
