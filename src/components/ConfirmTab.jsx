import { Button, Space, notification } from "antd";
import axios from "axios";
import React, { useState } from "react";
import moment from "moment";
function ConfirmTab({ patientData, selectedHospital, changeTab }) {
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const submitForm = async () => {
    if (!selectedHospital) {
      notification.error({ message: "Please select a hospital.." });
    } else {
      setLoading(true);
      let payload = Object.assign({}, patientData);
      payload.hospital = selectedHospital;
      await axios
        .post("http://localhost:3001/api/patients", payload)
        .then((res) => {
          notification.success({ message: "Patient Data saved successfully" });
          setActive(true);
          setLoading(false);
        })
        .catch((err) => {
          notification.error({ message: "Error saving patient data" });
          console.log(err);
          setLoading(false);
        });
    }
  };
  return (
    <div className="form-wrapper">
      <div className="confirm-data-wrapper">
        <div className="cofirm-data-label">Name</div>
        <div className="cofirm-data-value">
          {patientData.givenName ? patientData.givenName : ""}{" "}
          {patientData.middleName ? patientData.middleName : ""}{" "}
          {patientData.familyName ? patientData.familyName : ""}
        </div>
        <div className="cofirm-data-label">Unidentified Patient</div>
        <div className="cofirm-data-value">
          {patientData.preferred ? "Yes" : "No"}
        </div>
        <div className="cofirm-data-label">BirthDate</div>
        <div className="cofirm-data-value">
          {moment(patientData.birthdate).format("ddd MMM DD YYYY").toString()}
        </div>
        <div className="cofirm-data-label">Estimated birthdate</div>
        <div className="cofirm-data-value">
          {patientData.birthdateEstimated ? "Yes" : "No"}
        </div>
        <div className="cofirm-data-label">Gender</div>
        <div className="cofirm-data-value">
          {patientData.gender === "M" ? "Male" : "Female"}
        </div>
        <div className="cofirm-data-label">Address</div>
        <div className="cofirm-data-value">
          {patientData.address1 ? patientData.address1 + ", " : ""}
          {patientData.cityVillage ? patientData.cityVillage + ", " : ""}
          {patientData.stateProvince ? patientData.stateProvince + ", " : ""}
          {patientData.country ? patientData.country + ", " : ""}
          {patientData.postalCode ? patientData.postalCode : ""}
        </div>
        <div className="cofirm-data-label">Contact Number</div>
        <div className="cofirm-data-value">{patientData.phone}</div>
      </div>
      <div className="next-button-wrapper">
        <Space>
          {active && (
            <Button
              type="primary"
              onClick={() => {
                window.location.href = "/";
              }}
              className="next-button"
            >
              Add New Patient
            </Button>
          )}
          <Button
            type="primary"
            onClick={() => {
              changeTab("contact_info");
            }}
            className="next-button"
            disabled={active}
          >
            Back
          </Button>
          <Button
            type="primary"
            loading={loading}
            onClick={() => {
              submitForm();
            }}
            className="next-button"
            disabled={active}
          >
            Submit
          </Button>
        </Space>
      </div>
    </div>
  );
}

export default ConfirmTab;
