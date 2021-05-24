import * as Yup from "yup";
import {withFormik } from "formik";
import styles from "./CheckoutForm.module.scss";
import { connect } from "react-redux";
import { setUserDataAC } from "../../redux/checkoutForm/user-action-creators";
import { cleartCartArtsAC } from "../../redux/items/items-action-creators";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  age: Yup.number().required("Required"),
  address: Yup.string().required("Required"),
})

const MyForm = props => {
  const {
    // values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  return (
    <form
      onSubmit={handleSubmit}
      className={styles["form-container"]}
    >
      <div className={styles["field-group"]}>
        <label htmlFor="name" className={styles["label"]}>Name:</label>
        <input
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          // value={values.name}
          name="name"
          className={styles["field"]}
        />
        {errors.name && touched.name && <div id="feedback" className={styles["error-message"]}>{errors.name}</div>}
      </div>
      <div className={styles["field-group"]}>
        <label htmlFor="lastname" className={styles["label"]}>Last name:</label>
        <input
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          // value={values.name}
          name="lastname"
          className={styles["field"]}
        />
        {errors.lastname && touched.lastname && <div id="feedback" className={styles["error-message"]}>{errors.lastname}</div>}
      </div>
      <div className={styles["field-group"]}>
        <label htmlFor="age" className={styles["label"]}>Age:</label>
        <input
          type="number"
          onChange={handleChange}
          onBlur={handleBlur}
          // value={values.name}
          name="age"
          className={styles["field"]}
        />
        {errors.age && touched.age && <div id="feedback" className={styles["error-message"]}>{errors.age}</div>}
      </div>
      <div className={styles["field-group"]}>
        <label htmlFor="address" className={styles["label"]}>Address:</label>
        <input
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          // value={values.name}
          name="address"
          className={styles["field"]}
        />
        {errors.address && touched.address && <div id="feedback" className={styles["error-message"]}>{errors.address}</div>}
      </div>
      <div className={styles["field-group"]}>
        <label htmlFor="phone" className={styles["label"]}>Phone:</label>
        <input
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          // value={values.name}
          name="phone"
          className={styles["field"]}
        />
        {errors.phone && touched.phone && <div id="feedback" className={styles["error-message"]}>{errors.phone}</div>}
      </div>
      <button type="submit" className={styles["submit-btn"]}>Checkout</button>
    </form>
  );
};

const CheckoutEnhancedForm = withFormik({
  validationSchema,
  mapPropsToValues: () => ({ name: '' }),
  handleSubmit: (values, {props}) => {
    console.log("User Data: ", props.userData);
    const cartItems = props.items.filter(
      item => props.cartItemsArts.includes(item.articul)
    )
    console.log("Cart Items: ", cartItems)
    props.clearCartArts();
    props.setUserData(values);
    localStorage.setItem("cartItemsArts", "");
  },
  displayName: 'CheckoutForm',
})(MyForm);

const mapStateToProps = (state) => {
  return {
    items: state.itemsData.items,
    cartItemsArts: state.itemsData.cartItemsArts,
    userData: state.userData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserData: (userData) => dispatch(setUserDataAC(userData)),
    clearCartArts: () => dispatch(cleartCartArtsAC()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutEnhancedForm);