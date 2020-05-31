import React, { Component } from "react";
import { Button, Dropdown, Form, Input } from "semantic-ui-react";
import CalenderComponent from "../CalenderComponent/CalenderComponent";

const Created = () => {
  return (
    <div className="CreatedContainer">
      <Dropdown text="Created">
        <Dropdown.Menu>
          <Dropdown.Item>
            <Form>
              <Form.Group widths="equal">
                <div>
                  <Form.Select label="From Date">
                    {/* <Input
                    type="text"
                    placeholder="enter date"
                    label="From Date"
                  /> */}
                    <CalenderComponent />
                  </Form.Select>
                </div>
                <div>
                  <Form.Select label="Till Date">
                    {/* <Input
                    type="text"
                    placeholder="enter date"
                    label="Till Date"
                  /> */}
                    <CalenderComponent />
                  </Form.Select>
                </div>
              </Form.Group>
              <Button positive>Save</Button>
            </Form>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
export default Created;
