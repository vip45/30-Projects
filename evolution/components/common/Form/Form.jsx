import React from 'react'
import styles from './Form.module.css'

const Form = () => {
  return (
    <div className={styles.form_main}>
      <div>
        <h3>Contact us</h3>
        <div className={styles.main_form}>
          <div className={styles.inputDiv}>
            <input type="text" placeholder="Name" />
          </div>
          <div className={styles.input_divider}>
            <div className={styles.inputDiv}>
              <input type="text" placeholder="Phone Number" />
            </div>
            <div className={styles.inputDiv}>
              <input type="text" placeholder="Email-ID" />
            </div>
          </div>
          <div className={styles.inputDiv}>
            <input type="text" placeholder="City" />
          </div>

          <div className={styles.inputSelect}>
            <select className="w-100 " name="" id="">
              <option value="" selected>
                Query
              </option>
              <option value="One">One</option>
              <option value="two">two</option>
              <option value="three">three</option>
            </select>
          </div>
        </div>
        <div className={styles.form_btns}>
          <button className={styles.btn1}>Connect on WHATSAPP</button>
          <button className={styles.btn2}>Connect on WHATSAPP</button>
        </div>
      </div>
    </div>
  );
}

export default Form