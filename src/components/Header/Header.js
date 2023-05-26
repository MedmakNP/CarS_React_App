import HeaderView from './HeaderView';

function Header() {
  const navigation = (offset) => {
    window.scrollTo(0, offset);
  };

  return (
    <HeaderView
      navigation={navigation}
    />
  );
}

export default Header;
