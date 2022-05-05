import reactLogo from '../logo.svg'

export function ReactLogo() {
  return (
    <img
      alt='React logo'
      src={reactLogo}
      style={{
        bottom: '20px',
        position: 'fixed',
        right: '20px',
        width: '90px'
      }}
    />
  )
}
