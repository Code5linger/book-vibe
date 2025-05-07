import { useLoaderData } from 'react-router';
import Banner from '../../Components/Banner/Banner';
import Books from '../Books/Books';
// import { data } from 'react-router';

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  
  return (
    <div>
      <Banner />
      <Books data={data} />
    </div>
  );
};

export default Home;
