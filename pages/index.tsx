import { useState } from 'react';
import Button from '../components/Button/Button';
import useFetch from '../hooks/useFetch';

type ButtonType = 'primary' | 'secondary';

export default function Home() {
  // button logic
  const [buttonType, setButtonType] = useState<ButtonType>('primary');
  const handleButtonClick = () => {
    setButtonType(prevButtonType => {
      if (prevButtonType === 'primary') return 'secondary';
      else return 'primary';
    });
  };

  // fetch randomMythNames logic
  const {
    data: randomMythNames,
    loading,
    error,
  } = useFetch({
    url: '/randomMythNames',
    method: 'GET',
  });

  return (
    <>
      <Button
        text={`${buttonType} button`}
        variant={buttonType}
        onButtonClick={handleButtonClick}
      />
      {randomMythNames &&
        randomMythNames.map(({ name }, randomMythNamesIdx) => (
          <p key={randomMythNamesIdx}>{name}</p>
        ))}
    </>
  );
}
