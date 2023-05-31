import React, { ChangeEvent, useState, useRef } from 'react';
import { TrashIcon } from '@radix-ui/react-icons';
import { Button } from '../Button';
import * as Styles from './styles';

export interface ImageUploadProps {
  onChange?: (file: File) => void;
  onRemove?: () => void;
  buttonText?: string;
  accept?: string;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  onChange,
  onRemove,
  buttonText = 'Selecione uma imagem',
  accept = 'image/*',
}) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setIsLoading(true);

      try {
        await uploadImage(file);
        setIsLoading(false);
        if (onChange) {
          onChange(file);
        }
      } catch (error) {
        setIsLoading(false);
      }
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    if (onRemove) {
      onRemove();
    }
  };

  const uploadImage = async (file: File) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <div className={Styles.uploadContainer()}>
      {!selectedImage && (
        <label htmlFor="image-upload" className={Styles.buttonTextLabel()}>
          <span className={Styles.buttonText()}>{buttonText}</span>
          <input
            id="image-upload"
            type="file"
            accept={accept}
            className={Styles.upload()}
            onChange={handleImageChange}
            disabled={isLoading}
            ref={fileInputRef}
          />
        </label>
      )}
      {selectedImage && (
        <div className={Styles.imageContainer()}>
          <div className={Styles.container()}>
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Uploaded"
              className={Styles.imageUploaded()}
            />
            <div className={Styles.iconContainer()}>
              <Button
                icon={<TrashIcon className={Styles.icon()} />}
                intent="transparent"
                type="button"
                onClick={handleRemoveImage}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
