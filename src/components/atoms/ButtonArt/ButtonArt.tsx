import { NOOP } from '../../../constants/global';
import { ColorType, RoundedType, SizeType, VariantType } from '@/types/type';
import { ButtonHTMLAttributes, FC, Fragment, useRef } from 'react';
import Button from '../Button/Button';

interface ButtonArtProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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

const ButtonArt: FC<ButtonArtProps> = ({ children }) => {
  return (
    <div className="flex">
      <div className="flex -mr-4 relative z-10">
        <div className="h-12 w-10 bg-[#007bff] rounded-tl-lg rounded-bl-lg" />
        <div
          style={{
            width: 10,
            height: 48,
            borderStyle: 'solid',
            borderWidth: `24px 0 24px 5px`,
            borderColor: 'transparent transparent transparent #007bff',
          }}
        />
      </div>
      <Button onClick={NOOP} className="relative">
        {children}
      </Button>
    </div>
  );
};

export default ButtonArt;
