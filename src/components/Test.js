import { askRobomatic } from '@/api/api';
// import axios from 'axios';

const Test = () => {
  // const fetchAnswerFromWolfram = async (question) => {
  //   const response = await axios.get(
  //     `/api/wolfram?input=${encodeURIComponent(question)}`,
  //   );
  //   return console.log(response.data);
  // };

  const handleAskRobomatic = async () => {
    try {
      const result = await askRobomatic(
        'What is the area of ​​a triangle with base 10 and height 5?',
      );
      console.log(result);
    } catch (error) {
      console.error('Erro ao chamar a API:', error);
    }
  };

  return (
    <section>
      <h2>OLá</h2>
      <button
        onClick={() => handleAskRobomatic('How many languages do you speak?')}
      >
        Click Here
      </button>
    </section>
  );
};

export default Test;
