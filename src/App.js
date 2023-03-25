import Header from './Content/Header/Header';
import Intro from './Content/Intro/Intro';
import Services from './Content/Services/Services';
import Catalog from './Content/Catalog/Catalog';
import Custom from './Content/Custom/Custom';
import Contacts from './Content/Contacts/Contacts';
import Footer from './Content/Footer/Footer';
import Table from './Content/Table/Table';
import ApiList from './Content/ApiList/ApiList';
import ImageLoader from './Content/ImageLoader/ImageLoader';

function App() {
  return (
    <div>
      <Header />
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
