import React from "react";
import { Form, SubmitButton } from "react-ui-crud";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const DisplayForm = (props: Props) => {
  const [data, setData] = React.useState<any>();
  // @ts-ignore
  return (
    <div className="flex items-center flex-col">
      <Form onSubmit={setData} className="w-1/3">
        {props.children}

        <SubmitButton label="Submit" />
      </Form>
      {data && (
        <div
          className="rounded-lg mt-3"
          style={{
            background: "#282c34",
            color: "#ffffff",
          }}
        >
          <div className="codeBlockContent_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module">
            <pre className="prism-code language-json codeBlock_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module thin-scrollbar">
              <code className="codeBlockLines_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module">
                <span
                  className="token-line"
                  style={{ color: "rgb(255, 255, 255)" }}
                >
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(141, 200, 145)" }}
                  >
                    {"{"}
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token property"
                    style={{ color: "rgb(90, 155, 207)" }}
                  >
                    "Output"
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(215, 222, 234)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token property"
                    style={{ color: "rgb(141, 200, 145)" }}
                  >
                    {JSON.stringify(data)}
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(141, 200, 145)" }}
                  >
                    {"}"}
                  </span>
                  <br />
                </span>
              </code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayForm;
