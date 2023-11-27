import React, { useState } from "react";
import { Tabs } from "antd";
import DemographicForm from "./DemographicForm";
import ContactForm from "./ContactForm";
import ConfirmTab from "./ConfirmTab";

function RegistrationFormTabs({ selectedHospital }) {
  const [activeTab, setActiveTab] = useState("demographics");
  const [patientData, setPatientData] = useState({
    givenName: "",
    middleName: "",
    familyName: "",
    birthdate: "",
    birthdateEstimated: false,
    gender: "",
    preferred: false,
    address1: "",
    cityVillage: "",
    stateProvince: "",
    country: "",
    postalCode: "",
    phone: "",
  });
  const changeTab = (key) => {
    setActiveTab(key);
  };

  return (
    <>
      <Tabs
        onTabClick={() => false}
        type="card"
        activeKey={activeTab}
        className="form-tabs"
        items={[
          {
            label: "Demographics",
            key: "demographics",
            children: (
              <DemographicForm
                changeTab={changeTab}
                patientData={patientData}
                setPatientData={setPatientData}
              />
            ),
          },
          {
            label: "Contact Info",
            key: "contact_info",
            children: (
              <ContactForm
                changeTab={changeTab}
                patientData={patientData}
                setPatientData={setPatientData}
              />
            ),
          },
          {
            label: "Confirm",
            key: "confirm",
            children: (
              <ConfirmTab
                patientData={patientData}
                selectedHospital={selectedHospital}
                changeTab={changeTab}
              />
            ),
          },
        ]}
      />
    </>
  );
}

export default RegistrationFormTabs;
