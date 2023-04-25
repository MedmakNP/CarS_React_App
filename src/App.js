import WrappedHeader from './components/Header/Hoc';
import Intro from './components/Intro/Intro';
import Services from './components/Services/Services';
import Catalog from './components/Catalog/Catalog';
import Custom from './components/Custom/Custom';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import Table from './components/Table/Table';
import ApiList from './components/ApiList/ApiList';
import ImageLoader from './components/ImageLoader/ImageLoader';
// import { DarkModeProvider } from './Content/Context/ContextTheme';

function App() {
  return (
    <div>
      <WrappedHeader />
      <Intro />
      <Services />
      <Catalog />
      <Custom />
      <ImageLoader />
      <Table />
      <ApiList />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
