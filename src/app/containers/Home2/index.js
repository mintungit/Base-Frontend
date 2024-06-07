import React from 'react';
import { connect } from 'react-redux';

function Home2({ ...props }) {
  return <div className="font-bold">
    huhuhuhu
  </div>;
}

function mapStateToProps(store) {
  return { };
}

const mapDispatchToProps = {
};
  

export default (connect(mapStateToProps, mapDispatchToProps)(Home2));
