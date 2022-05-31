import React from "react";
import { useForm } from "react-hook-form";

function Feedback() {
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
      <div className="mx-0 mx-sm-auto">
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className="text-center">
            <p>
              <strong>How is the Product</strong>
            </p>
          </div>

          <div className="text-center mb-3">
            <div className="d-inline mx-3">Bad</div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
                {...register("rating")}
              />
              <label className="form-check-label">1</label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
                {...register("rating")}
              />
              <label className="form-check-label">2</label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="option3"
                {...register("rating")}
              />
              <label className="form-check-label">3</label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio4"
                value="option4"
                {...register("rating")}
              />
              <label className="form-check-label">4</label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio5"
                value="option5"
                {...register("rating")}
              />
              <label className="form-check-label">5</label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio6"
                value="option6"
                {...register("rating")}
              />
              <label className="form-check-label">6</label>
            </div>
            <div className="d-inline me-4">Excellent</div>
          </div>
          <div className="col-8 mx-auto">
            <label>Leave a Comment</label>
            <textarea
              className="form-control"
              {...register("feedback")}
            ></textarea>
          </div>
          <div className="text-end">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Feedback;
