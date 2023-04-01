import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ColorType, RoundedType } from '../types/type';
import ButtonArt from '../components/atoms/ButtonArt/ButtonArt';
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

const borderRadius: Extract<RoundedType, 'lg' | 'full'>[] = ['lg', 'full'];

export default {
  title: 'Design system/Atoms/ButtonArt',
  component: ButtonArt,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof ButtonArt>;

export const Color: ComponentStory<typeof ButtonArt> = () => (
  <section className="flex flex-col gap-4">
    {colors.map((color) => (
      <section className="flex gap-4">
        {borderRadius.map((rounded) => (
          <ButtonArt
            icon={<RocketIcon size={20} />}
            onClick={action('Clicked !')}
            key={`${color}_${rounded}`}
            rounded={rounded}
            color={color}
          >
            Button
          </ButtonArt>
        ))}
      </section>
    ))}
  </section>
);

export const FullWidth: ComponentStory<typeof ButtonArt> = () => (
  <section className="flex flex-col gap-4">
    {colors.map((color) => (
      <section className="flex gap-4">
        {borderRadius.map((rounded) => (
          <ButtonArt
            fullWidth
            color={color}
            rounded={rounded}
            onClick={action('Clicked !')}
            key={`${color}_${rounded}`}
            icon={<RocketIcon size={20} />}
          >
            Button full width
          </ButtonArt>
        ))}
      </section>
    ))}
  </section>
);

export const Status: ComponentStory<typeof ButtonArt> = () => (
  <section className="flex flex-col gap-4">
    {colors.map((color) => (
      <section className="flex gap-4">
        {borderRadius.map((rounded) => (
          <Fragment>
            <ButtonArt
              color={color}
              rounded={rounded}
              onClick={action('Clicked !')}
              key={`${color}_${rounded}`}
              icon={<RocketIcon size={20} />}
            >
              Button
            </ButtonArt>
            <ButtonArt
              disabled
              color={color}
              rounded={rounded}
              onClick={action('Clicked !')}
              key={`${color}_${rounded}`}
              icon={<RocketIcon size={20} />}
            >
              Button
            </ButtonArt>
            <ButtonArt
              loading
              color={color}
              rounded={rounded}
              onClick={action('Clicked !')}
              key={`${color}_${rounded}`}
              icon={<RocketIcon size={20} />}
            >
              Button
            </ButtonArt>
          </Fragment>
        ))}
      </section>
    ))}
  </section>
);
