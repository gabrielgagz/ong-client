import React from 'react';
import Sidebar from './Sidebar/Sidebar';

const BackOfficeLayout = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col-md-8 col-lg-9 col-xl-10">
          {children ? children : <h2>Utiliza la barra para navegar</h2>}
        </div>
      </div>
    </div>
  );
};

export default BackOfficeLayout;