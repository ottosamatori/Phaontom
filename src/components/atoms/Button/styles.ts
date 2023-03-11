const styles = {
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
          normal: 'bg-primary ',
          focused: 'hover:bg-secondary',
          loading: 'bg-secondary text-tertiary'
        },
        stroked: {
          normal: 'bg-primary text-white',
          focused: 'hover:bg-secondary text-white',
          loading: 'bg-secondary text-tertiary'
        },
        faded: {
          normal: 'bg-primary text-white',
          focused: 'hover:bg-secondary text-white',
          loading: 'bg-secondary text-tertiary'
        }
      }
    },
    neutral: {
      variant: {
        filled: {
          normal: 'bg-darkslategray-800 text-white',
          focused: 'hover:bg-darkslategray-700 text-white',
          loading: 'bg-darkslategray-800 text-tertiary'
        },
        stroked: {
          normal: 'bg-primary text-white',
          focused: 'hover:bg-secondary text-white',
          loading: 'bg-secondary text-tertiary'
        },
        faded: {
          normal: 'bg-primary text-white',
          focused: 'hover:bg-secondary text-white',
          loading: 'bg-secondary text-tertiary'
        }
      }
    },
    error: {
      variant: {
        filled: {
          normal: 'bg-red-500 text-white',
          focused: 'hover:bg-red-400 text-white',
          loading: 'bg-red-400 text-tertiary'
        },
        stroked: {
          normal: 'bg-primary text-white',
          focused: 'hover:bg-secondary text-white',
          loading: 'bg-secondary text-tertiary'
        },
        faded: {
          normal: 'bg-primary text-white',
          focused: 'hover:bg-secondary text-white',
          loading: 'bg-secondary text-tertiary'
        }
      }
    },
    warning: {
      variant: {
        filled: {
          normal: 'bg-amber-500 text-white',
          focused: 'hover:bg-amber-400 text-white',
          loading: 'bg-amber-400 text-tertiary'
        },
        stroked: {
          normal: 'bg-primary text-white',
          focused: 'hover:bg-secondary text-white',
          loading: 'bg-secondary text-tertiary'
        },
        faded: {
          normal: 'bg-primary text-white',
          focused: 'hover:bg-secondary text-white',
          loading: 'bg-secondary text-tertiary'
        }
      }
    },
    info:{
      variant: {
        filled: {
          normal: 'bg-blue-500 text-white',
          focused: 'hover:bg-blue-400 text-white',
          loading: 'bg-blue-400 text-tertiary'
        },
        stroked: {
          normal: 'bg-primary text-white',
          focused: 'hover:bg-secondary text-white',
          loading: 'bg-secondary text-tertiary'
        },
        faded: {
          normal: 'bg-primary text-white',
          focused: 'hover:bg-secondary text-white',
          loading: 'bg-secondary text-tertiary'
        }
      }
    },
    success: {
      variant: {
        filled: {
          normal: 'bg-green-500 text-white',
          focused: 'hover:bg-green-400 text-white',
          loading: 'bg-green-400 text-tertiary'
        },
        stroked: {
          normal: 'bg-primary text-white',
          focused: 'hover:bg-secondary text-white',
          loading: 'bg-secondary text-tertiary'
        },
        faded: {
          normal: 'bg-primary text-white',
          focused: 'hover:bg-secondary text-white',
          loading: 'bg-secondary text-tertiary'
        }
      }
    }
  }
}

export default styles