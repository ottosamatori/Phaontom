const classes = {
  root: 'text-center box-border',
  size: {
    lg: 'h-12 px-4',
    md: 'h-10 px-3',
    sm: 'h-8 px-2'
  },
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  },
  color: {
    base: {
      variant: {
        filled: {
          initial: 'bg-primary text-white',
          hovered: 'hover:bg-secondary',
          loading: 'bg-secondary text-tertiary'
        },
        stroked: {
          initial: 'border border-0.5 border-primary text-primary',
          hovered: 'hover:border-secondary hover:bg-secondary hover:text-white',
          loading: 'bg-secondary text-tertiary'
        },
        faded: {
          initial: 'bg-transparent text-primary',
          hovered: 'hover:bg-quaternary',
          loading: 'bg-quaternary text-tertiary'
        }
      }
    },
    neutral: {
      variant: {
        filled: {
          initial: 'bg-darkslategray-800 text-white',
          hovered: 'hover:bg-darkslategray-700',
          loading: 'bg-darkslategray-800 text-darklightgray-500'
        },
        stroked: {
          initial: 'border border-0.5 border-darkslategray-800 text-darkslategray-800',
          hovered: 'hover:border-darkslategray-700 hover:bg-darkslategray-700 hover:text-white',
          loading: 'bg-darkslategray-700 text-darklightgray-500'
        },
        faded: {
          initial: 'bg-transparent text-darkslategray-800',
          hovered: 'hover:bg-darkslategray-100 hover:text-white',
          loading: 'bg-darkslategray-100 text-darklightgray-400'
        }
      }
    },
    error: {
      variant: {
        filled: {
          initial: 'bg-red-500 text-white',
          hovered: 'hover:bg-red-400',
          loading: 'bg-red-400 text-red-200'
        },
        stroked: {
          initial: 'border border-0.5 border-red-500 text-red-500',
          hovered: 'hover:border-red-400 hover:bg-red-400 hover:text-white',
          loading: 'bg-red-400 text-red-200'
        },
        faded: {
          initial: 'bg-transparent text-red-500',
          hovered: 'hover:bg-red-100 hover:text-red-500',
          loading: 'bg-red-100 text-red-400'
        }
      }
    },
    warning: {
      variant: {
        filled: {
          initial: 'bg-amber-500 text-white',
          hovered: 'hover:bg-amber-400 text-white',
          loading: 'bg-amber-400 text-tertiary'
        },
        stroked: {
          initial: 'border border-0.5 border-amber-500 text-amber-500',
          hovered: 'hover:border-amber-400 hover:bg-amber-400 hover:text-white',
          loading: 'bg-amber-400 text-amber-200'
        },
        faded: {
          initial: 'bg-transparent text-amber-500',
          hovered: 'hover:bg-amber-100',
          loading: 'bg-secondary text-amber-400'
        }
      }
    },
    info:{
      variant: {
        filled: {
          initial: 'bg-blue-500 text-white',
          hovered: 'hover:bg-blue-400',
          loading: 'bg-blue-400 text-tertiary'
        },
        stroked: {
          initial: 'border border-0.5 border-blue-500 text-blue-500',
          hovered: 'hover:border-blue-400 hover:bg-blue-400 hover:text-white',
          loading: 'bg-blue-400 text-blue-200'
        },
        faded: {
          initial: 'bg-transparent text-blue-500',
          hovered: 'hover:bg-blue-100',
          loading: 'bg-blue-100 text-blue-400'
        }
      }
    },
    success: {
      variant: {
        filled: {
          initial: 'bg-green-500 text-white',
          hovered: 'hover:bg-green-400',
          loading: 'bg-green-400 text-tertiary'
        },
        stroked: {
          initial: 'border border-0.5 border-green-500 text-green-500',
          hovered: 'hover:border-green-400 hover:bg-green-400 hover:text-white',
          loading: 'bg-green-400 text-green-200'
        },
        faded: {
          initial: 'bg-transparent text-green-500',
          hovered: 'hover:bg-green-100',
          loading: 'bg-green-100 text-green-400'
        }
      }
    }
  }
}

export default classes