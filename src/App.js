import './App.css';
import React, { useState } from 'react';
import { names } from './names';
import pic0 from './images/katze0.png';
import pic1 from './images/katze1.png';
import pic2 from './images/katze2.png';
import pic3 from './images/katze3.png';
import pic4 from './images/katze4.png';
import pic5 from './images/katze5.png';
import pic6 from './images/katze6.png';
import pic7 from './images/katze7.png';
import pic8 from './images/katze8.png';
import pic9 from './images/katze9.png';

const emojis = [ "🐈", "🐱", "😸", "😼", "😽", "😻" ];
const pictures = [ pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9 ];
const buttonTexts = [
  "Gib mir noch einen!",
  "Meeeehr!",
  "Einer geht noch!",
  "Mau?!",
  "War's das schon?",
  "Mehr mehr mehr!"
]

function App() {
  const [name, setName] = useState("...");
  const [picture, setPicture] = useState(pic0);
  const [buttonText, setButtonText] = useState("🐈 Gib mir einen Namen!");
  const [seenPictures, setSeenPictures] = useState([]);
  const [seenNames, setSeenNames] = useState([]);

  const sample = (list) => {
    return list[Math.floor(Math.random() * list.length)];
  };
  
  const generate = () => {
    let randomName;
    if (seenNames.length === names.length) {
      randomName = sample(names);
      setSeenNames([randomName]);
    } else {
      const unseenNames = names.filter(n => !seenNames.includes(n));
      randomName = sample(unseenNames);
      setSeenNames(seenNames.concat(randomName));
    }

    let randomPicture;
    if (seenPictures.length === pictures.length) {
      randomPicture = sample(pictures);
      setSeenPictures([randomPicture]);
    } else {
      const unseenPictures = pictures.filter(n => !seenPictures.includes(n));
      randomPicture = sample(unseenPictures);
      setSeenPictures(seenPictures.concat(randomPicture));
    }

    setName(randomName);
    setPicture(randomPicture);
    setButtonText(`${sample(emojis)} ${sample(buttonTexts)}`);
  };

  return (
    <div className="app bg-slate-100 grid h-screen place-items-center">
      <div className="bg-white shadow l:rounded-lg l:w-1/2 l:h-2/3 px-4 py-5">
        <div className="mt-5">
          <button
            type="button"
            className="inline-flex items-center w-full rounded-md bg-slate-700 px-3 py-2 text-l text-white shadow-sm hover:bg-slate-500"
            onClick={generate}
          >
            {buttonText}
          </button>
        </div>
        <div className="mt-10">
          <span className="text-gray-500 px-3">
            Wie wäre es mit 
            {' '}
            <span className="text-black">
              {name}
            </span>
            ?
          </span>
        </div>
        <div>
          <img src={picture} alt="Katze" />
        </div>
      </div>
    </div>
  );
}

export default App;
