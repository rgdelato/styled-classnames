import { keyframes } from "styled-components";

import parseArguments from "./parseArguments";

const parsedKeyframes = (...args) => {
  const { strings, interpolations } = parseArguments(args);
  return keyframes(strings, ...interpolations);
};

export default parsedKeyframes;
