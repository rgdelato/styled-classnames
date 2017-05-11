import injectGlobal from "styled-components/lib/constructors/injectGlobal";
import parseArguments from "./parseArguments";

const parsedInjectGlobal = (...args) => {
  const { strings, interpolations } = parseArguments(args);
  return injectGlobal(strings, ...interpolations);
};

export default parsedInjectGlobal;
