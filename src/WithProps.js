import hoistStatics from 'hoist-non-react-statics';

const WithProps = (Component, state) => {
  const C = (routeComponentProps) => {
    const {wrappedComponentRef, ...remainingProps} = props;
    return (
      <Component {...remainingProps} {...routeComponentProps} ref={wrappedComponentRef} />
    )
  }

  C.WrappedComponent = Component;

  return hoistStatics(C, Component);
}

export {WithProps};

/*

withProps:: Component -> Func(RouterProps -> Component)
 */
