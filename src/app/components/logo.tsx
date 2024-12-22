import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <Image
        src="/assets/logo.jpg" // Aapke public folder mein image ka path
        alt="Logo"
        width={200} // Required width
        height={200} // Required height
        className={styles.logoImage}
      />
    </div>
  )
}

export default Logo;