import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

function AddProductsForm() {
  let [user, setUser] = useState({ img: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (userData) => {
    userData.image = user.img;
    console.log(userData);
  };

  const handleChange = (e) => {
    setUser({ img: e.target.files[0].name });
  };

  return (
    <div className="container mx-auto">
      <div className="row">
        <div className="col-11 col-sm-8 col-md-8 mx-auto">
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
              <label>How Old Is The Product (In Years)</label>
              <input
                type="text"
                className="form-control"
                {...register("old", { required: true })}
              />
              {errors.old?.type === "required" && (
                <p className="text-danger">*Year is required</p>
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
            <div className="mb-3">
              <label>Quality</label>
              <select
                className="form-control"
                {...register("quality", { required: true })}
              >
                <option value="very good" className="form-control">
                  Very Good
                </option>
                <option value="good" className="form-control">
                  Good
                </option>
                <option value="medium" className="form-control">
                  Medium
                </option>
                <option value="new" className="form-control">
                  New
                </option>
                <option value="few" className="form-control">
                  Used only few times
                </option>
              </select>
              {errors.quality?.type === "required" && (
                <p className="text-danger">*Quality is required</p>
              )}
            </div>
            <div className="mb-3">
              <label>Choose an image:</label>
              <input
                type="file"
                accept="image/png, image/jpeg"
                className="form-control-file"
                onChange={handleChange}
              />
              {errors.image?.type === "required" && (
                <p className="text-danger">*Image is required</p>
              )}
            </div>
            <button className="btn btn-primary float-right" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProductsForm;
