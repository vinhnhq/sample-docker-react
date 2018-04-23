import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
} from '../../modules/counter';

const Home = props => (
  <div className="container">
    <h3 className="s-title">Home</h3>
    <div className="docs-note">
      <p>Count: {props.count}</p>
    </div>

    <div className="columns">
      <div className="column col-md-12">
        <button
          className="btn btn-link"
          onClick={props.increment}
          disabled={props.isIncrementing}
        >
          Increment
        </button>
      </div>
      <div className="column col-md-12">
        <button
          className="btn btn-link"
          onClick={props.incrementAsync}
          disabled={props.isIncrementing}
        >
          Increment Async
        </button>
      </div>
      <div className="column col-md-12">
        <button
          className="btn btn-link"
          onClick={props.decrement}
          disabled={props.isDecrementing}
        >
          Decrement
        </button>
      </div>
      <div className="column col-md-12">
        <button
          className="btn btn-link"
          onClick={props.decrementAsync}
          disabled={props.isDecrementing}
        >
          Decrement Async
        </button>
      </div>
      <div className="column col-xs-12">
        <button className="btn btn-link" onClick={() => props.changePage()}>
          Go to about page via redux
        </button>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push('/about-us'),
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
