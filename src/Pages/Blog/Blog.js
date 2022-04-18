import React from "react";
import { Accordion, Table } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="container mt-5 mx-auto">
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Q1. Difference between authorization and authentication?
          </Accordion.Header>
          <Accordion.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Authorization</th>
                  <th>Authentication</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Authentication verifies who the user is.</td>
                  <td>
                    Authorization determines what resources a user can access.
                  </td>
                </tr>
                <tr>
                  <td>Confirms users are who they say they are</td>
                  <td>Give users permissions to access a resourse</td>
                </tr>
                <tr>
                  <td>
                    Authentication works through passwords, one-time pins,
                    biometric information, and other information provided or
                    entered by the user.
                  </td>
                  <td>
                    Authorization works through settings that are implemented
                    and maintained by the organization.
                  </td>
                </tr>
                <tr>
                  <td>
                    Example: By verifying their identity, employees can gain
                    access to an HR application that includes their personal pay
                    information, vacation time, and 401K data.
                  </td>
                  <td>
                    Example: Once their level of access is authorized, employees
                    and HR managers can access different levels of data based on
                    the permissions set by the organization.
                  </td>
                </tr>
              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Q2. Why are you using firebase? What other options do you have to
            implement authentication?
          </Accordion.Header>
          <Accordion.Body>
            <p>1. STYTCH</p>
            <p>2. Ory</p>
            <p>3. Supabase</p>
            <p>4. Okta</p>
            <p>5. PingIdentity</p>
            <p>6. Keycloak</p>
            <p>7. Frontegg</p>
            <p>8. Authress</p>
            <p>9. Auth0</p>
            <p>10. Amazon Cognito</p>
            <p>11. OneLogin</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Q3. What other services does firebase provide other than
            authentication?
          </Accordion.Header>
          <Accordion.Body>
            <p>1. Realtime database</p>
            <p>2. Remote Config</p>
            <p>3. Firebase ML(Machine Learning)</p>
            <p>4. Cloud Functions</p>
            <p>5. Cloud Messaging</p>
            <p>6. Cloud Storage</p>
            <p>7. Hosting</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
