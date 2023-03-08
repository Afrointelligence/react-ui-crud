import React from "react";
import { Form, SubmitButton } from "react-ui-crud";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const DisplayForm = (props: Props) => {
  const [data, setData] = React.useState<any>();
  const styles = {
    background: "#282c34",
    color: "#ffffff",
  };
  return (
      <div className="flex items-center flex-col">
        <Form onSubmit={setData} className="w-1/3">
          {props.children}
          <SubmitButton label="Submit"/>
        </Form>
        {data && (
            <div className="rounded-lg mt-3 flex justify-center p-3" style={styles}>
              <code style={styles}>
            <span>
              <b className="text-purple-500">Output</b>:{" "}
            </span>
                <span className="text-green-300">{JSON.stringify(data)}</span>
                <br/>
              </code>
            </div>
        )}
      </div>
  );
};

export default DisplayForm;
