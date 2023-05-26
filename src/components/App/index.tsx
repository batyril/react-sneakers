import Header from '../Header';
import Slider from '../Slider';
import Sneakers from '../SneakerList';
import SideMenu from '../SideMenu';

function App() {
  return (
    <>
      <Header />
      <SideMenu></SideMenu>
      <section className='content'>
        <Slider></Slider>
        <Sneakers></Sneakers>
      </section>
    </>
  );
}

export default App;
