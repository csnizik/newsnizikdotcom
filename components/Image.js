import NextImage from 'next/image'

// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ ...rest }) => (
  <NextImage
    className={
      'h-auto max-w-lg cursor-pointer rounded-lg grayscale filter transition-all duration-300 hover:grayscale-0'
    }
    {...rest}
  />
)

export default Image
