import React from "react";
import { Breadcrumb, Layout } from "antd";
import RegistrationFormTabs from "../components/RegistrationFormTabs";
const { Header, Content, Footer } = Layout;

function PatientRegistration() {
  return (
    <>
      <Layout>
        <Header className="page-header">
          <div className="demo-logo">OpenMRS</div>
        </Header>
        <Content className="content-wrapper">
          <Breadcrumb className="breadcrumb-menu">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Register a patient</Breadcrumb.Item>
          </Breadcrumb>
          <Layout className="registration-container">
            <RegistrationFormTabs />
          </Layout>
        </Content>
        <Footer className="footer">OpenMRS ©2023</Footer>
      </Layout>
    </>
  );
}

export default PatientRegistration;
