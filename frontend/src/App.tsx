import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import Jokes from '@/components/Jokes';
import Introduction from '@/components/Introduction';

function App() {
  return (
    <div className='flex h-dvh'>
      <div className='w-full overflow-hidden flex flex-col'>
        <Header />
        <section className='flex flex-col h-full flex-1 overflow-auto'>
          <Introduction />
          <Jokes />
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
