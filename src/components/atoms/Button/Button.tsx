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
    const appearence = classes.colors[color].variant[variant];
    const borderRadius = classes.rounded[rounded];
    const height = classes.size[size];

    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled || loading}
        className={clsx(
          disabled && appearence.disabled,
          loading && appearence.loading,
          fullWidth && 'w-full',
          appearence.initial,
          appearence.hovered,
          classes.root,
          borderRadius,
          height,
          className,
        )}
        {...props}
      >
        <div className="relative flex items-center justify-center">
          {children}
          {loading && (
            <div
              className={clsx(
                'absolute -right-6',
                rounded !== 'full' && {
                  '-top-1.5': size === 'lg',
                  '-top-0.5': size === 'md',
                  'top-0': size === 'sm',
                },
              )}
            >
              <Loader size={size} />
            </div>
          )}
        </div>
      </button>
    );
  },
);

export default Button;
