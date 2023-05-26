import PropTypes from 'prop-types';
import { useContext } from 'react';
import cn from 'classnames';
import { ThemeContext } from '../../Provider/ThemeProvider';

function Layout({ children }) {
  const { type } = useContext(ThemeContext);
  return (
    <div className={cn('layout', {
      dark: type === 'dark'
    })}
    >
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Layout;
