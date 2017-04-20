import css from "styled-components/lib/constructors/css";
import parseArguments from "./parseArguments";

const parsedCSS = (...args) => {
  const { strings, interpolations } = parseArguments(args);
  return css(strings, ...interpolations);
};

export default parsedCSS;
