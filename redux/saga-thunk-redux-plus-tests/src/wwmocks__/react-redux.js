export default {
  connect: jest.fn(
    (mapStateToProps, mapDispatchToProps) => (reactComponent) => {
      return {
        mapStateToProps,
        mapDispatchToProps,
        component: reactComponent,
      };
    }
  ),
};
