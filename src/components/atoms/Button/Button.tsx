import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { ColorType, RoundedType, SizeType, VariantType } from '@/types/type';
import clsx from 'clsx';
import classes from './classes';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: React.MouseEventHandler;
  children: React.ReactNode;
  variant?: VariantType;
  rounded?: RoundedType;
  fullWidth?: boolean;
  className?: string;
  color?: ColorType;
  size?: SizeType;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'filled',
      fullWidth = false,
      type = 'submit',
      rounded = 'lg',
      color = 'base',
      size = 'lg',
      className,
      children,
      onClick,
      ...props
    },
    ref,
  ) => {
    const appearence = classes.color[color].variant[variant];
    const borderRadius = classes.rounded[rounded];
    const height = classes.size[size];

    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        className={clsx(
          { 'w-full': fullWidth },
          appearence.initial,
          appearence.focused,
          classes.root,
          borderRadius,
          className,
          height,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

export default Button;
