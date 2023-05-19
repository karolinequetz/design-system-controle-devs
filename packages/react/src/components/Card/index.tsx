import React, { ReactNode } from "react";
import * as Styles from "./styles";

interface CardProps {
  title: string;
  children: ReactNode;
  image: string;
  onClick: () => void;
}
export const Card = ({ title, children, image, onClick }: CardProps) => (
  <div className={Styles.container()} onClick={onClick}>
    <div className={Styles.imageContainer()}>
      <img
        className={Styles.imageContent()}
        alt="profile"
        src="https://media.istockphoto.com/id/1410538853/pt/foto/young-man-in-the-public-park.jpg?s=2048x2048&w=is&k=20&c=MIzvR5V8GPSO0zVoFnyE6E-AdkmH_TdBO0MSeEs1Ik4="
      />
    </div>

    <div className={Styles.title()}>{title}</div>
    <div className={Styles.children()}>{children}</div>
  </div>
);
