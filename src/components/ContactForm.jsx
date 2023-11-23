import { Button, Form, Input, Space } from "antd";
import React from "react";

function ContactForm({ changeTab, patientData, setPatientData }) {
  const [form] = Form.useForm();
  const blockInvalidChar = (e) =>
    ["e", "E", "-"].includes(e.key) && e.preventDefault();

  const onChangeAddress = (e) => {
    if (e.target.value && e.target.value !== "") {
      form.validateFields([
        "address1",
        "cityVillage",
        "stateProvince",
        "country",
      ]);
    }
  };
  const validateAddress = () => {
    const address1 = form.getFieldValue("address1");
    const cityVillage = form.getFieldValue("cityVillage");
    const stateProvince = form.getFieldValue("stateProvince");
    const country = form.getFieldValue("country");
    if (!address1 && !cityVillage && !stateProvince && !country) {
      return Promise.reject("At least one address field must be filled");
    }
    return Promise.resolve();
  };

  const onFinish = (formData) => {
    setPatientData({
      ...patientData,
      address1: formData.address1,
      cityVillage: formData.cityVillage,
      country: formData.country,
      phone: formData.phone,
      postalCode: formData.postalCode,
      stateProvince: formData.stateProvince,
    });
    changeTab("confirm");
  };
  return (
    <Form
      form={form}
      layout="vertical"
      autoComplete="off"
      className="form-wrapper"
      onFinish={onFinish}
    >
      <div className="form-title">What is the patient's address?</div>
      <div className="form-field-wrapper">
        <Form.Item
          name="address1"
          label="Address"
          rules={[{ validator: validateAddress }]}
        >
          <Input onChange={onChangeAddress} />
        </Form.Item>
        <Form.Item
          name="cityVillage"
          label="City/Village"
          rules={[{ validator: validateAddress }]}
        >
          <Input onChange={onChangeAddress} />
        </Form.Item>
        <Form.Item
          name="stateProvince"
          label="State/Province"
          rules={[{ validator: validateAddress }]}
        >
          <Input onChange={onChangeAddress} />
        </Form.Item>
      </div>
      <div className="form-field-wrapper">
        <Form.Item
          name="country"
          label="Country"
          rules={[{ validator: validateAddress }]}
        >
          <Input onChange={onChangeAddress} />
        </Form.Item>
        <Form.Item
          name="postalCode"
          label="Postal Code"
          rules={[{ required: true, message: "Postal Code is required" }]}
        >
          <Input type="number" onKeyDown={blockInvalidChar} min={0} />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Contact Number"
          rules={[{ required: true, message: "Contact Number is required" }]}
        >
          <Input type="number" onKeyDown={blockInvalidChar} min={0} />
        </Form.Item>
      </div>
      <Form.Item className="next-button-wrapper">
        <Space>
          <Button
            type="primary"
            onClick={() => {
              changeTab("demographics");
            }}
            className="next-button"
          >
            Back
          </Button>
          <Button type="primary" htmlType="submit" className="next-button">
            Next
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
}

export default ContactForm;
