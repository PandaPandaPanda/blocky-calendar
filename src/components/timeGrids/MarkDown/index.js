import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import "./style.css";
import AppMarkdown from "./README.md";

const MarkDown = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(AppMarkdown)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);
  return (
    <div className="markdown">
      {/* <div className="result">
        <ReactMarkdown
          className="markdown-body"
          remarkPlugins={remarkGfm}
          rehypePlugins={rehypeRaw}
        >
          {markdown}
        </ReactMarkdown>
      </div> */}
    </div>
  );
};

export default MarkDown;
