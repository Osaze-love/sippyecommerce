import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={styles.footerSection}>
        <div className={styles.footerAddress}>
          <p className={styles.footerColor}>
            400 University Drive Suite 200 Coral Gables,
            <br />
            FL 33134 USA
          </p>
        </div>
        <div className={styles.footerLinks}>
          <div>
            <p className={styles.footerColor}>Links</p>
            <p className={styles.footerLink}>Home</p>
            <p className={styles.footerLink}>Shop</p>
            <p className={styles.footerLink}>About</p>
            <p className={styles.footerLink}>Contact</p>
          </div>
          <div>
            <p className={styles.footerColor}>Help</p>
            <p className={styles.footerLink}>Payment Options</p>
            <p className={styles.footerLink}>Returns</p>
            <p className={styles.footerLink}>Privacy Policies</p>
          </div>
        </div>
        <div>
          <p className={styles.footerColor}>Newsletter</p>
          <div className={styles.footerNewsletter}>
            <p>Enter your Email Address</p>
            <div>SUBSCRIBE</div>
          </div>
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.footerEnd}>
        <p>2022 Meubel House. All rights reverved</p>
      </div>
    </>
  );
};

export default Footer;
