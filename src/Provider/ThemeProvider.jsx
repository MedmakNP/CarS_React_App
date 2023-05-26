import { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext({ type: 'light' });

function ThemeProvider({ children }) {
  const [type, setType] = useState('light');
  const toggleTheme = () => {
    setType((prevType) => (prevType === 'light' ? 'dark' : 'light'));
  };
  const value = useMemo(() => ({ type, toggleTheme }), [type]);
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ThemeProvider;
