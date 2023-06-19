import React from "react";
import { useForm } from "react-hook-form";
import "./Contact.css";
import Aside from "../../components/aside/Aside";

const Contact = () => {
  React.useEffect(() => {
    var map;

    DG.then(function () {
      map = DG.map("map", {
        center: [54.98, 82.89],
        zoom: 13,
      });
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div>
      <div style={{ marginTop: "30px" }}>
        <h3 style={{ textAlign: "center" }}>CONTACT US</h3>

        <div
          id="map"
          style={{
            marginTop: "20px",
            width: "1200px",
            height: "500px",
          }}
        ></div>

        <div>
          <div className="call">СВЯЖИТЕСЬ С НАМИ</div>
          <div className="emailBlock">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="name">Имя</label>
              <br />
              <br />
              <input
                id="name"
                {...register("name", { required: true, maxLength: 30 })}
              />
              {errors.name && errors.name.type === "required" && (
                <span style={{ color: "red" }}>This is required</span>
              )}
              <br />
              <br />
              <label htmlFor="email">Эл.почта </label>
              <br />
              <br />
              <input
                id="email"
                {...register("email", { required: true, maxLength: 30 })}
              />
              {errors.email && errors.email.type === "required" && (
                <span style={{ color: "red" }}>This is required</span>
              )}
              <br />
              <br />
              <label htmlFor="tel">Контактный телефон</label>
              <br />
              <br />
              <input
                id="tel"
                {...register("tel", { required: true, maxLength: 30 })}
              />
              {errors.tel && errors.tel.type === "required" && (
                <span style={{ color: "red" }}>This is required</span>
              )}

              {errors.name && errors.name.type === "maxLength" && (
                <span>Max length exceeded</span>
              )}
              <br />
              <br />

              <input
                style={{
                  height: 40,
                  color: "white",
                  borderRadius: 12,
                  background: "#e4002b",
                  border: "none",
                }}
                type="submit"
              />
            </form>
          </div>
          <Aside />
        </div>

      
      </div>
    </div>
  );
};

export default Contact;
