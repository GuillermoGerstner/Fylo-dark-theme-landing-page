import { StaticImageData } from "next/image";

export interface GetStartedButtonProps {
  text: string;
  styles?: string;
  action?: () => void;
}

export interface PageCaracProps {
  image: string;
  ident: string;
  title: string;
  text: string;
}

export interface CommentProps {
  ident: string;
  text: string;
  image: StaticImageData;
  name: string;
  role: string;
}
