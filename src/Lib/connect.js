import { connect as reactReduxConnect } from 'react-redux';

// the name of the static methods we map
const METHOD_LIST = ['mapStateToProps', 'mapDispatchToProps', 'mergeProps'];

// returns true if Component has a method with the specified name and false
// otherwise
const hasMethod = (name, Component) => (
  typeof Component === 'function' &&
  Component.hasOwnProperty(name) &&
  typeof Component[name] === 'function'
);

// returns a method that returns either the method for the component with the
// given name or null
const methodOrNull = (Component) => (
  (name) => (
      hasMethod(name, Component) ? Component[name] : null
  )
);

// connects the Component to the redux store by looking for the presence of
// static methods with canonical names
const connect = (Component) => (
  reactReduxConnect.apply(
    null,
    METHOD_LIST.map(methodOrNull(Component))
  )(Component)
);

export default connect;
