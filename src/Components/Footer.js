import React, {Component} from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="#23222b" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Infinity Bot List</h5>
            <p>
              Appeal a Ban from our Official <a href="https://infinitybotlist.com/join">Discord Server</a>.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://docs.botlist.site">Documentation</a>
              </li>
              <li className="list-unstyled">
                <a href="https://infinitybotlist.com/join">Discord</a>
              </li>
              <li className="list-unstyled">
                <a href="https://github.com/InfinityBotList">GitHub</a>
              </li>
              <li className="list-unstyled">
                <a href="https://twitter.com/InfinityBotList">Twitter</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Support</h5>
            <ul>
              <li className="list-unstyled">
                <a href="mailto:support@infinitybotlist.com">Email Us</a>
              </li>
              <li className="list-unstyled">
                <a href="https://blog.botlist.site/">Our Blog</a>
              </li>
              <li className="list-unstyled">
                <a href="https://status.infinitybotlist.com">Status Page</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://infinitybotlist.com"> Infinity Bot List </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;
