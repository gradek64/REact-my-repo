//=========================================================
// it is vital to export {connect } for react-redux mock
// to work therefore I took a factory approach to expose connect
//
// explanation:
// factory: is a function that returns an object with this bind to
// function body.
//
//
//=========================================================

/**
 * Example Usage:
 *
 * @ connect structure has to have below structure
 * @ (mapStateToProps, mapDispatchToProps) => (reactComponent)
 * @ or
 * @ better for testing jest.fn() callback function as below
 */
const reactRedux = {
  connect: jest.fn(
    (mapStateToProps, mapDispatchToProps) => (reactComponent) => {
      return {
        mapStateToProps,
        mapDispatchToProps,
        component: reactComponent,
      };
    }
  ),
  provider: ({ children }) => children,
};
const connect = reactRedux.connect;
const provider = reactRedux.provider;

export { connect, provider };
