import { TypographySizeEnum } from '../types/enum';
import { TypographySizeType } from '../types/type';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Typography from '../components/atoms/Typography/Typography';

const sizes = Object.keys(TypographySizeEnum) as TypographySizeType[];

export default {
  title: 'Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

export const Size: ComponentStory<typeof Typography> = () => (
  <section className="flex flex-col gap-4">
    {sizes.map((size) => (
      <Typography size={size}>Lorem ipsum dolor sit amet</Typography>
    ))}
  </section>
);
