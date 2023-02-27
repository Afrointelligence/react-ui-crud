import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import './tailwind.css';
import { Form, SubmitButton } from '../components';
import { SelectField, InputField } from '../components';
import {
  CurrencyDollarIcon,
  EnvelopeIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline';

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
        <InputField
          label="Input Test"
          addon="https://"
          // className="border border-blue-300 rounded-md"
          // errorClassName="border border-green-800 rounded-md"
          leadingIcon={<CurrencyDollarIcon className="w-5" />}
          tailingIcon={<QuestionMarkCircleIcon className="w-5" />}
          placeholder="type something"
          name="input-test"
          rules={{ required: true }}
        />
        <label
          htmlFor="dad"
          className="block text-sm font-medium text-gray-700"
        >
          Dad
        </label>
        <SelectField
          multiple
          placeholder="Select a value"
          name="testSelect"
          list={people}
          type="combo"
          // className="rounded-md shadow-lg"
          // errorClassName="border border-4 p-4 border-red-700 rounded-md"
          accessor="value"
          rules={{ required: true }}
        />
        <SelectField
          multiple
          placeholder="Select a value"
          name="testSelect2"
          list={people}
          accessor="value"
          rules={{ required: true }}
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
