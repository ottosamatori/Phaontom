const classes = {
  root: 'text-center',
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
          focused: 'hover:bg-secondary',
          loading: 'bg-secondary text-tertiary'
        },
        stroked: {
          initial: 'box-border border border-0.5 border-primary text-primary',
          focused: 'hover:border-secondary hover:bg-secondary hover:text-white',
          loading: 'bg-secondary text-tertiary'
        },
        faded: {
          initial: 'bg-primary text-white',
          focused: 'hover:bg-secondary text-white',
          loading: 'bg-secondary text-tertiary'
        }
      }
    },
    neutral: {
      variant: {
        filled: {
          initial: 'bg-darkslategray-800 text-white',
          focused: 'hover:bg-darkslategray-700 text-white',
          loading: 'bg-darkslategray-800 text-darklightgray-500'
        },
        stroked: {
          initial: 'box-border border border-0.5 border-darkslategray-800 text-darkslategray-800',
          focused: 'hover:border-darkslategray-700 hover:bg-darkslategray-700 hover:text-white',
          loading: 'bg-darkslategray-700 text-darklightgray-500'
        },
        faded: {
          initial: 'bg-primary text-white',
          focused: 'hover:bg-secondary text-white',
          loading: 'bg-secondary text-tertiary'
        }
      }
    },
    error: {
      variant: {
        filled: {
          initial: 'bg-red-500 text-white',
          focused: 'hover:bg-red-400 text-white',
          loading: 'bg-red-400 text-red-200'
        },
        stroked: {
          initial: 'box-border border border-0.5 border-red-500 text-red-500',
          focused: 'hover:border-red-400 hover:bg-red-400 hover:text-white',
          loading: 'bg-red-400 text-red-200'
        },
        faded: {
          initial: 'bg-primary text-white',
          focused: 'hover:bg-secondary text-white',
          loading: 'bg-secondary text-tertiary'
        }
      }
    },
    warning: {
      variant: {
        filled: {
          initial: 'bg-amber-500 text-white',
          focused: 'hover:bg-amber-400 text-white',
          loading: 'bg-amber-400 text-tertiary'
        },
        stroked: {
          initial: 'box-border border border-0.5 border-amber-500 text-amber-500',
          focused: 'hover:border-amber-400 hover:bg-amber-400 hover:text-white',
          loading: 'bg-amber-400 text-amber-200'
        },
        faded: {
          initial: 'bg-primary text-white',
          focused: 'hover:bg-secondary text-white',
          loading: 'bg-secondary text-tertiary'
        }
      }
    },
    info:{
      variant: {
        filled: {
          initial: 'bg-blue-500 text-white',
          focused: 'hover:bg-blue-400 text-white',
          loading: 'bg-blue-400 text-tertiary'
        },
        stroked: {
          initial: 'box-border border border-0.5 border-blue-500 text-blue-500',
          focused: 'hover:border-blue-400 hover:bg-blue-400 hover:text-white',
          loading: 'bg-blue-400 text-blue-200'
        },
        faded: {
          initial: 'bg-primary text-white',
          focused: 'hover:bg-secondary text-white',
          loading: 'bg-secondary text-tertiary'
        }
      }
    },
    success: {
      variant: {
        filled: {
          initial: 'bg-green-500 text-white',
          focused: 'hover:bg-green-400 text-white',
          loading: 'bg-green-400 text-tertiary'
        },
        stroked: {
          initial: 'box-border border border-0.5 border-green-500 text-green-500',
          focused: 'hover:border-green-400 hover:bg-green-400 hover:text-white',
          loading: 'bg-green-400 text-green-200'
        },
        faded: {
          initial: 'bg-primary text-white',
          focused: 'hover:bg-secondary text-white',
          loading: 'bg-secondary text-tertiary'
        }
      }
    }
  }
}

export default classes