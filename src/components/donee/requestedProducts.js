import React from "react";
import { useForm } from "react-hook-form";

function RequestedProducts() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (userData) => {
    console.log(userData);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-8 mx-auto">
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <div className="mb-3">
              <label>Name of Product</label>
              <input
                type="text"
                className="form-control"
                {...register("name", { required: true, minLength: 4 })}
              />
              {errors.name?.type === "required" && (
                <p className="text-danger">*Name is required</p>
              )}
              {errors.name?.type === "minLength" && (
                <p className="text-danger">*minimum length of 4 is required</p>
              )}
            </div>
            <div className="mb-3">
              <label>Category</label>
              <select
                className="form-control"
                {...register("category", { required: true })}
              >
                <option value="electronics" className="form-control">
                  Electronics
                </option>
                <option value="clothing" className="form-control">
                  Clothing
                </option>
                <option value="footwear" className="form-control">
                  FootWear
                </option>
                <option value="food" className="form-control">
                  Food
                </option>
                <option value="books" className="form-control">
                  Books
                </option>
                <option value="medicine" className="form-control">
                  Medicine
                </option>
              </select>
              {errors.category?.type === "required" && (
                <p className="text-danger">*Category is required</p>
              )}
            </div>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RequestedProducts;