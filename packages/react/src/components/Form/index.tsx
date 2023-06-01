import React, { ReactNode, useState } from 'react';
import * as FormPrimitive from '@radix-ui/react-form';
import { useForm } from 'react-hook-form';
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
  className?: string;
}
interface SubmitButtonProps {
  text: string;
  className: string;
}
export interface FormProps {
  field: FieldProps[];
  submitButton: SubmitButtonProps;
  submit?: () => void;
}
export const Form = ({ field, submitButton }: FormProps) => {
  const [output, setOutput] = useState('');
  const { register, handleSubmit } = useForm();

  function submit(data: any) {
    setOutput(JSON.stringify(data, null, 2));
  }
  return (
    <FormPrimitive.Root
      onSubmit={handleSubmit(submit)}
      className={Styles.formContainer()}
    >
      {field.map((item) => (
        <FormPrimitive.Field
          key={item.fieldName}
          className={Styles.field()}
          {...register(item.fieldName)}
        >
          <div className={item.className || Styles.fieldContent()}>
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
        <div className={submitButton.className}>
          <Button type="submit" text={submitButton.text}></Button>
        </div>
      </FormPrimitive.Submit>
      <pre> {output}</pre>
    </FormPrimitive.Root>
  );
};
