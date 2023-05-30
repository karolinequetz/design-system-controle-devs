import { Meta, StoryObj } from '@storybook/react';
import { ImageUpload, ImageUploadProps } from '@controle-devs-ui/react';

export default {
  title: 'Components/ImageUpload',
  component: ImageUpload,
} as Meta<ImageUploadProps>;

export const Default: StoryObj<ImageUploadProps> = {
  args: {
    onChange: () => console.log('File Uploaded'),
    uploadText: 'Selecione uma imagem',
  },
};
