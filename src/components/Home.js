import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Circuit from "../images/circuit.png";
import { database } from "./firebaseConfig";
import Thermometer from "react-thermometer-component";
function Home() {
  const [temp, setTemp] = useState("");
  const [hum, setHum] = useState("");
  const { loginstatus } = useSelector((state) => state.loginReducer);
  useEffect(() => {
    let starCountRef = database.ref("/DHT11/Temperature/");
    let starCountRef2 = database.ref("/DHT11/Humidity/");
    starCountRef.on("value", (snapshot) => {
      const data = snapshot.val();
      let arr = Object.keys(data);
      let single = arr[arr.length - 1];
      setTemp(data[`${single}`]);
    });
    starCountRef2.on("value", (snapshot) => {
      const data = snapshot.val();
      let arr = Object.keys(data);
      let single = arr[arr.length - 1];
      setHum(data[`${single}`]);
      console.log(temp, hum);
    });
  });

  return (
    <>
      <div className="container">
        {!loginstatus && (
          <div className="row">
            <div className="col-sm-3">
              <h1 className="mt-3">
                Check <span className="text-primary"> Senensors</span> Data by a
                single
                <span className="text-primary"> Click!!</span>
              </h1>
              <div className="mt-5">
                <Link to="/login" className="btn btn-primary">
                  Login To check{" "}
                </Link>
              </div>
            </div>
            <div className="col-sm-9">
              <img
                src={Circuit}
                style={{ width: "1200px", height: "550px" }}
                className="img-fluid mt-3"
                alt=""
              />
            </div>
          </div>
        )}

        {loginstatus && (
          <>
            <div className="row my-5">
              <div className="col-sm-4 offset-sm-2">
                <div>
                  <Thermometer
                    theme="light"
                    value={temp.slice(0, 5)}
                    max="100"
                    steps="3"
                    format="°C"
                    size="large"
                    height="300"
                  />
                  <h1 className="mx-auto mt-2">Temperature</h1>
                </div>
              </div>
              <div className="col-sm-4 offset-sm-2">
                <Thermometer
                  theme="light"
                  value={hum.slice(0, 2)}
                  max="100"
                  steps="3"
                  format="%"
                  size="large"
                  height="300"
                />
                <h1 className="mx-auto mt-2">Humidity</h1>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Home;
