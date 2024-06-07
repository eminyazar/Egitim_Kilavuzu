import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import './LinkTable.css';

function LinkTable() {
  return (

    <div className="table-container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>***</th>
            <th>SINIFLAR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Çaylak</td>
            <td><Link to="/class1">1. Sınıf</Link></td>
          </tr>
          <tr>
            <td>Acemi</td>
            <td><Link to="/class2">2. Sınıf</Link></td>
          </tr>
          <tr>
            <td>Usta</td>
            <td><Link to="/class3">3. Sınıf</Link></td>
          </tr>
          <tr>
            <td>Büyük Usta</td>
            <td><Link to="/class4">4. Sınıf</Link></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default LinkTable;
