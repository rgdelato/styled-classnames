import componentStyle from "styled-components/lib/models/ComponentStyle";
import generateAlphabeticName
  from "styled-components/lib/utils/generateAlphabeticName";
import css from "styled-components/lib/constructors/css";
import injectGlobal from "styled-components/lib/constructors/injectGlobal";
import keyframes from "styled-components/lib/constructors/keyframes";

const ComponentStyle = componentStyle(generateAlphabeticName);

const generateCSSClassName = (strings, ...interpolations) => {
  const instance = new ComponentStyle(css(strings, ...interpolations));

  let className = function(props = {}) {
    return instance.generateAndInjectStyles(props);
  };

  className.toString = className;

  return className;
};

export default generateCSSClassName;
export { css, keyframes, injectGlobal };
