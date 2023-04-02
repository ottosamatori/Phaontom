import { FC, ReactNode, useState } from 'react';
import { ColorType, RoundedType, SizeType } from '@/types/type';
import clsx from 'clsx';
import classes from './classes';
import Loader from '../Loader/Loader';

type ButtonArtProps = {
  rounded?: Extract<RoundedType, 'lg' | 'full'>;
  onClick: React.MouseEventHandler;
  children: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  color?: ColorType;
  size?: SizeType;
  icon: ReactNode;
};

const ButtonArt: FC<ButtonArtProps> = ({
  color = 'base',
  rounded = 'lg',
  fullWidth,
  disabled,
  children,
  loading,
  onClick,
  icon,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const borderRadius = classes.rounded[rounded];
  const button = classes.colors[color].button;
  const shape = classes.colors[color].shape;

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={clsx(
        fullWidth && 'w-full',
        borderRadius.button,
        classes.root.base,
        button?.disabled,
        {
          [classes.cursor.initial]: isHovered,
          [classes.cursor.disabled]: disabled,
          [classes.cursor.loading]: loading,
          [button?.initial]: !isHovered,
          [button?.hovered]: isHovered,
        },
      )}
    >
      <div className={classes.root.shapeContainer}>
        <div
          className={clsx(
            classes.root.iconContainer,
            borderRadius.iconContainer,
            {
              [shape.initial?.iconContainer]: !isHovered,
              [shape.hovered?.iconContainer]: isHovered,
              [classes.cursor.initial]: isHovered,
              [shape.loading]: loading || disabled,
            },
          )}
        >
          {icon}
        </div>
        <div
          className={clsx(classes.root.triangle, {
            [shape.initial?.triangle]: !isHovered,
            [shape.hovered?.triangle]: isHovered,
            [classes.cursor.initial]: isHovered,
          })}
        />
      </div>
      <div className={classes.root.childrenContainer}>{children}</div>
      {loading && (
        <div
          className={clsx('absolute right-2', rounded === 'lg' && 'top-1.5')}
        >
          <Loader size="md" />
        </div>
      )}
    </button>
  );
};

export default ButtonArt;
