import { injectGlobal } from "styled-components";

import parseArguments from "./parseArguments";

const parsedInjectGlobal = (...args) => {
  const { strings, interpolations } = parseArguments(args);
  return injectGlobal(strings, ...interpolations);
};

export default parsedInjectGlobal;
