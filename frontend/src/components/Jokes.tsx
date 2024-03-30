import useCookie from '@/hooks/useCookie';
import { useMemo, useState } from 'react';

const jokes = [
  'A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on." The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now." The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."',

  'Teacher: "Kids,what does the chicken give you?" Student: "Meat!" Teacher: "Very good! Now what does the pig give you?" Student: "Bacon!" Teacher: "Great! And what does the fat cow give you?" Student: "Homework!"',
  'The teacher asked Jimmy, "Why is your cat at school today Jimmy?" Jimmy replied crying, "Because I heard my daddy tell my mommy, \'I am going to eat that pussy once Jimmy leaves for school today!\'"',
  'A housewife, an accountant and a lawyer were asked "How much is 2+2?" The housewife replies: "Four!". The accountant says: "I think it\'s either 3 or 4. Let me run those figures through my spreadsheet one more time." The lawyer pulls the drapes, dims the lights and asks in a hushed voice, "How much do you want it to be?"'
];

const Jokes = () => {
  const { getCookie, setCookie } = useCookie();

  const jokeIndexCookie = useMemo(() => parseInt(getCookie('jokeIndex') ?? '0'), [getCookie]);

  const [jokeIndex, setJokeIndex] = useState(jokeIndexCookie);
  const [joke, setJoke] = useState(jokes[jokeIndex]);

  const nextJoke = () => {
    const nextIndex = jokeIndex + 1;
    if (nextIndex < jokes.length) {
      setJokeIndex(nextIndex);
      setJoke(jokes[nextIndex]);
      setCookie('jokeIndex', nextIndex.toString(), 1);
    } else {
      setJokeIndex(0);
      setJoke(jokes[0]);
      setCookie('jokeIndex', '0', 1);
    }
  };

  return (
    <div className='font-sans flex flex-col justify-center items-center gap-3 ps-56 pe-44 py-2.5 mt-10'>
      <p className='text-xl text-slate-600/90 text-wrap py-2.5'>{joke}</p>
      <hr className='w-3/4 m-10' />
      <div className='flex justify-center items-center w-full gap-7 mb-8'>
        <button
          className='text-lg bg-blue-600/90 hover:bg-blue-700/90 w-[250px] py-2.5 border-b-[2.5px] border-blue-700/80 text-white'
          onClick={nextJoke}>
          This is Funny!
        </button>
        <button
          className='text-lg bg-green-600/90 hover:bg-green-700/90 w-[250px] py-2.5 border-b-[2.5px] border-green-700/80 text-white'
          onClick={nextJoke}>
          This is not funny.
        </button>
      </div>
    </div>
  );
};

export default Jokes;
