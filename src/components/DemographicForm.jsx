import { Button, Checkbox, DatePicker, Form, Input, Select } from "antd";
import React, { useState } from "react";
import moment from "moment";

function DemographicForm({ changeTab, patientData, setPatientData }) {
  const [form] = Form.useForm();
  const [isUndefinedPatient, setIsUndefinedPatient] = useState(false);

  const disabledDate = (current) => {
    return current && current > moment().endOf("day");
  };

  const changeUndefined = (e) => {
    setIsUndefinedPatient(e.target.checked);
    if (e.target.checked) {
      form.resetFields(["givenName", "middleName", "familyName"]);
    }
  };

  const onFinish = (formData) => {
    setPatientData({
      ...patientData,
      givenName: formData.givenName,
      middleName: formData.middleName,
      familyName: formData.familyName,
      birthdate: formData.birthdate,
      birthdateEstimated: formData.birthdateEstimated ? true : false,
      preferred: formData.preferred ? true : false,
      gender: formData.gender,
    });
    changeTab("contact_info");
  };

  return (
    <>
      <Form
        form={form}
        layout="vertical"
        autoComplete="off"
        className="form-wrapper"
        onFinish={onFinish}
      >
        <div className="form-title">What's the patient's name?</div>
        <div className="form-field-wrapper">
          <Form.Item
            name="givenName"
            label="Given"
            rules={
              !isUndefinedPatient
                ? [
                    {
                      required: true,
                      message: "Please enter given name.",
                    },
                    {
                      pattern: /^(?! +$)[a-zA-Z ]+$/,
                      message: "Given name can not have numbers.",
                    },
                  ]
                : []
            }
          >
            <Input disabled={isUndefinedPatient} />
          </Form.Item>
          <Form.Item
            name="middleName"
            label="Middle"
            rules={
              !isUndefinedPatient
                ? [
                    {
                      pattern: /^(?! +$)[a-zA-Z ]+$/,
                      message: "Middle name can not have numbers.",
                    },
                  ]
                : []
            }
          >
            <Input disabled={isUndefinedPatient} />
          </Form.Item>
          <Form.Item
            name="familyName"
            label="Family Name"
            rules={
              !isUndefinedPatient
                ? [
                    {
                      required: true,
                      message: "Please enter given name.",
                    },
                    {
                      pattern: /^(?! +$)[a-zA-Z ]+$/,
                      message: "Family name can not have numbers.",
                    },
                  ]
                : []
            }
          >
            <Input disabled={isUndefinedPatient} />
          </Form.Item>
        </div>
        <Form.Item name="preferred" valuePropName="checked">
          <Checkbox onChange={changeUndefined}>Unidentified Patient</Checkbox>
        </Form.Item>
        <div className="horizontal-form-field-wrapper">
          <div>
            <div className="form-title">What's the patient's birth date?</div>
            <div className="horizontal-form-field">
              <Form.Item
                name="birthdate"
                label="Select Birthdate"
                rules={[
                  {
                    required: true,
                    message: "Please select birthdate.",
                  },
                ]}
              >
                <DatePicker
                  className="form-datepicker"
                  disabledDate={disabledDate}
                />
              </Form.Item>
            </div>
            <Form.Item name="birthdateEstimated" valuePropName="checked">
              <Checkbox>Selected Estimated Birthdate</Checkbox>
            </Form.Item>
          </div>
          <div>
            <div className="form-title">What's the patient's gender?</div>
            <div className="horizontal-form-field">
              <Form.Item
                name="gender"
                label="Select Gender"
                rules={[
                  {
                    required: true,
                    message: "Please select gender.",
                  },
                ]}
              >
                <Select>
                  <Select.Option value="M">Male</Select.Option>
                  <Select.Option value="F">Female</Select.Option>
                </Select>
              </Form.Item>
            </div>
          </div>
        </div>
        <Form.Item className="next-button-wrapper">
          <Button type="primary" htmlType="submit" className="next-button">
            Next
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default DemographicForm;
