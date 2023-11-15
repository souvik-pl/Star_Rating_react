import styles from "./App.module.css";
import Star from "./assets/Star";
import useApp from "./App.hook";

function App() {
  const {
    starState,
    ratingCount,
    starClickHandler
  } = useApp();

  return (
    <div className={styles.container}>
      <main className={styles.rating_container}>
        <section>
          {
            starState.map((state, index) => (
              <div
                className={styles.rating_star}
                key={index}
                onClick={starClickHandler(index)}
              >
                <Star width="100%" height="100%" fill={state === true ? 'yellow' : 'gray'} />
              </div>
            ))
          }
        </section>
        <section className={styles.rating_text}>
          Rating Count: {ratingCount}
        </section>
      </main>
    </div>
  )
}

export default App;
