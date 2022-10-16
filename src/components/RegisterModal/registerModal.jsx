import React from "react";
import "./registerModal.css";
import { Close } from "@mui/icons-material";
import { useForm } from "react-hook-form";

/**
 * The Modal will open when user click Add Customer button
 * @param {boolean} setIsOpen 
 * @returns 
 */
const RegisterModal = ({ setIsOpen, onClickSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      age: "",
      status: "",
    },
  });

  return (
    <>
      <div className={"darkBG"} onClick={() => setIsOpen(false)} />
      <div className={"centered"}>
        <div className={"modalCustom"}>
          <div className={"modalHeader"}>
            <h5 className={"heading"}>Customer Registration</h5>
          </div>
          <button className={"closeBtn"} onClick={() => setIsOpen(false)}>
            <Close style={{ marginBottom: "-3px" }} />
          </button>
          <div className={"modalContent"}>
            <form onSubmit={handleSubmit((data) => onClickSubmit(data))}>
              <div style={{ marginBottom: 5 }}>
                <span>Name:{"\t"}</span>
                <input
                  {...register("name", { required: true, maxLength: 100 })}
                  placeholder="Name"
                />
                {errors.firstName &&
                  (errors.firstName.type === "required" ? (
                    <p>Name is required. </p>
                  ) : (
                    <p>Exceeded name length</p>
                  ))}
              </div>
              <div style={{ marginBottom: 5 }}>
                <span>Email:{"\t"}</span>
                <input
                  {...register("email", {
                    required: true,
                    maxLength: 100,
                    // eslint-disable-next-line
                    pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  })}
                  placeholder="example@mail.com"
                />
                {errors.email &&
                  (errors.email.type === "required" ? (
                    <p>Email is required. </p>
                  ) : (
                    <p>Invalid email</p>
                  ))}
              </div>
              <div style={{ marginBottom: 5 }}>
                <span>Mobile No:{"\t"}</span>
                <input
                  {...register("phone", {
                    required: true,
                    maxLength: 100,
                    pattern: /^[0-9]*$/g,
                  })}
                  placeholder="023344228248"
                />
                {errors.phone &&
                  (errors.phone.type === "required" ? (
                    <p>Phone is required. </p>
                  ) : (
                    <p>Invalid number</p>
                  ))}
              </div>

              <div style={{ marginBottom: 5 }}>
                <span>Status:{"\t"}</span>
                <select {...register("status")}>
                  <option value="">Select...</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="widow">Widow</option>
                </select>
              </div>

              <div>Age:{"\t"}</div>
              <div>
                <input {...register("age")} type="radio" value="<18" />
                <span>Below 18 years old</span>
              </div>
              <div>
                <input {...register("age")} type="radio" value=">=18<25" />
                <span>18 to 25 years old</span>
              </div>
              <div>
                <input {...register("age")} type="radio" value=">25<=30" />
                <span>26 to 30 years old</span>
              </div>
              <div>
                <input {...register("age")} type="radio" value=">30<=60" />
                <span>31 to 60 years old</span>
              </div>
              <div>
                <input {...register("age")} type="radio" value=">60" />
                <span>Above 60 years old</span>
              </div>

              <input type="submit" className="submitBtn" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterModal;
