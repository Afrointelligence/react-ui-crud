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
import {ListBoxField} from "../components/form/fields/DropDown/ListBox/ListBoxField";
import {CheckIcon} from "@heroicons/react/24/outline";

export default {
  title: 'Form/SimpleForm',
  component: Form,
} as ComponentMeta<typeof Form<any>>;

const Template: ComponentStory<typeof Form<string>> = (args) => {
  return (
    <Form {...args}>
        {({handleSubmit, getValues, formState: { errors }}: any) => (
            <>
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
                        <ListBoxField name="listBox" getList={() =>
                            Promise.resolve([
                                { id: 1, title: 'Male' },
                                { id: 2, title: 'Female' },
                            ])
                        } />
                      <label htmlFor="sex" className="block text-sm font-medium text-gray-700">
                        Sex
                      </label>
                        <ComboBoxField
                            name="sex"
                            getList={() =>
                                Promise.resolve([
                                    { id: 1, title: 'Male' },
                                    { id: 2, title: 'Female' },
                                ])}
                            accessor="title"
                        />
                        <ComboBoxMultipleField
                            label="Cars"
                            name="cars"
                            getList={() =>
                                Promise.resolve([
                                    { id: 1, title: 'Toyota' },
                                    { id: 2, title: 'Mercedes' },
                                    { id: 3, title: 'Mazda' },
                                    { id: 4, title: 'Acura' },
                                    { id: 5, title: 'Honda' },
                                    { id: 6, title: 'BMW' },
                                    { id: 7, title: 'Audi' },
                                    { id: 8, title: 'Lexus' },
                                    { id: 9, title: 'Nissan' },
                                    { id: 10, title: 'KIA' },
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
              <button onClick={handleSubmit(console.log)} className="p-5 border m-5">Alibaba</button>
                <SubmitButton label="Click to submit" />
            </>
            )}
    </Form>
  );
};

export const Default = Template.bind({});
Default.args = {
  onSubmit: console.log,
};
