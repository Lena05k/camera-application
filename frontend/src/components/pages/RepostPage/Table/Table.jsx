import React, { useState } from 'react';
import {
  Modal,
  Accordion,
} from 'react-bootstrap';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import ModalMap from '../../CameraPage/modals/ModalMap';
import photo from '../../../../assets/powerSupplySupport.jpg';

const rows: GridRowsProp = [
  {
    id: 1,
    col1: 'Photo',
    col2: '23.06.23',
    col3: '15:43:53',
    col4: '3',
    col5: 'нет',
  },
  {
    id: 2,
    col1: 'Photo',
    col2: '24.06.23',
    col3: '12:21:59',
    col4: '1',
    col5: 'ур.3',
  },
  {
    id: 3,
    col1: 'Photo',
    col2: '25.06.23',
    col3: '14:50:18',
    col4: '13',
    col5: 'ур.2',
  },
  {
    id: 4,
    col1: 'Photo',
    col2: '26.06.23',
    col3: '15:43:53',
    col4: '24',
    col5: 'ур.1',
  },
  {
    id: 5,
    col1: 'Photo',
    col2: '26.06.23',
    col3: '16:21:59',
    col4: '25',
    col5: 'ур.3',
  },
  {
    id: 6,
    col1: 'Photo',
    col2: '28.06.23',
    col3: '14:50:18',
    col4: '32',
    col5: 'ур.2',
  },
  {
    id: 7,
    col1: 'Photo',
    col2: '29.06.23',
    col3: '15:43:53',
    col4: '2',
    col5: 'нет',
  },
  {
    id: 8,
    col1: 'Photo',
    col2: '30.06.23',
    col3: '12:21:59',
    col4: '11',
    col5: 'нет',
  },
  {
    id: 9,
    col1: 'Photo',
    col2: '31.06.23',
    col3: '12:50:18',
    col4: '15',
    col5: 'ур.1',
  },
  {
    id: 10,
    col1: 'Photo',
    col2: '01.07.23',
    col3: '12:50:18',
    col4: '16',
    col5: 'нет',
  },
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Имя', width: 150 },
  { field: 'col2', headerName: 'Дата', width: 150 },
  { field: 'col3', headerName: 'Время', width: 150 },
  { field: 'col4', headerName: 'Опора', width: 150 },
  { field: 'col5', headerName: 'Дефекта', width: 150 },
];
const TableRepost = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (params) => {
    setSelectedRow(params.row);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedRow(0);
    setShowModal(false);
  };

  return (
    <>
      <div style={{ height: '500px', width: '100%' }}>
        <DataGrid rows={rows} columns={columns} onRowClick={handleRowClick} />
      </div>
      <Modal size="xl" show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body>
          {selectedRow && (
            <div className="d-flex flex-row justify-content-around align-items-center mt-3">
              <div>
                <img src={photo} alt="" height="400" />
              </div>
              <div className="d-flex flex-column">
                <div className="d-flex flex-row">
                  <p className="fs-4">
                    Дата:
                    {selectedRow.col2}
                  </p>
                  <p className="fs-4 ms-4">
                    Время:
                    {selectedRow.col3}
                  </p>
                </div>
                <div className="d-flex flex-column">
                  <p className="fs-4">
                    Температура: +20
                  </p>
                  <p className="fs-4">
                    Влажность: 80%
                  </p>
                  <p className="fs-4">
                    Давление: 275 мм.рт.ст.
                  </p>
                </div>
                <Accordion defaultActiveKey="0" className="mb-3">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header variant="link" eventKey="0">
                      Oтчет
                    </Accordion.Header>
                    <Accordion.Body eventKey="0">
                      <div className="accordion-body">
                        <p className="fs-4">
                          Опора:
                          {selectedRow.col4}
                        </p>
                        <p className="fs-4">
                          Дефекта:
                          {selectedRow.col5}
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <div>
                  <ModalMap />
                </div>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TableRepost;
