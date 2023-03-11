import React from 'react';
import clsx from 'clsx';
import { ThicknessFontEnum, TypographySizeEnum } from '../../../types/enum';
import { TagType, TypographySizeType } from '../../../types/type';

type TypographyProps = {
  thickness?: keyof typeof ThicknessFontEnum;
  style?: React.CSSProperties;
  size?: TypographySizeType;
  children: React.ReactNode;
  className?: string;
  tag?: TagType;
};

const Typography = ({
  thickness = 'regular',
  size = 'md',
  tag = 'p',
  className,
  children,
  style,
}: TypographyProps) => {
  const Tag = tag as keyof JSX.IntrinsicElements;
  const fontWeight = ThicknessFontEnum[thickness];
  const fontSize = TypographySizeEnum[size];

  return (
    <Tag className={clsx(className, fontWeight, fontSize)} style={style}>
      {children}
    </Tag>
  );
};

export default Typography;
