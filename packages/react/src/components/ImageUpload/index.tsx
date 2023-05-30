import React, { ChangeEvent, useState, useRef } from 'react';

export interface ImageUploadProps {
  onChange?: (file: File) => void;
  onRemove?: () => void;
  buttonText?: string;
  changeText?: string;
  removeText?: string;
  loadingText?: string;
  successText?: string;
  errorText?: string;
  accept?: string;
  className?: string;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  onChange,
  onRemove,
  buttonText = 'Selecione uma imagem',
  changeText = 'Alterar imagem',
  removeText = 'Remover imagem',
  loadingText = 'Carregando...',
  successText = 'Imagem carregada com sucesso!',
  errorText = 'Erro ao carregar a imagem. Tente novamente.',
  accept = 'image/*',
  className = '',
}) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setIsLoading(true);
      setSuccessMessage('');
      setErrorMessage('');

      try {
        await uploadImage(file);
        setIsLoading(false);
        setSuccessMessage(successText);
        if (onChange) {
          onChange(file);
        }
      } catch (error) {
        setIsLoading(false);
        setErrorMessage(errorText);
      }
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setSuccessMessage('');
    setErrorMessage('');
    if (onRemove) {
      onRemove();
    }
  };

  const handleButtonChangeClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const uploadImage = async (file: File) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <div
      className={`w-64 h-64 bg-transparent border-2 border-purple-500 flex flex-col items-center justify-center ${className}`}
    >
      {!selectedImage && (
        <label
          htmlFor="image-upload"
          className="inline-block text-purple-500 text-center"
        >
          <span className="px-4 py-2 border-2 border-purple-500 rounded-lg cursor-pointer">
            {buttonText}
          </span>
          <input
            id="image-upload"
            type="file"
            accept={accept}
            className="hidden"
            onChange={handleImageChange}
            disabled={isLoading}
            ref={fileInputRef}
          />
        </label>
      )}
      {selectedImage && (
        <div className="flex flex-col items-center overflow-hidden">
          <div className="relative">
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Uploaded"
              className="max-w-full max-h-full"
            />
            <div className="absolute top-0 right-0 mt-2 mr-2 flex space-x-2">
              <button
                type="button"
                className="text-purple-500 hover:text-purple-700 focus:outline-none"
                onClick={handleButtonChangeClick}
              >
                {changeText}
              </button>
              <button
                type="button"
                className="text-purple-500 hover:text-purple-700 focus:outline-none"
                onClick={handleRemoveImage}
              >
                {removeText}
              </button>
            </div>
          </div>
          {isLoading && <p className="text-purple-500 mt-2">{loadingText}</p>}
          {successMessage && (
            <p className="text-green-500 mt-2">{successMessage}</p>
          )}
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        </div>
      )}
    </div>
  );
};
