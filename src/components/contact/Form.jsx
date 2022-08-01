import React from 'react';
import { Formik } from 'formik';
import {HandySvg} from 'handy-svg';
import s from "./Form.module.css";
import iconError from '../../images/form/worning.svg';
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Form = () => {
  const notify = () => toast.success("Thank you! Your form submission has been received", {
        position: toast.POSITION.TOP_CENTER
      });
  

  return (
    <div className={s.container}>
      <h2 className={s.title}>Request Callback</h2>
      <Formik
        initialValues={{ name: '', email: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email =
              <span className={s.error}>
                <HandySvg
                  src={iconError}
                  className={s.icon}
                  width="25"
                  height="25"
                />
                This is a required field
              </span>;
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = <span className={s.error}>
              <HandySvg
                src={iconError}
                className={s.icon}
                width="25"
                height="25"
              />
              Invalid email address
            </span>;
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            notify();
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <input type="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder="Enter your name"
                className={s.input} />
              {errors.name && touched.name && errors.name}
            </p>
            <p>
              <input type="email" name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Enter email*"
                className={s.input} />
              {errors.email && touched.email && errors.email}
            </p>
            <p>
              <button type="submit" disabled={isSubmitting} className={s.btn}>Send</button>
            </p>
              <ToastContainer/>     
          </form>
        )}
      </Formik>
    </div>);
};

export default Form;