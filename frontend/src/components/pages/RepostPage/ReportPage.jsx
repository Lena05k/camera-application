import * as React from 'react';
import { Card } from 'react-bootstrap';
import TableRepost from './Table/Table';
import Header from './bloks/Header';

const ReportPage = () => {

  return (
    <div className="position-relative d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <Header />
      <div className="">
        <Card className="col p-5 text-center">
          <Card.Body>
            <TableRepost />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ReportPage;