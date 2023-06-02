import React, { useState } from 'react';
import type { Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  Input,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Button,
} from '@controle-devs-ui/react';

export default {
  title: 'Components/Form',
  component: Form,
} as Meta;

export const Default = () => {
  const [output, setOutput] = useState('');

  const formSchema = z.object({
    username: z.string().min(2, {
      message: 'O nome de usuário deve ter pelo menos 2 caracteres..',
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setOutput(JSON.stringify(values, null, 2));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="flex flex-col space-y-2 ">
              <FormLabel className=" bold text-lg dark:text-white">
                Username
              </FormLabel>
              <FormControl>
                <Input placeholder="nome" {...field} className="mt-4" />
              </FormControl>
              <FormMessage className="text-red-900" />
            </FormItem>
          )}
        />
        <Button type="submit" text="Enviar"></Button>
      </form>
      <pre className=" dark:text-white">{output}</pre>
    </Form>
  );
};
