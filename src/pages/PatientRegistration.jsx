import React, { useEffect, useState } from "react";
import { Breadcrumb, Layout, Select } from "antd";
import RegistrationFormTabs from "../components/RegistrationFormTabs";
const { Header, Content, Footer } = Layout;

function PatientRegistration() {
  const [selectedHospital, setSelectedHospital] = useState();
  const onChange = (e) => {
    setSelectedHospital(e);
    localStorage.setItem("selectedHospital", e);
  };
  useEffect(() => {
    if (localStorage.getItem("selectedHospital")) {
      setSelectedHospital(localStorage.getItem("selectedHospital"));
    }
  }, []);
  return (
    <>
      <Layout>
        <Header className="page-header">
          <div className="demo-logo">HospitalPlus</div>
          <Select
            onChange={onChange}
            placeholder="Select a hospital"
            value={selectedHospital}
            options={[
              {
                value: "Carenow Hospital",
                label: "Carenow Hospital",
              },
              {
                value: "Hope Hospital",
                label: "Hope Hospital",
              },
              {
                value: "MedStar Hospital Center",
                label: "MedStar Hospital Center",
              },
              {
                value: "Newlife Hospital",
                label: "Newlife Hospital",
              },
            ]}
          />
        </Header>
        <Content className="content-wrapper">
          <Breadcrumb className="breadcrumb-menu">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Register a patient</Breadcrumb.Item>
          </Breadcrumb>
          <Layout className="registration-container">
            <RegistrationFormTabs selectedHospital={selectedHospital} />
          </Layout>
        </Content>
        <Footer className="footer">HospitalPlus ©2023</Footer>
      </Layout>
    </>
  );
}

export default PatientRegistration;
