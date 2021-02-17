// replace outcome of Wrapper.debug() that has Symbol(react.fragment);
export const noReactFragementSupport = symbol => symbol.replace(/Symbol\(react.fragment\)/g, 'React.Fragment');
