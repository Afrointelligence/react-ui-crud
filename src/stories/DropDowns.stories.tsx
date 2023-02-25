import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import './tailwind.css';
import { Form, SubmitButton } from '../components';
import {ListBoxField} from "../components/form/fields/DropDown/ListBox/ListBoxField";
import {ComboBoxField} from "../components/form/fields/DropDown/ComboBox/ComboBoxField";

export default {
  title: 'Form/Dropdowns',
  component: Form,
} as ComponentMeta<typeof Form<any>>;

const people = [
    {
        id: 1,
        value: 'Bisola'
    },
    {
        id: 2,
        value: 'Chatis'
    },
    {
        id: 3,
        value: 'Ines'
    },
];

const Template: ComponentStory<typeof Form<string>> = (args) => {
  return (
    <Form {...args}>
      <div className="w-96">
          <label htmlFor="dad" className="block text-sm font-medium text-gray-700">
              Dad
          </label>
          <ListBoxField
              placeholder="Select a name"
              list={people}
              name="dad"
              accessor="value"
          />
          <label htmlFor="mom" className="block text-sm font-medium text-gray-700">
              Mom
          </label>
          <ListBoxField
              placeholder="Select a name"
              list={people}
              name="mom"
              accessor="value"
              multiple
          />
          <label htmlFor="ant" className="block text-sm font-medium text-gray-700">
              ant
          </label>
          <ComboBoxField
              placeholder="Select a name"
              list={people}
              name="ant"
              accessor="value"
              multiple
          />
          <label htmlFor="uncle" className="block text-sm font-medium text-gray-700">
              Unc
          </label>
          <ComboBoxField
              placeholder="Select a name"
              list={people}
              name="uncle"
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
