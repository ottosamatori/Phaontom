import React, { ReactNode } from 'react';
import clsx from 'clsx';
import { tagMeaningEnum, ThicknessFontEnum } from '../../types/enum';

type TypographyProps = {
  className: string;
  children: ReactNode;
  size: keyof typeof tagMeaningEnum;
  thickness: keyof typeof ThicknessFontEnum;
};

const Typography = ({
  children,
  className,
  size = 'md',
  thickness = 'regular',
}: TypographyProps) => {
  const Tag = tagMeaningEnum[size] as keyof JSX.IntrinsicElements;
  const fontWeight = ThicknessFontEnum[thickness];

  return <Tag className={clsx(className, fontWeight)}>{children}</Tag>;
};

export default Typography;
