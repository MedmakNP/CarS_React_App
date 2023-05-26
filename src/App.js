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
import ThemeProvider from './Provider/ThemeProvider';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div>
      <ThemeProvider>
        <Layout>
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
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
