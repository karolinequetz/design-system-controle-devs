import React from 'react';
import type { Meta } from '@storybook/react';

import { Button, toast, Toaster, ToastAction } from '@controle-devs-ui/react';

export default {
  title: 'Components/Toast',
  component: Toaster,
} as Meta;

export const Default = () => {
  const onClick = () => {
    toast({
      title: 'Informação!',
      description: 'Atualize seus dados',
    });
  };

  return (
    <>
      <Toaster />
      <Button type="submit" text="Toast" onClick={onClick}></Button>
    </>
  );
};

export const Action = () => {
  const onClick = () => {
    toast({
      title: 'Action',
      description: 'Houve um problema',
      action: (
        <ToastAction altText="Tente novamente">Tente novamente</ToastAction>
      ),
    });
  };

  return (
    <>
      <Toaster />
      <Button type="submit" text="Toast" onClick={onClick}></Button>
    </>
  );
};

export const Success = () => {
  const onClick = () => {
    toast({
      title: 'Sucesso!',
      description: 'Usuário cadastrado com sucesso',
      classNameContent: 'flex flex-row gap-1 pl-2',
      className: 'p-4',
      variant: 'success',
    });
  };

  return (
    <>
      <Toaster />
      <Button type="submit" text="Toast" onClick={onClick}></Button>
    </>
  );
};

export const Error = () => {
  const onClick = () => {
    toast({
      title: 'Erro!',
      description: 'Erro ao cadastrar usuário',
      classNameContent: 'flex flex-row gap-1 pl-2',
      className: 'p-4',
      variant: 'error',
    });
  };

  return (
    <>
      <Toaster />
      <Button type="submit" text="Toast" onClick={onClick}></Button>
    </>
  );
};

export const Warning = () => {
  const onClick = () => {
    toast({
      title: 'Atenção!',
      description: 'Preencha todos os campos',
      classNameContent: 'flex flex-row gap-1 pl-2',
      className: 'p-4',
      variant: 'warning',
    });
  };

  return (
    <>
      <Toaster />
      <Button type="submit" text="Toast" onClick={onClick}></Button>
    </>
  );
};
