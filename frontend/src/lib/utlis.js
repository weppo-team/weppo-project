export const getResolution = () => {
  const { width, height } = window.screen

  return { width, height }
}
