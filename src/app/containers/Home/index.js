import React from 'react';
import { connect } from 'react-redux';

function Home({ ...props }) {
  return <div className="font-bold">
    heheheho1233
  </div>;
}

function mapStateToProps(store) {
  return { };
}

const mapDispatchToProps = {
};
  

export default (connect(mapStateToProps, mapDispatchToProps)(Home));
