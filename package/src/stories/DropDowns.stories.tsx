import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import './tailwind.css';
import { Form, SubmitButton } from '../components';
import { SelectField } from '../components/form/fields/Select/SelectField';

export default {
  title: 'Form/Dropdowns',
  component: Form,
} as ComponentMeta<typeof Form<any>>;

const people = [
  {
    id: 1,
    value: 'Bisola',
  },
  {
    id: 2,
    value: 'Chatis',
  },
  {
    id: 3,
    value: 'Ines',
  },
];

const Template: ComponentStory<typeof Form<string>> = (args) => {
  return (
    <Form {...args}>
      <div className="w-96">
        <label
          htmlFor="dad"
          className="block text-sm font-medium text-gray-700"
        >
          Dad
        </label>
        <SelectField
          type="list"
          placeholder="Select a value"
          name="testSelect"
          list={people}
          accessor="value"
        />
        <SubmitButton label="Click to submit" />
      </div>
    </Form>
  );
};

export const Default = Template.bind({});
Default.args = {
  onSubmit: console.log,
};
