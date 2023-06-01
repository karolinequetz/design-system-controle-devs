import React, { ReactNode } from 'react';
import * as FormPrimitive from '@radix-ui/react-form';
import { Button } from '../Button';
import * as Styles from './styles';

interface ValidationMessageProps {
  match?:
    | 'badInput'
    | 'patternMismatch'
    | 'rangeOverflow'
    | 'rangeUnderflow'
    | 'stepMismatch'
    | 'tooLong'
    | 'tooShort'
    | 'typeMismatch'
    | 'valid'
    | 'valueMissing'
    | ((value: string, formData: FormData) => boolean)
    | ((value: string, formData: FormData) => Promise<boolean>);
  forceMatch?: boolean;
  name?: string;
  description?: string;
}

interface FieldProps {
  fieldName: string;
  label: string;
  message?: ValidationMessageProps[];
  control: ReactNode;
}
export interface FormProps {
  field: FieldProps[];
  submitButtonName: string;
}
export const Form = ({ field, submitButtonName }: FormProps) => (
  <FormPrimitive.Root className={Styles.formContainer()}>
    {field.map((item) => (
      <FormPrimitive.Field
        key={item.fieldName}
        className={Styles.field()}
        name={item.fieldName}
      >
        <div className={Styles.fieldContent()}>
          <FormPrimitive.Label className={Styles.label()}>
            {item.label}
          </FormPrimitive.Label>
          {item.message?.map((ValidationMessage) => (
            <FormPrimitive.Message
              key={ValidationMessage?.description}
              className={Styles.validationMessage()}
              match={ValidationMessage?.match}
            >
              {ValidationMessage?.description}
            </FormPrimitive.Message>
          ))}
        </div>
        <FormPrimitive.Control asChild>{item.control}</FormPrimitive.Control>
      </FormPrimitive.Field>
    ))}

    <FormPrimitive.Submit asChild>
      <div className=" w-full inline-flex h-9 items-center justify-center ">
        <Button text={submitButtonName}></Button>
      </div>
    </FormPrimitive.Submit>
  </FormPrimitive.Root>
);
