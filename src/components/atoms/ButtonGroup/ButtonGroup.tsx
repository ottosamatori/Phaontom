import clsx from 'clsx';
import { ReactNode, cloneElement } from 'react';

type ButtonGroupProps = {
  children: ReactNode[];
};

const ButtonGroup = ({ children }: ButtonGroupProps) => {
  const childrenComponent = children.map((child: any, index: number) => {
    const isFirstItem = index === 0;
    const isLastItem = index === children.length - 1;
    const isMiddleItem = !isLastItem;
    return cloneElement(child, {
      key: index,
      ...child.props,
      className: clsx(
        { 'border-r-black-base/10': child.props.variant === 'initial' },
        { 'rounded-r-none': isFirstItem },
        { 'rounded-l-none': isLastItem },
        { 'rounded-none': isMiddleItem && !isFirstItem },
        child.props.className,
      ),
    });
  });
  return <div className="flex gap-[0.5px]">{childrenComponent}</div>;
};

export default ButtonGroup;
