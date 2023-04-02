import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ColorType, RoundedType, SizeType } from '../types/type';
import ButtonIcon from '../components/atoms/ButtonIcon/ButtonIcon';
import RocketIcon from '../components/commons/RocketIcon';
import { Fragment } from 'react';

const colors: ColorType[] = [
  'base',
  'neutral',
  'error',
  'warning',
  'info',
  'success',
];

const borderRadius: RoundedType[] = ['none', 'sm', 'md', 'lg', 'xl', 'full'];
const sizes: SizeType[] = ['lg', 'md', 'sm'];

export default {
  title: 'Design system/Atoms/ButtonIcon',
  component: ButtonIcon,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof ButtonIcon>;

export const Rounded: ComponentStory<typeof ButtonIcon> = () => (
  <section className="flex flex-col gap-4">
    {colors.map((color) => (
      <section className="flex gap-4">
        {sizes.map((size) =>
          borderRadius.map((rounded) => (
            <ButtonIcon
              onClick={action('Clicked !')}
              key={`${color}_${rounded}`}
              rounded={rounded}
              color={color}
              size={size}
            >
              <RocketIcon size={20} />
            </ButtonIcon>
          )),
        )}
      </section>
    ))}
  </section>
);

export const Disabled: ComponentStory<typeof ButtonIcon> = () => (
  <section className="flex flex-col gap-4">
    {colors.map((color) => (
      <section className="flex gap-4">
        {sizes.map((size) =>
          borderRadius.map((rounded) => (
            <ButtonIcon
              disabled
              size={size}
              color={color}
              rounded={rounded}
              key={`${color}_${rounded}`}
              onClick={action('Clicked !')}
            >
              <RocketIcon size={20} />
            </ButtonIcon>
          )),
        )}
      </section>
    ))}
  </section>
);

export const Loading: ComponentStory<typeof ButtonIcon> = () => (
  <section className="flex flex-col gap-4">
    {colors.map((color) => (
      <section className="flex gap-4">
        {sizes.map((size) =>
          borderRadius.map((rounded) => (
            <ButtonIcon
              loading
              size={size}
              color={color}
              rounded={rounded}
              key={`${color}_${rounded}`}
              onClick={action('Clicked !')}
            >
              <RocketIcon size={20} />
            </ButtonIcon>
          )),
        )}
      </section>
    ))}
  </section>
);
