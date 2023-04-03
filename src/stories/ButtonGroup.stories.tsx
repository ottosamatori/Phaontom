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

export const Color: ComponentStory<typeof ButtonGroup> = () => (
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

// export const FullWidth: ComponentStory<typeof ButtonGroup> = () => (
//   <section className="flex flex-col gap-4">
//     {colors.map((color) => (
//       <section className="flex gap-4">
//         {borderRadius.map((rounded) => (
//           <ButtonGroup
//             fullWidth
//             color={color}
//             rounded={rounded}
//             onClick={action('Clicked !')}
//             key={`${color}_${rounded}`}
//             icon={<RocketIcon size={20} />}
//           >
//             Button full width
//           </ButtonGroup>
//         ))}
//       </section>
//     ))}
//   </section>
// );

// export const Status: ComponentStory<typeof ButtonGroup> = () => (
//   <section className="flex flex-col gap-4">
//     {colors.map((color) => (
//       <section className="flex gap-4">
//         {borderRadius.map((rounded) => (
//           <Fragment>
//             <ButtonGroup
//               color={color}
//               rounded={rounded}
//               onClick={action('Clicked !')}
//               key={`${color}_${rounded}`}
//               icon={<RocketIcon size={20} />}
//             >
//               Button
//             </ButtonGroup>
//             <ButtonGroup
//               disabled
//               color={color}
//               rounded={rounded}
//               onClick={action('Clicked !')}
//               key={`${color}_${rounded}`}
//               icon={<RocketIcon size={20} />}
//             >
//               Button
//             </ButtonGroup>
//             <ButtonGroup
//               loading
//               color={color}
//               rounded={rounded}
//               onClick={action('Clicked !')}
//               key={`${color}_${rounded}`}
//               icon={<RocketIcon size={20} />}
//             >
//               Button
//             </ButtonGroup>
//           </Fragment>
//         ))}
//       </section>
//     ))}
//   </section>
// );
