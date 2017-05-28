# styled-classnames
Use [`styled-components`](https://github.com/styled-components/styled-components) without the components!

...it's a short hack that still uses `styled-components` under the hood, so all the credit for this goes to [Glen Maddern](https://twitter.com/glenmaddern), [Max Stoiber](https://twitter.com/mxstbr), and the `styled-components` community.

Be aware that including `styled-components` adds a significant amount to your final JS bundle size. (The upcoming v2 of `styled-components` should use a much smaller parser.)

## Javascript

[![npm version](https://img.shields.io/npm/v/styled-classnames.svg?style=flat)](https://www.npmjs.com/package/styled-classnames) 

```
npm install --save-dev styled-classnames
```

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

## ClojureScript

[![Clojars Project](https://img.shields.io/clojars/v/cljsjs/styled-classnames.svg)](https://clojars.org/cljsjs/styled-classnames)

```clojure
(ns demo.core
    (:require [reagent.core :as reagent]
              cljsjs.styled-classnames))

(def font-family (atom "Baskerville"))

(def home-class (js/styled "
  font-size: 72px;
  font-family: " @font-family ";
  font-style: italic;
  color: " #(:color %) ";
"))

(defn home-page []
  [:div
    [:h2 {:class (home-class {:color "rebeccapurple"})}
      "Welcome to Reagent"]])
```

## Details
Helper methods from `styled-components` are also exposed:
```javascript
import styled, { css, keyframes, injectGlobal } from "styled-classnames";
```

Note that `ThemeProvider` and `withTheme` are React-specific and are not included in this library. If you need them, you can still import them from `styled-components`, or if you know how context works in React, you could write them yourself.
