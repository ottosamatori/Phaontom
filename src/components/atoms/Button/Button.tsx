import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { ColorType, RoundedType, SizeType, VariantType } from '@/types/type';
import clsx from 'clsx';
import classes from './classes';
import Loader from '../Loader/Loader';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: React.MouseEventHandler;
  children: React.ReactNode;
  variant?: VariantType;
  rounded?: RoundedType;
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  color?: ColorType;
  size?: SizeType;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'filled',
      fullWidth = false,
      disabled = false,
      loading = false,
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
        disabled={disabled || loading}
        ref={ref}
        type={type}
        onClick={onClick}
        className={clsx(
          appearence.initial,
          fullWidth && 'w-full',
          disabled && appearence.disabled,
          loading && appearence.loading,
          appearence.hovered,
          classes.root,
          borderRadius,
          height,
          className,
        )}
        {...props}
      >
        {children}
        {loading && (
          <div className="absolute right-2 top-1">
            <Loader size={size} />
          </div>
        )}
      </button>
    );
  },
);

export default Button;
