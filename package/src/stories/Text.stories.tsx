import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import './tailwind.css';
import { Form, TextField, SubmitButton, TextareaField } from '../components';
import { InputField } from '../components/form/fields/Input/InputField';

export default {
  title: 'Form/Text',
  component: Form,
} as ComponentMeta<typeof Form<any>>;

const Template: ComponentStory<typeof Form<string>> = (args) => {
  return (
    <Form {...args}>
      <div className="w-96">
        <InputField name="input-test" rules={{ required: true }} />
      </div>
      <div className="w-full">
        <div className="flex justify-between space-x-2">
          <TextField
            label="First Name"
            name="firstName"
            className="flex-grow"
          />
          <TextField label="Last Name" name="lastName" className="flex-grow" />
        </div>
      </div>
      <TextareaField name="description" label="Description" />
      <SubmitButton label="Click to submit" />
    </Form>
  );
};

const TemplateRequired: ComponentStory<typeof Form<string>> = (args) => {
  return (
    <Form {...args}>
      <div className="w-full">
        <div className="flex justify-between space-x-2">
          <TextField
            label="First Name"
            name="firstName"
            rules={{ required: true }}
            className="flex-grow"
          />
          <TextField
            label="Last Name"
            name="lastName"
            className="flex-grow"
            rules={{ required: true }}
          />
        </div>
      </div>
      <TextareaField name="description" label="Description" />
      <SubmitButton label="Click to submit" />
    </Form>
  );
};

export const Default = Template.bind({});
Default.args = {
  onSubmit: console.log,
};

export const Required = TemplateRequired.bind({});
Required.args = {
  onSubmit: console.log,
};
