import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import AppContent from './AppContent';
import Header from '@components/Header';
import Footer from '@components/Footer';
import SiderLayout from '@components/SiderLayout';
import BreadcrumbLayout from '@components/BreadcrumbLayout';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

function App({ ...props }) {
  const [collapsed, setCollapsed] = useState(window.innerWidth < 768); // Đặt collapsed dựa trên kích thước màn hình

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 768); // Cập nhật collapsed khi kích thước thay đổi
    };

    window.addEventListener('resize', handleResize); // Lắng nghe sự kiện resize
    return () => {
      window.removeEventListener('resize', handleResize); // Dọn dẹp sự kiện khi component unmount
    };
  }, []);

  const navigate = useNavigate(); // Để điều hướng
  const location = useLocation(); // Truy cập thông tin về URL hiện tại
  const params = useParams(); // Truy cập các tham số URL

  React.useEffect(() => {
    // Sử dụng navigate, location, params
  }, [navigate, location, params]);

  return <div className="font-bold">
    <Layout style={{ minHeight: '100vh' }}>
      <SiderLayout collapsed={collapsed} setCollapsed={(e) => setCollapsed(e)}/>
      <Layout>
        <Header collapsed={collapsed} setCollapsed={(e) => setCollapsed(e)}/>
        <BreadcrumbLayout />
        <AppContent />
        <Footer/>
      </Layout>
    </Layout>
    
  </div>;
}

function mapStateToProps(store) {
  return { };
}

const mapDispatchToProps = {
};
  

export default (connect(mapStateToProps, mapDispatchToProps)(App));
