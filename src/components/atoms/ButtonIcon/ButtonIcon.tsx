import { ColorType, RoundedType, SizeType } from '@/types/type';
import clsx from 'clsx';
import { FC } from 'react';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import classes from './classes';

type ButtonIconProps = {
  onClick: React.MouseEventHandler;
  children: React.ReactNode;
  rounded?: RoundedType;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  color?: ColorType;
  size?: SizeType;
};

const ButtonIcon: FC<ButtonIconProps> = ({
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
      className={clsx(classes.root.button, classes.size[size])}
      disabled={disabled || loading}
      onClick={onClick}
      rounded={rounded}
      color={color}
      size={size}
    >
      <div
        className={clsx({
          [(classes.colors[color].disabled, 'cursor-wait')]: loading,
        })}
      >
        {!loading ? children : <Loader size="md" />}
      </div>
    </Button>
  );
};

export default ButtonIcon;
