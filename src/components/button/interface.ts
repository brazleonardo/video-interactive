import { ButtonHTMLAttributes } from 'react'

export interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    fullWidth?: boolean;
    type?: 'submit' | 'button';
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary';
 }