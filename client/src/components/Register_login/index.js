import React from "react";
import MyButton from "../utils/button";
import Login from "./Login";
const RegisterLogin = () => {
  return (
    <div className="page_wrapper">
      <div className="container">
        <div className="register_login_container">
          <div className="left">
            <h1>New Customers</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              voluptatum, sapiente hic nesciunt minus earum similique quas
              officiis nisi porro aperiam laborum maiores rerum et vel alias
              itaque labore iste.Facere modi sapiente est nulla amet ducimus
              alias. Sequi totam quas aut, eius modi quis. Vel esse, quaerat
              vitae excepturi provident eos beatae. Hic sunt ipsam magnam,
              officia quibusdam consequatur?
            </p>
            <MyButton
              type="default"
              title="Create an account"
              linkTo="/register"
              addStyles={{
                margin: "10px 0 0 0"
              }}
            />
          </div>
          <div className="right">
            <h2>Registered Customers</h2>
            <p>If you have an account, Please log in!</p>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLogin;
