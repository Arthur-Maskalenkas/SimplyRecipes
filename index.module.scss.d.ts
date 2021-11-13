// https://github.com/vercel/next-plugins/issues/91#issuecomment-372089878
declare module '*.scss' {
  const content: { [className: string]: string }
  export = content
}
