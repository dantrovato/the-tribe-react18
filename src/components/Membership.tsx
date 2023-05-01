import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";

// import { useState } from "react";

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

const Membership = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    console.log(data);
    try {
      await fetch("/.netlify/functions/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });
      console.log("Form submitted successfully!");
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <p className="m-5 text-muted text-center">
        {/* Submit your details for membership */}
        Site under construction. For now email the below details to
        plasticsoup@yahoo.co.uk
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        name="contact"
        method="POST"
        data-netlify="true"
        // action="https://app.netlify.com/sites/thetribe/functions/sendEmail"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div className="m-5">
          <label htmlFor="firstName" className="form-label text-muted">
            First Name
          </label>
          <input
            {...register("firstName")}
            id="firstName"
            name="firstName"
            type="text"
            className="form-control"
          />
          {errors.firstName && (
            <p className="text-danger">{errors.firstName.message}</p>
          )}
        </div>
        <div className="m-5">
          <label htmlFor="lastName" className="form-label text-muted">
            Last Name
          </label>
          <input
            {...register("lastName")}
            id="lastName"
            name="lastName"
            type="text"
            className="form-control"
          />
        </div>
        <div className="m-5">
          <label htmlFor="socialMedia" className="form-label text-muted">
            Social Media
          </label>
          <input
            {...register("socialMedia")}
            id="socialMedia"
            name="socialMedia"
            type="text"
            className="form-control"
          />
        </div>
        <div className="m-5">
          <label htmlFor="email" className="form-label text-muted">
            Email
          </label>
          <input
            {...register("email")}
            id="email"
            name="email"
            type="email"
            className="form-control"
          />
        </div>
        <div className="m-5">
          <label htmlFor="phoneNumber" className="form-label text-muted">
            Phone Number
          </label>
          <input
            {...register("phoneNumber")}
            id="phoneNumber"
            name="phoneNumber"
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
