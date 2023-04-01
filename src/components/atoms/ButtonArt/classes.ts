const classes = {
  root: {
    childrenContainer: 'pl-6 pr-8',
    shapeContainer: 'flex relative z-10',
    base: 'h-12 flex items-center relative z-30',
    iconContainer: 'h-12 w-12 flex items-center justify-center',
    triangle: 'border-solid h-12 border-t-transparent border-b-transparent border-t-[24px] border-r-[0px] border-b-[24px] border-l-[5px]'
  },
  rounded: {
    lg: { iconContainer: 'rounded-tl-lg rounded-bl-lg', button: 'rounded-lg' },
    full: { iconContainer: 'rounded-tl-full rounded-bl-full', button: 'rounded-full' }
  },
  cursor: {
    initial: 'cursor-pointer',
    disabled: 'cursor-not-allowed',
    loading: 'cursor-wait'
  },
  color: {
    base: {
      button: {
        initial: 'bg-primary text-white',
        hovered: 'bg-secondary text-white',
        disabled: 'disabled:text-tertiary'
      },
      shape: {
        initial: {
          triangle: 'border-l-secondary border-r-secondary',
          iconContainer: 'bg-secondary text-white'
        },
        hovered: {
          triangle: 'border-l-primary border-r-primary',
          iconContainer: 'bg-primary text-white'
        },
      },
    },
    neutral: {
      button: {
        initial: 'bg-darkslategray-800 text-white',
        hovered: 'bg-darkslategray-700 text-white',
        disabled: 'disabled:text-darklightgray-500'
      },
      shape: {
        initial: {
          triangle: 'border-l-darkslategray-700 border-r-darkslategray-700',
          iconContainer: 'bg-darkslategray-700 text-white'
        },
        hovered: {
          triangle: 'border-l-darkslategray-800 border-r-darkslategray-800',
          iconContainer: 'bg-darkslategray-800 text-white'
        },
      },
    },
    error: {
      button: {
        initial: 'bg-red-500 text-white',
        hovered: 'bg-red-400 text-white',
        disabled: 'disabled:text-red-200'
      },
      shape: {
        initial: {
          triangle: 'border-l-red-400 border-r-red-400',
          iconContainer: 'bg-red-400 text-white'
        },
        hovered: {
          triangle: 'border-l-red-500 border-r-red-500',
          iconContainer: 'bg-red-500 text-white'
        },
      },
    },
    warning: {
      button: {
        initial: 'bg-amber-500 text-white',
        hovered: 'bg-amber-400 text-white',
        disabled: 'disabled:text-amber-200'
      },
      shape: {
        initial: {
          triangle: 'border-l-amber-400 border-r-amber-400',
          iconContainer: 'bg-amber-400 text-white'
        },
        hovered: {
          triangle: 'border-l-amber-500 border-r-amber-500',
          iconContainer: 'bg-amber-500 text-white'
        },
      },
    },
    info: {
      button: {
        initial: 'bg-blue-500 text-white',
        hovered: 'bg-blue-400 text-white',
        disabled: 'disabled:text-blue-200'
      },
      shape: {
        initial: {
          triangle: 'border-l-blue-400 border-r-blue-400',
          iconContainer: 'bg-blue-400 text-white'
        },
        hovered: {
          triangle: 'border-l-blue-500 border-r-blue-500',
          iconContainer: 'bg-blue-500 text-white'
        },
      },
    },
    success: {
      button: {
        initial: 'bg-green-500 text-white',
        hovered: 'bg-green-400 text-white',
        disabled: 'disabled:text-green-200'
      },
      shape: {
        initial: {
          triangle: 'border-l-green-400 border-r-green-400',
          iconContainer: 'bg-green-400 text-white'
        },
        hovered: {
          triangle: 'border-l-green-500 border-r-green-500',
          iconContainer: 'bg-green-500 text-white'
        },
      },
    },
  },
};

export default classes;
