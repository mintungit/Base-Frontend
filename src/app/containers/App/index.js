import React from 'react';
import { connect } from 'react-redux';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import AppContent from './AppContent';

function App({ ...props }) {

  const navigate = useNavigate(); // Để điều hướng
  const location = useLocation(); // Truy cập thông tin về URL hiện tại
  const params = useParams(); // Truy cập các tham số URL

  React.useEffect(() => {
    // Sử dụng navigate, location, params
  }, [navigate, location, params]);

  return <div className="font-bold">
    <AppContent />
  </div>;
}


function mapStateToProps(store) {
  return { };
}

const mapDispatchToProps = {
};
  

export default (connect(mapStateToProps, mapDispatchToProps)(App));
