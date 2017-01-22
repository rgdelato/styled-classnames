# styled-classnames
Use [`styled-components`](https://github.com/styled-components/styled-components) without the components!

## Usage
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
