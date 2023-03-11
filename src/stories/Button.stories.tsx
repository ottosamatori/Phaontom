import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../components/atoms/Button/Button';
import { action } from '@storybook/addon-actions';
import { ColorType, SizeType, VariantType } from '../types/type';

const colors: ColorType[] = [
  'base',
  'neutral',
  'error',
  'warning',
  'info',
  'success',
];
const sizes: SizeType[] = ['lg', 'md', 'sm'];
const variants: VariantType[] = ['filled', 'stroked', 'faded'];

export default {
  title: 'Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Button>;

export const Color: ComponentStory<typeof Button> = () => (
  <section className="flex flex-col gap-4">
    {colors.map((color) => (
      <section className="flex gap-4">
        {sizes.map((size) => (
          <Button
            key={`${color}_${size}`}
            onClick={action('Clicked !')}
            size={size}
            color={color}
            variant="filled"
          >
            Button
          </Button>
        ))}
      </section>
    ))}
  </section>
);

export const Variant: ComponentStory<typeof Button> = () => (
  <section className="flex gap-8">
    {variants.map((variant) => (
      <section className="flex flex-col gap-4">
        {colors.map((color) => (
          <section className="flex items-center gap-4">
            {sizes.map((size) => (
              <Button
                key={`${color}_${size}_${variant}`}
                onClick={action('Clicked !')}
                variant={variant}
                color={color}
                size={size}
              >
                Button
              </Button>
            ))}
          </section>
        ))}
      </section>
    ))}
  </section>
);
