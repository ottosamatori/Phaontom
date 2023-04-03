import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ColorType, RoundedType, SizeType } from '../types/type';
import ButtonGroup from '../components/atoms/ButtonGroup/ButtonGroup';
import Button from '../components/atoms/Button/Button';

const colors: ColorType[] = [
  'base',
  'neutral',
  'error',
  'warning',
  'info',
  'success',
];

const borderRadius: Extract<RoundedType, 'lg' | 'full'>[] = ['lg', 'full'];
const sizes: SizeType[] = ['lg', 'md', 'sm'];

export default {
  title: 'Design system/Atoms/ButtonGroup',
  component: ButtonGroup,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof ButtonGroup>;

export const Colors: ComponentStory<typeof ButtonGroup> = () => (
  <section className="flex flex-col gap-4">
    {colors.map((color) => (
      <section className="flex gap-4">
        {sizes.map((size) => (
          <section className="flex flex-col gap-4">
            {borderRadius.map((rounded) => (
              <ButtonGroup>
                <Button
                  size={size}
                  color={color}
                  rounded={rounded}
                  onClick={action('Clicked !')}
                >
                  Button
                </Button>
                <Button
                  size={size}
                  color={color}
                  rounded={rounded}
                  onClick={action('Clicked !')}
                >
                  Button
                </Button>
                <Button
                  size={size}
                  color={color}
                  rounded={rounded}
                  onClick={action('Clicked !')}
                >
                  Button
                </Button>
              </ButtonGroup>
            ))}
          </section>
        ))}
      </section>
    ))}
  </section>
);

export const Rounded: ComponentStory<typeof ButtonGroup> = () => (
  <section className="flex flex-col gap-4">
    <section className="flex gap-4">
      {borderRadius.map((rounded) => (
        <ButtonGroup>
          <Button
            color="neutral"
            rounded={rounded}
            onClick={action('Clicked !')}
          >
            Button
          </Button>
          <Button
            color="neutral"
            rounded={rounded}
            onClick={action('Clicked !')}
          >
            Button
          </Button>
          <Button
            color="neutral"
            rounded={rounded}
            onClick={action('Clicked !')}
          >
            Button
          </Button>
        </ButtonGroup>
      ))}
    </section>
  </section>
);

export const Size: ComponentStory<typeof ButtonGroup> = () => (
  <section className="flex flex-col gap-4">
    <section className="flex gap-4">
      {sizes.map((size) => (
        <section className="flex flex-col gap-4">
          {borderRadius.map((rounded) => (
            <ButtonGroup>
              <Button
                size={size}
                color="neutral"
                rounded={rounded}
                onClick={action('Clicked !')}
              >
                Button
              </Button>
              <Button
                size={size}
                color="neutral"
                rounded={rounded}
                onClick={action('Clicked !')}
              >
                Button
              </Button>
              <Button
                size={size}
                color="neutral"
                rounded={rounded}
                onClick={action('Clicked !')}
              >
                Button
              </Button>
            </ButtonGroup>
          ))}
        </section>
      ))}
    </section>
  </section>
);
