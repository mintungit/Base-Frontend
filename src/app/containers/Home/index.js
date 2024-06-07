import React from 'react';
import { connect } from 'react-redux';

function Home({ ...props }) {
  return <div className="font-bold">
    hehehehê
  </div>;
}

function mapStateToProps(store) {
  return { };
}

const mapDispatchToProps = {
};
  

export default (connect(mapStateToProps, mapDispatchToProps)(Home));
