import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../components/atoms/Button/Button';
import { action } from '@storybook/addon-actions';
import { ColorType, RoundedType, SizeType, VariantType } from '../types/type';
import { Fragment } from 'react';

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
const borderRadius: RoundedType[] = ['none', 'sm', 'md', 'lg', 'xl', 'full'];

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

export const Status: ComponentStory<typeof Button> = () => (
  <section className="flex flex-col gap-8">
    {variants.map((variant) => (
      <section className="flex flex-col gap-4">
        {colors.map((color) => (
          <section className="flex items-center gap-4">
            {sizes.map((size) => (
              <Fragment key={`${color}_${size}_${variant}`}>
                <Button
                  onClick={action('Clicked !')}
                  variant={variant}
                  color={color}
                  size={size}
                >
                  Button
                </Button>
                <Button
                  disabled
                  onClick={action('Clicked !')}
                  variant={variant}
                  color={color}
                  size={size}
                >
                  Button
                </Button>
                <Button
                  loading
                  onClick={action('Clicked !')}
                  variant={variant}
                  color={color}
                  size={size}
                >
                  Button
                </Button>
              </Fragment>
            ))}
          </section>
        ))}
      </section>
    ))}
  </section>
);

type ButtonRoundedTemplateProps = {
  size: SizeType;
  rounded: RoundedType;
  color: ColorType;
  variant: VariantType;
};

const ButtonRoundedTemplate = ({
  size,
  color,
  variant,
  rounded,
}: ButtonRoundedTemplateProps) => (
  <section className="flex gap-4 mb-1.5">
    <Button
      size={size}
      color={color}
      rounded={rounded}
      variant={variant}
      onClick={action('Clicked !')}
    >
      Button
    </Button>
    <Button
      disabled
      size={size}
      color={color}
      rounded={rounded}
      variant={variant}
      onClick={action('Clicked !')}
    >
      Button
    </Button>
    <Button
      loading
      size={size}
      color={color}
      rounded={rounded}
      variant={variant}
      onClick={action('Clicked !')}
    >
      Button
    </Button>
  </section>
);

export const Rounded: ComponentStory<typeof Button> = ({
  color = 'neutral',
  variant = 'filled',
}) => (
  <section className="flex flex-col gap-4">
    {borderRadius.map((border, index) => (
      <Fragment key={index}>
        <ButtonRoundedTemplate
          size="lg"
          color={color}
          rounded={border}
          variant={variant}
        />
        <ButtonRoundedTemplate
          size="md"
          color={color}
          rounded={border}
          variant={variant}
        />
        <ButtonRoundedTemplate
          size="sm"
          color={color}
          rounded={border}
          variant={variant}
        />
      </Fragment>
    ))}
  </section>
);
