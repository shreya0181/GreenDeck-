import React, { Component } from "react";
import { Button, Dropdown, Form, Input } from "semantic-ui-react";
const options = [
  { key: ">", text: "more than", value: "male" },
  { key: "<", text: "less than", value: "female" },
  { key: "=", text: "equal", value: "other" },
];
const Discount = () => {
  return (
    <div className="discountContainer">
      <Dropdown text="Discount">
        <Dropdown.Menu>
          <Dropdown.Item>
            <Form>
              <Form.Group widths="equal">
                <Form.Select label="value">
                  <Input
                    type="text"
                    placeholder="enter percent"
                    label="value"
                  />
                </Form.Select>
                <Form.Select
                  fluid
                  label="operator"
                  options={options}
                  placeholder="operator"
                />
              </Form.Group>
              <Button positive>Save</Button>
            </Form>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
export default Discount;
