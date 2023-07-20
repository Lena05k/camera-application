import * as React from 'react';
import { Card } from 'react-bootstrap';
import Table from './Table/Table';

const ReportPage = () => {

  return (
    <div className="position-relative d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <div className="">
        <Card className="col p-5 text-center">
          <Card.Body>
            <Table />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ReportPage;