import { ThicknessFontEnum, TypographySizeEnum } from "./enum";

export type VariantType = 'filled' | 'stroked' | 'faded'
export type ColorType = 'base' | 'neutral' | 'error' | 'warning' | 'info' | 'success'
export type SizeType = 'sm' | 'md' | 'lg'
export type RoundedType = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full' 
export type TagType = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export type TypographySizeType = keyof typeof TypographySizeEnum
export type ThicknessFontType = keyof typeof ThicknessFontEnum


