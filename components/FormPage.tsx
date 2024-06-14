import styles from "./FormPage.module.scss";
const FormPage = () => {
  return (
    <div className={styles.form}>
      <h2 className={styles.formHead}>Billing Details</h2>
      <form>
        <div className={styles.formName}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input name="firstName" type="text" />
          </div>
          <div className={styles.last}>
            <label htmlFor="lastName">Last Name</label>
            <input name="lastName" type="text" />
          </div>
        </div>
        <div>
          <label htmlFor="companyName">Company Name(Optional)</label>
          <input name="companyName" type="text" />
        </div>
        <div>
          <label htmlFor="country">Country/Region</label>
          <input name="country" type="text" />
        </div>
        <div>
          <label htmlFor="street">Street address</label>
          <input name="street" type="text" />
        </div>
        <div>
          <label htmlFor="town">Town/City</label>
          <input name="town" type="text" />
        </div>
        <div>
          <label htmlFor="province">Province</label>
          <input name="province" type="text" />
        </div>
        <div>
          <label htmlFor="zipcode">Zip Code</label>
          <input name="zipcode" type="text" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input name="phone" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input name="email" type="text" />
        </div>
        <div>
          <input type="text" />
        </div>
      </form>
    </div>
  );
};

export default FormPage;
