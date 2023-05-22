import React, { ReactNode } from 'react';
import * as Styles from './styles';
import { Pencil2Icon, TrashIcon } from '@radix-ui/react-icons';
export interface CardProps {
  title: string;
  children: ReactNode;
  image: string;
  skills: string[];
  onClick: () => void;
  onChange: () => void;
  onDelete: () => void;
}
export const Card = ({
  title,
  children,
  image,
  skills,
  onChange,
  onDelete,
  onClick,
}: CardProps) => (
  <div className={Styles.container()} onClick={onClick}>
    <div className={Styles.actions()}>
      <button className={Styles.EditAndDeleteButtons()} onClick={onChange}>
        <Pencil2Icon className={Styles.EditAndDeleteIcons()} />
      </button>
      <button className={Styles.EditAndDeleteButtons()} onClick={onDelete}>
        <TrashIcon className={Styles.EditAndDeleteIcons()} />
      </button>
    </div>
    <div className={Styles.imageContainer()}>
      <img className={Styles.imageContent()} alt="profile" src={image} />
    </div>

    <div className={Styles.title()}>{title}</div>
    <div className={Styles.children()}>{children}</div>

    <div className={Styles.skillsContent()}>
      {skills?.map((skill) => (
        <span key={skill} className={Styles.skills()}>
          {skill}
        </span>
      ))}
    </div>
  </div>
);
