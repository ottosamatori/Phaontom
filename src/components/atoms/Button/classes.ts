const classes = {
  root: 'text-center text-white',
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
          initial: 'bg-primary ',
          focused: 'hover:bg-secondary',
          loading: 'bg-secondary text-tertiary'
        },
        stroked: {
          initial: 'bg-primary text-white',
          focused: 'hover:bg-secondary text-white',
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
          loading: 'bg-darkslategray-800 text-tertiary'
        },
        stroked: {
          initial: 'bg-primary text-white',
          focused: 'hover:bg-secondary text-white',
          loading: 'bg-secondary text-tertiary'
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
          loading: 'bg-red-400 text-tertiary'
        },
        stroked: {
          initial: 'bg-primary text-white',
          focused: 'hover:bg-secondary text-white',
          loading: 'bg-secondary text-tertiary'
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
          initial: 'bg-primary text-white',
          focused: 'hover:bg-secondary text-white',
          loading: 'bg-secondary text-tertiary'
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
          initial: 'bg-primary text-white',
          focused: 'hover:bg-secondary text-white',
          loading: 'bg-secondary text-tertiary'
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
          initial: 'bg-primary text-white',
          focused: 'hover:bg-secondary text-white',
          loading: 'bg-secondary text-tertiary'
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