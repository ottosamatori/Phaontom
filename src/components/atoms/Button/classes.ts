const classes = {
  root: 'relative px-8',
  size: {
    lg: 'h-12',
    md: 'h-10',
    sm: 'h-8'
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
          loading: 'disabled:bg-secondary disabled:text-tertiary cursor-progress',
          disabled: 'disabled:bg-secondary disabled:text-tertiary cursor-not-allowed'
        },
        stroked: {
          initial: 'border border-0.5 border-primary text-primary',
          hovered: 'hover:border-transparent hover:bg-secondary hover:text-white',
          loading: 'disabled:bg-secondary disabled:border-transparent disabled:text-tertiary cursor-progress',
          disabled: 'disabled:bg-secondary disabled:border-transparent disabled:text-tertiary cursor-not-allowed'
        },
        faded: {
          initial: 'text-primary',
          hovered: 'hover:bg-quaternary',
          loading: 'disabled:bg-quaternary disabled:text-tertiary cursor-progress',
          disabled: 'disabled:bg-quaternary disabled:text-tertiary cursor-not-allowed'
        }
      }
    },
    neutral: {
      variant: {
        filled: {
          initial: 'bg-darkslategray-800 text-white',
          hovered: 'hover:bg-darkslategray-700',
          loading: 'disabled:bg-darkslategray-700 disabled:text-darklightgray-500 cursor-progress',
          disabled: 'disabled:bg-darkslategray-700 disabled:text-darklightgray-500 cursor-not-allowed'
        },
        stroked: {
          initial: 'border border-0.5 border-darkslategray-800 text-darkslategray-800',
          hovered: 'hover:border-transparent hover:bg-darkslategray-700 hover:text-white',
          loading: 'disabled:bg-darkslategray-700 border-transparent disabled:text-darklightgray-500 cursor-progress',
          disabled: 'disabled:bg-darkslategray-700 border-transparent disabled:text-darklightgray-500 cursor-not-allowed'
        },
        faded: {
          initial: 'text-darkslategray-800',
          hovered: 'hover:bg-darkslategray-100 hover:text-white',
          loading: 'disabled:bg-darkslategray-100 disabled:text-darklightgray-400 cursor-progress',
          disabled: 'disabled:bg-darkslategray-100 disabled:text-darklightgray-400 cursor-not-allowed'
        }
      }
    },
    error: {
      variant: {
        filled: {
          initial: 'bg-red-500 text-white',
          hovered: 'hover:bg-red-400',
          loading: 'disabled:bg-red-400 disabled:text-red-200 cursor-progress',
          disabled: 'disabled:bg-red-400 disabled:text-red-200 cursor-not-allowed'
        },
        stroked: {
          initial: 'border border-0.5 border-red-500 text-red-500',
          hovered: 'hover:border-transparent hover:bg-red-400 hover:text-white',
          loading: 'disabled:bg-red-400 border-transparent disabled:text-red-200 cursor-progress',
          disabled: 'disabled:bg-red-400 border-transparent disabled:text-red-200 cursor-not-allowed'
        },
        faded: {
          initial: 'text-red-500',
          hovered: 'hover:bg-red-100 hover:text-red-500',
          loading: 'disabled:bg-red-100 disabled:text-red-400 cursor-progress',
          disabled: 'disabled:bg-red-100 disabled:text-red-400 cursor-not-allowed'
        }
      }
    },
    warning: {
      variant: {
        filled: {
          initial: 'bg-amber-500 text-white',
          hovered: 'hover:bg-amber-400 text-white',
          loading: 'disabled:bg-amber-400 disabled:text-amber-200 cursor-progress',
          disabled: 'disabled:bg-amber-400 disabled:text-amber-200 cursor-not-allowed'
        },
        stroked: {
          initial: 'border border-0.5 border-amber-500 text-amber-500',
          hovered: 'hover:border-transparent hover:bg-amber-400 hover:text-white',
          loading: 'disabled:bg-amber-400 border-transparent disabled:text-amber-200 cursor-progress',
          disabled: 'disabled:bg-amber-400 border-transparent disabled:text-amber-200 cursor-not-allowed'
        },
        faded: {
          initial: 'text-amber-500',
          hovered: 'hover:bg-amber-100',
          loading: 'disabled:bg-amber-100 disabled:text-amber-400 cursor-progress',
          disabled: 'disabled:bg-amber-100 disabled:text-amber-400 cursor-not-allowed'
        }
      }
    },
    info:{
      variant: {
        filled: {
          initial: 'bg-blue-500 text-white',
          hovered: 'hover:bg-blue-400',
          loading: 'disabled:bg-blue-400 disabled:text-blue-200 cursor-progress',
          disabled: 'disabled:bg-blue-400 disabled:text-blue-200 cursor-not-allowed'
        },
        stroked: {
          initial: 'border border-0.5 border-blue-500 text-blue-500',
          hovered: 'hover:border-transparent hover:bg-blue-400 hover:text-white',
          loading: 'disabled:bg-blue-400 border-transparent disabled:text-blue-200 cursor-progress',
          disabled: 'disabled:bg-blue-400 border-transparent disabled:text-blue-200 cursor-not-allowed'
        },
        faded: {
          initial: 'text-blue-500',
          hovered: 'hover:bg-blue-100',
          loading: 'disabled:bg-blue-100 disabled:text-blue-400 cursor-progress',
          disabled: 'disabled:bg-blue-100 disabled:text-blue-400 cursor-not-allowed'
        }
      }
    },
    success: {
      variant: {
        filled: {
          initial: 'bg-green-500 text-white',
          hovered: 'hover:bg-green-400',
          loading: 'disabled:bg-green-400 disabled:text-green-200 cursor-progress',
          disabled: 'disabled:bg-green-400 disabled:text-green-200 cursor-not-allowed'
        },
        stroked: {
          initial: 'border border-0.5 border-green-500 text-green-500',
          hovered: 'hover:border-transparent hover:bg-green-400 hover:text-white',
          loading: 'disabled:bg-green-400 border-transparent disabled:text-green-200 cursor-progress',
          disabled: 'disabled:bg-green-400 border-transparent disabled:text-green-200 cursor-not-allowed',
        },
        faded: {
          initial: 'text-green-500',
          hovered: 'hover:bg-green-100',
          loading: 'disabled:bg-green-100 disabled:text-green-400 cursor-progress',
          disabled: 'disabled:bg-green-100 disabled:text-green-400 cursor-not-allowed'
        }
      }
    }
  }
}

export default classes