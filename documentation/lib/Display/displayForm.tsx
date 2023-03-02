import React from 'react';
import {Form, SubmitButton} from "react-ui-crud";

interface Props {
    children: JSX.Element | JSX.Element[];
}

const DisplayForm = (props: Props) => {
    const [data, setData] = React.useState<any>();
    return (
        <div
            className="w-1/3 m-auto"
        >
            <Form onSubmit={setData}>
                {props.children}

                <SubmitButton
                    label="Submit"
                />
            </Form>
            {data && <div><b>Output</b>: {JSON.stringify(data)}</div>}
        </div>
    )
};

export default DisplayForm;