import React from 'react'
import styles from './GameDetails.module.css'

const GameDetails = ({ nome, genero, releaseDate }) => {
    return (
        <div className={styles.container}>
            <p>Nome: <span className={styles.game_data}>{nome}</span></p>
            <p>Gênero <span className={styles.game_data}>{genero}</span></p>
            <p>Release Date <span className={styles.game_data}>{releaseDate}</span></p>
            <hr className={styles.divider} />
        </div>
    )
}

export default GameDetails