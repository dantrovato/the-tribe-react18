import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";

interface Props {
  onSubmit: (data: FieldValues) => void;
}

const schema = z.object({
  firstName: z.string().min(2, { message: "Oi oi. 2 letters min" }),
  lastName: z.string().min(2, { message: "Oi oi. 3 letters min" }),
  socialMedia: z.string().min(5, { message: "Oi oi. Is this valid??" }),
  email: z.string().email({ message: "Oi oi. Is that a valid email??" }),
  phoneNumber: z.string().regex(/^\+44\s?\d{10}$/),
});

type FormData = z.infer<typeof schema>;

const Membership = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const tempHandleSubmit = (data: FieldValues) => {
    onSubmit(data);
    reset();
    alert(
      "Site under construction. Details will not yet be added. In the meantime you can text your details to 07984290884"
    );
  };

  return (
    <>
      <h1 className="m-5 text-muted text-center">
        Submit your details for membership
      </h1>
      <form onSubmit={(event) => tempHandleSubmit(event)}>
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
          {errors.firstName && (
            <p className="text-danger">{errors.firstName.message}</p>
          )}
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
          <label htmlFor="socialMedia" className="form-label">
            Social Media
          </label>
          <input
            {...register("socialMedia")}
            id="socialMedia"
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
            type="email"
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
            type="tel"
            className="form-control"
          />
        </div>
        <div className="m-5">
          <button disabled={!isValid} className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Membership;
