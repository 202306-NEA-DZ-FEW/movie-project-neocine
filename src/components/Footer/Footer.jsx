import styles from "@/styles/footer.module.css"
import GitHubIcon from "@mui/icons-material/GitHub"
export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div>
        <a href="/">
          <img src="/../../../../logo.svg" alt="NeoCine Logo" />
        </a>
      </div>
      <div className={styles.teamBox}>
        <h1>team</h1>
        <h2>Sidahmed slikh</h2>
        <h2>Benarba Tewfik</h2>
        <h2>Bouchra ikram aboura</h2>
        <h2>Youssef sergma</h2>
        <h2>imane omari</h2>
        <h2>Melissa Sidi Said</h2>
      </div>
      <div className={styles.linkedinBox}>
        <h1>linkedin</h1>
        <a
          href="https://www.linkedin.com/in/sidahmed-zinedine"
          target={"_blank"}
        >
          linkedin/Sidahmed slikh
        </a>
        <a href="www.linkedin.com/in/mohammed-tewfik-benarba" target={"_blank"}>
          linkedin/Benarba Tewfik
        </a>
        <a
          href="https://www.linkedin.com/in/bouchra-ikram-aboura-1750b5169/"
          target={"_blank"}
        >
          linkedin/Bouchra ikram aboura
        </a>
        <a href="https://www.linkedin.com/in/sergma">linkedin/Youssef sergma</a>
        <a href="https://www.linkedin.com/in/iman-omari" target={"_blank"}>
          linkedin/imane omari
        </a>
        <a
          href="https://www.linkedin.com/in/milyssa-sidisaid-46170a232/"
          target={"_blank"}
        >
          linkedin/Melissa Sidi Said
        </a>
      </div>
      <div className={styles.githubBox}>
        <h1>github</h1>
        <a href="https://github.com/Zino0031" target={"_blank"}>
          Zino0031
        </a>
        <a href="https://github.com/Ben-Tewfik" target="_blank">
          Ben-Tewfik
        </a>
        <a href="https://github.com/ikoworld" target={"_blank"}>
          ikoworld
        </a>
        <a href="https://github.com/ysergma" target={"_blank"}>
          ysergma
        </a>
        <a href="https://github.com/iman-om" target={"_blank"}>
          iman-om
        </a>
        <a href="https://github.com/milyssaSidisaid" target={"_blank"}>
          milyssaSidisaid
        </a>
      </div>
      <div className={styles.githubRepoBox}>
        <p style={{ color: "#F5C518" }}>source code:</p>
        <a
          href="https://github.com/202306-NEA-DZ-FEW/movie-project-neocine"
          target="_blank"
        >
          <GitHubIcon sx={{ fontSize: 40 }} className={styles.githubIcon} />
        </a>
      </div>
    </div>
  )
}
