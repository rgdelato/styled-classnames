import componentStyle from "styled-components/lib/models/ComponentStyle";
import generateAlphabeticName from "styled-components/lib/utils/generateAlphabeticName";
import css from "styled-components/lib/constructors/css";
import keyframes from "styled-components/lib/constructors/keyframes";

const ComponentStyleClass = componentStyle(generateAlphabeticName);

const generateCSSClass = (strings, ...interpolations) => {
  const instance = new ComponentStyleClass(css(strings, ...interpolations));

  let className = function(props) {
    return instance.generateAndInjectStyles(props || {});
  };

  className.toString = className;

  return className;
};

export default generateCSSClass;

export { css, keyframes };
