import { ColorType, RoundedType, SizeType, VariantType } from '@/types/type';
import clsx from 'clsx';
import { FC } from 'react';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import classes from './classes';

type ButtonIconProps = {
  onClick: React.MouseEventHandler;
  children: React.ReactNode;
  variant?: VariantType;
  rounded?: RoundedType;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  color?: ColorType;
  size?: SizeType;
};

const ButtonIcon: FC<ButtonIconProps> = ({
  variant = 'filled',
  color = 'base',
  rounded = 'lg',
  size = 'md',
  children,
  disabled,
  loading,
  onClick,
}) => {
  return (
    <Button
      className={clsx(
        classes.root.button,
        classes.size[size],
        loading && '!cursor-wait',
      )}
      disabled={disabled || loading}
      onClick={onClick}
      rounded={rounded}
      variant={variant}
      color={color}
      size={size}
    >
      <div
        className={clsx({
          [classes.colors[color].disabled]: loading,
        })}
      >
        {!loading ? children : <Loader size="md" />}
      </div>
    </Button>
  );
};

export default ButtonIcon;
