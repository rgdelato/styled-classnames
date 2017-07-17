import componentStyle from "styled-components/lib/models/ComponentStyle";
import generateAlphabeticName from "styled-components/lib/utils/generateAlphabeticName";
import flatten from "styled-components/lib/utils/flatten";
import stringifyRules from "styled-components/lib/utils/stringifyRules";
import css from "./css";
import StyleSheet from "styled-components/lib/models/StyleSheet";

import parseArguments from "./parseArguments";

const ComponentStyle = componentStyle(
  generateAlphabeticName,
  flatten,
  stringifyRules
);

const generateCSSClassName = (...args) => {
  const { strings, interpolations } = parseArguments(args);
  const instance = new ComponentStyle(
    css(strings, ...interpolations),
    "styled-classnames"
  );

  let className = function(props = {}) {
    return instance.generateAndInjectStyles(props, StyleSheet.instance);
  };

  className.toString = className;

  return className;
};

export default generateCSSClassName;
