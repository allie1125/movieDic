import styles from './movieCard.module.scss'

const MovieCard = () => {
  return (
    <main className={styles.cardWrapper}>
      <section className={styles.movieCard}>
        <div className={styles.posterWrapper}>poster</div>
        <div className={styles.textWrapper}>letter</div>
      </section>
      <section className={styles.movieCard}>
        <div className={styles.posterWrapper}>poster</div>
        <div className={styles.textWrapper}>letter</div>
      </section>
      <section className={styles.movieCard}>
        <div className={styles.posterWrapper}>poster</div>
        <div className={styles.textWrapper}>letter</div>
      </section>
      <section className={styles.movieCard}>
        <div className={styles.posterWrapper}>poster</div>
        <div className={styles.textWrapper}>letter</div>
      </section>
      <section className={styles.movieCard}>sdf</section>
      <section className={styles.movieCard}>
        <div className={styles.posterWrapper}>poster</div>
        <div className={styles.textWrapper}>letter</div>
      </section>
      <section className={styles.movieCard}>sdf</section>
      <section className={styles.movieCard}>
        <div className={styles.posterWrapper}>poster</div>
        <div className={styles.textWrapper}>letter</div>
      </section>
    </main>
  )
}

export default MovieCard
