import { ThicknessFontEnum, TypographySizeEnum } from '../types/enum';
import { ThicknessFontType, TypographySizeType } from '../types/type';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Typography from '../components/atoms/Typography/Typography';

const sizes = Object.keys(TypographySizeEnum) as TypographySizeType[];
const fontWeight = Object.keys(ThicknessFontEnum) as ThicknessFontType[];

export default {
  title: 'Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

export const Size: ComponentStory<typeof Typography> = () => (
  <section className="flex flex-col gap-3">
    {sizes.map((size) => (
      <Typography size={size}>Lorem ipsum dolor sit amet</Typography>
    ))}
  </section>
);

export const Thickness: ComponentStory<typeof Typography> = () => (
  <section className="flex flex-col gap-4">
    {fontWeight.map((weight) => (
      <Typography thickness={weight}>Lorem ipsum dolor sit amet</Typography>
    ))}
  </section>
);
