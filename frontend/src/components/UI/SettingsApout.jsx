import React from 'react';
import { Button } from 'react-bootstrap';

export const Version = () => (
  <div className="text-center fs-4 my-3">
    <p>Версия X.X.X. (XXXXXXXXX)</p>
    <p>от XX месяц XXXX г.</p>
  </div>
);

export const ContactDevelopers = () => {
  return (
    <Button variant="link" className="text-black link-offset-2 link-underline link-underline-opacity-0">
      <span className="fs-3 text-black">Написать разработчикам</span>
    </Button>
  );
};

export const LicenseAgreement = () => {
  return (
    <Button variant="link" className="text-black link-offset-2 link-underline link-underline-opacity-0">
      <span className="fs-3 text-black">Лицензионное соглашение</span>
    </Button>
  );
};

export const PrivacyPolicy = () => {
  return (
    <Button variant="link" className="text-black link-offset-2 link-underline link-underline-opacity-0">
      <span className="fs-3 text-black">Политика конфиденциальности</span>
    </Button>
  );
};

export const TermsOfUse = () => {
  return (
    <Button variant="link" className="link-offset-2 link-underline link-underline-opacity-0">
      <span className="fs-3 text-black">Условия использования</span>
    </Button>
  );
};