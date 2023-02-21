import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import './tailwind.css';
import {
  TextField,
  SubmitButton,
  Form,
  ComboBoxField,
  ComboBoxMultipleField,
  NativeSelectField,
  DateField,
  TimeField,
  TextareaField,
  NumberField,
} from '../components';

export default {
  title: 'Form/SimpleForm',
  component: Form,
} as ComponentMeta<typeof Form<any>>;

const Template: ComponentStory<typeof Form<string>> = (args) => {
  return (
    <Form {...args}>
      <div className="flex space-x-3">
        <div className="w-full">
          <div className="flex justify-between space-x-2">
            <TextField
              label="First Name"
              name="firstName"
              rules={{ required: true, minLength: 5 }}
              className="flex-grow"
            />
            <TextField
              label="Middle Name"
              name="middleName"
              className="flex-grow"
            />
          </div>
          <TextField
            label="Last Name"
            name="lastName"
            rules={{ required: true }}
          />
          <ComboBoxField
            label="Sex"
            name="sex"
            getList={() =>
              Promise.resolve([
                { id: 1, title: 'Male' },
                { id: 2, title: 'Female' },
              ])
            }
            accessor="title"
          />
          <ComboBoxMultipleField
            label="Cars"
            name="cars"
            getList={() =>
              Promise.resolve([
                { id: 1, title: 'Toyota' },
                { id: 2, title: 'Mercedes' },
              ])
            }
            accessor="title"
          />
          <NativeSelectField
            label="College"
            name="college"
            options={[
              { id: 1, title: 'Arts and Science' },
              { id: 2, title: 'Biology' },
            ]}
            accessor="title"
          />
        </div>
        <div className="w-full">
          <NumberField name="amount" label="Amount" />
          <div className="flex space-x-2">
            <DateField label="Date" name="date" className="flex-grow" />
            <TimeField name="time" label="Time" className="flex-grow" />
          </div>
          <TextareaField name="description" label="Description" />
        </div>
      </div>
      <SubmitButton label="Click to submit" />
    </Form>
  );
};

export const Default = Template.bind({});
Default.args = {
  onSubmit: console.log,
};
