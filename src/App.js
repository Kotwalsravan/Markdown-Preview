import {useState} from 'react'
import './App.css';
import ReactMarkdown from 'react-markdown'
const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... **_both!_**

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.
`;

function App() {
  const [markdownText,setMarkdownText]=useState(defaultMarkdown);
  return (
    <div >
       <div className="container">
        <h1 id="heading">Markdown Preview</h1>
        <div id="boxes-container">        
    <textarea id="editor" name="editor" value={markdownText} onChange={(e)=>setMarkdownText(e.target.value)}></textarea>
  <div id="preview">
    <ReactMarkdown>{markdownText}</ReactMarkdown>
  </div>

</div>

        </div>
    </div>
  );
}

export default App;
