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
            Firebase Authentication provides backend services, easy-to-use SDKs,
            and ready-made UI libraries to authenticate users to your app. It
            supports authentication using passwords, phone numbers, popular
            federated identity providers like Google, Facebook and Twitter, and
            more. <br />
            Usually, authentication by a server entails the use of a user name
            and password. Other ways to authenticate can be through smart card,
            eye scans, voice recognition, and fingerprints.
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
