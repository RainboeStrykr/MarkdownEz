import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

import Navbar from "./Components/Navbar";
import "./Style/style.css";

function App() {
  const [MD, SetMD] = useState(`
# Welcome to MD Editor.

This editor is developed by Devang Saklani from **INDIA**  ( as a side project ).
 
*Basic usage:*
# Heading 1
## Heading 2
### Heading 3
#### Heading 4

*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

_You **can** combine them_

## List
* Item 1
* Item 2
  * Item 2a
  * Item 2b

1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b

##  Table

First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column

It's very easy to make some words **bold** and other words *italic* with Markdown. You can even [link a Website!](https://devang-saklani.web.app)

### Finally some lorem Ipsum

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida eros nec mollis sodales. Proin eu rutrum nisi, at feugiat neque. Sed sit amet quam vel justo maximus efficitur et id mauris. Pellentesque ultrices metus at gravida tincidunt. Nulla placerat pretium nulla. Proin ultricies magna ut sem pharetra, non blandit erat bibendum. Pellentesque risus justo, placerat nec nibh at, feugiat faucibus lorem. Maecenas tincidunt dolor ex, eu ultricies velit tempor nec. Suspendisse fermentum pretium tristique. Etiam eu lectus massa. Suspendisse est metus, dictum nec iaculis a, ullamcorper quis metus. Nullam nec placerat elit. Nullam leo sem, scelerisque in augue egestas, fringilla suscipit tellus. Vestibulum a tincidunt turpis. Sed feugiat, enim quis fringilla ultricies, ante est dignissim purus, id pulvinar diam turpis et tortor. Nunc vitae odio vehicula, condimentum sapien eget, fermentum nunc. 
`);

  useEffect(() => {
    if (localStorage.getItem("md_data")) {
      SetMD(localStorage.getItem("md_data"));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("md_data", MD);
  }, [MD]);

  return (
    <React.Fragment>
      <Navbar />

      <section className="wrapper">
        <section className="input_field">
          <textarea
            name="input_field"
            id="input"
            value={MD}
            onChange={(e) => SetMD(e.target.value)}
          ></textarea>
        </section>
        <section className="output">
          <ReactMarkdown
            remarkPlugins={[gfm]}
            skipHtml={false}
            className="output_box"
          >
            {MD}
          </ReactMarkdown>
        </section>
      </section>
    </React.Fragment>
  );
}

export default App;
