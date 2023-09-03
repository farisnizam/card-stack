import React from 'react'
import Deck from './Components/Deck'

import styles from './styles.module.css'

export default function App() {
  // Set card url list
  const cardArray = [
    'https://img.freepik.com/free-vector/hand-drawn-mystic-wallpaper_23-2149459343.jpg?w=200&t=st=1693752764~exp=1693753364~hmac=0c22308268d0530c17aaf56cd4538df752f4fbfc4c656e2d5d52bc377306ad72',
    'https://img.freepik.com/free-vector/hand-drawn-mystical-tarot-mobile-wallpaper_52683-80184.jpg?w=200&t=st=1693752654~exp=1693753254~hmac=13676d093355eb79e301ea51da805048b4dc22c5a288d71f4b9f48bce0b93e42',
    'https://img.freepik.com/free-vector/flat-design-tarot-card-illustration_23-2149243577.jpg?w=200&t=st=1693752799~exp=1693753399~hmac=b925a46d7bc082c857a1377fd3f4665ebaabdc12184511ab570827d8744d528c',
    'https://img.freepik.com/free-vector/crystal-ball-stars_24877-76344.jpg?w=200&t=st=1693752848~exp=1693753448~hmac=56c273fbd0a3baa74a530e66e947e4974160dd16fb0e8ee9a6be25e460e161aa',
    'https://img.freepik.com/free-vector/hand-drawn-mystical-tarot-mobile-wallpaper_52683-80183.jpg?w=200&t=st=1693752969~exp=1693753569~hmac=91359d781549c1b817aa5183ff8272753dd53272023adb08d161ff9e6bf5c549',
  ]

  return (
    <div className={styles.container}>
      <Deck cardList={cardArray} verticalDrag={true} />
    </div>
  )
}
