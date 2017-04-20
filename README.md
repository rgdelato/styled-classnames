# styled-classnames
Use [`styled-components`](https://github.com/styled-components/styled-components) without the components!

...it's a short hack that still uses `styled-components` under the hood, so all the credit for this goes to [Glen Maddern](https://twitter.com/glenmaddern), [Max Stoiber](https://twitter.com/mxstbr), and the `styled-components` community.

## Javascript Usage
```javascript
import React from "react";
import Link from "react-router/Link";
import styled from "styled-classnames";

const linkClassName = styled`
  color: ${props => props.color};
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;

  &:hover { border-color: rgba(175, 47, 47, 0.1); }
`;

const activeClassName = styled`
  border-color: rgba(175, 47, 47, 0.2);
`;

const FilterLink = (props) => {
  return (
    <Link
      {...props}
      className={linkClassName(props)}
      activeClassName={activeClassName(props)}
    />
  );
};

export default FilterLink;
```

## ClojureScript Usage (Experimental)
```clojure
(def font-family (atom "Baskerville"))

(def header-class (js/styled "
  font-size: 72px;
  font-family: " @font-family ";
  font-style: italic;
  color: " #(:color %) ";
"))

(defn hello-world []
  [:h1 {:class (header-class {:color "rebeccapurple"})}
    "Hello world!"])
```

## Details
Helper methods from `styled-components` are also exposed:
```javascript
import styled, { css, keyframes, injectGlobal } from "styled-classnames";
```

Note that `ThemeProvider` and `withTheme` are React-specific and are not included in this library. If you need them, you can still import them from `styled-components`, or if you know how context works in React, you could write them yourself.
