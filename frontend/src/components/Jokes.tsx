import useCookie from '@/hooks/useCookie';
import { useCallback, useMemo, useState } from 'react';

const jokes = [
  'A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on." The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now." The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."',
  'Teacher: "Kids,what does the chicken give you?" Student: "Meat!" Teacher: "Very good! Now what does the pig give you?" Student: "Bacon!" Teacher: "Great! And what does the fat cow give you?" Student: "Homework!"',
  'The teacher asked Jimmy, "Why is your cat at school today Jimmy?" Jimmy replied crying, "Because I heard my daddy tell my mommy, \'I am going to eat that pussy once Jimmy leaves for school today!\'"',
  'A housewife, an accountant and a lawyer were asked "How much is 2+2?" The housewife replies: "Four!". The accountant says: "I think it\'s either 3 or 4. Let me run those figures through my spreadsheet one more time." The lawyer pulls the drapes, dims the lights and asks in a hushed voice, "How much do you want it to be?"',
  "That's all the jokes for today! Come back another day!"
];

enum RATE {
  FUNNY = 'funny',
  NOT_FUNNY = 'not funny'
}

const Jokes = () => {
  const { getCookie, setCookie } = useCookie();

  const jokeIndexCookie = useMemo(() => {
    const joke = getCookie('joke');
    if (joke) {
      const index = JSON.parse(joke).jokeIndex;
      return index;
    }
    return 0;
  }, [getCookie]);

  const [jokeIndex, setJokeIndex] = useState(jokeIndexCookie);
  const [joke, setJoke] = useState(jokes[jokeIndexCookie]);

  const getJokeFromCookie = useCallback(() => {
    const jokeCookie: string | null = getCookie('joke');
    return jokeCookie ? JSON.parse(jokeCookie) : {};
  }, [getCookie]);

  const setJokeInCookie = useCallback(
    (jokeIndex: number, jokeRating: RATE) => {
      const joke = getJokeFromCookie();
      setCookie('joke', JSON.stringify({ ...joke, [`joke${jokeIndex + 1}`]: jokeRating }), 1);
    },
    [getJokeFromCookie, setCookie]
  );

  const nextJoke = useCallback(() => {
    const joke = getJokeFromCookie();
    const nextIndex = jokeIndex + 1;
    if (nextIndex < jokes.length) {
      setJokeIndex(nextIndex);
      setJoke(jokes[nextIndex]);
      setCookie('joke', JSON.stringify({ ...joke, jokeIndex: nextIndex }), 1);
    }
  }, [getJokeFromCookie, jokeIndex, setCookie]);

  const rateJoke = useCallback(
    (jokeRating: RATE) => {
      setJokeInCookie(jokeIndex, jokeRating);
      nextJoke();
    },
    [jokeIndex, nextJoke, setJokeInCookie]
  );

  return (
    <div className='font-sans flex flex-col justify-center items-center gap-3 lg:ps-56 lg:pe-44 px-5 py-2.5 mt-10'>
      <p className='lg:text-xl text-sm text-[#646464] text-wrap py-2.5'>{joke}</p>
      {jokeIndex < jokes.length - 1 && (
        <>
          <hr className='w-3/4 lg:m-10 m-5' />
          <div className='flex justify-center items-center w-full gap-7 mb-8'>
            <button
              className='lg:text-lg bg-[#2c7edb] hover:bg-blue-700/90 w-[250px] lg:py-2.5 py-1 border-b-[2.5px] border-[#0361be] text-white'
              onClick={() => rateJoke(RATE.FUNNY)}>
              This is Funny!
            </button>
            <button
              className='lg:text-lg bg-[#29b363] hover:bg-green-700/90 w-[250px] lg:py-2.5 py-1 border-b-[2.5px] border-[#039442] text-white'
              onClick={() => rateJoke(RATE.NOT_FUNNY)}>
              This is not funny.
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Jokes;
