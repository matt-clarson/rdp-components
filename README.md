# Red Panda Components

A component library written in React.  
![](https://github.com/matt-clarson/rdp-components/workflows/CI/badge.svg)

## Usage

See the [docs](https://matt-clarson.github.io/rdp-components)

To use, install the package and import components:

```bash
npm install --save-prod rdp-components
```

```javascript
import React from "react";
import { Button } from "rdp-components";

const App = () => {
  return (
    <div>
      <Button>{"A button!"}</Button>
    </div>
  );
};
```

### Theming

Use the `Theme` component to apply a theme to the components.

```javascript
import React from "react";
import ReactDOM from "react-dom";
import { Theme } from "rdp-components";

import MyApp from "./MyApp";

const App = () => (
  <Theme
    colours={{
      primary: "#00ADB5",
      primaryGradient: "#00B590",
      secondary: "#F8B500",
      error: "red",
      textOnPrimary: "white",
      textOnSecondary: "white",
      textOnError: "white"
    }}
  >
    <App />
  </Theme>
);

ReactDOM.render(<App />, document.getElementById("root"));
```

### Icons

`rdp-components` uses Material Icons. You can find a list of all available icons [here](https://material.io/resources/icons/?style=baseline).
