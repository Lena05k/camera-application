import {
  Button,
  Modal,
  Row,
  Col,
  Tab,
  ListGroup,
} from 'react-bootstrap';
import React, { useState } from 'react';
import {
  Color,
  Language,
  MapView,
  Microphone,
  Theme,
} from '../containers/SettingsInterface';
import {
  MapRotation,
  ScaleRuler,
  ZoomButtons,
} from '../containers/SettingsMap';
import {
  ContactDevelopers,
  LicenseAgreement,
  PrivacyPolicy,
  TermsOfUse,
  Version,
} from '../containers/SettingsApout';

const ModalSetting = (props) => {

  return (
    <Modal
      { ...props }
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
          <Row>
            <Col sm={4}>
              <ListGroup className="my-auto">
                <ListGroup.Item action variant="light" href="#link1" className="fs-3">
                  Карта и интерфейс
                </ListGroup.Item>
                <ListGroup.Item action variant="light" href="#link2" className="fs-3">
                  Очистить кэш
                </ListGroup.Item>
                <ListGroup.Item action variant="light" href="#link3" className="fs-3">
                  О приложении
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="#link1">
                  <div className="bg-secondary rounded-3">
                    <p className="mx-3 py-2 text-white fs-4">Общее</p>
                  </div>
                  <div className="mx-3">
                    <div className="mx-3">
                      <Theme />
                      <Color />
                      <MapView />
                      <Language />
                      <Microphone />
                    </div>
                    <div className="bg-secondary rounded-3">
                      <p className="mx-3 py-2 text-white fs-4">Карта</p>
                    </div>
                    <div className="mx-3">
                      <ZoomButtons />
                      <ScaleRuler />
                      <MapRotation />
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">Вы уверены?</Tab.Pane>
                <Tab.Pane eventKey="#link3">
                  <div className="">
                    <Version />
                    <div className="position-relative text-black">
                      <ContactDevelopers />
                      <LicenseAgreement />
                      <PrivacyPolicy />
                      <TermsOfUse />
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" size="lg" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalSetting;
