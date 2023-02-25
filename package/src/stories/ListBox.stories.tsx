import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import './tailwind.css';
import { Form, TextField, SubmitButton, TextareaField } from '../components';
import {ListBoxField} from "../components/form/fields/DropDown/ListBox/ListBoxField";

export default {
  title: 'Form/ListBox',
  component: Form,
} as ComponentMeta<typeof Form<any>>;

const Template: ComponentStory<typeof Form<string>> = (args) => {
  return (
    <Form {...args}>
      <div className="w-full">
          <ListBoxField
              placeholder="Select a name"
              getList={() => Promise.resolve([
                  {
                      id: 1,
                      value: 'Bisola'
                  },
                  {
                      id: 2,
                      value: 'Chatis'
                  },
              ])}
              name="firstName"
              accessor="value"
          />
      </div>
      <SubmitButton label="Click to submit" />
    </Form>
  );
};

export const Default = Template.bind({});
Default.args = {
  onSubmit: console.log,
};
