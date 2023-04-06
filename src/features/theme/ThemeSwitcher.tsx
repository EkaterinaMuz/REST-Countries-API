import styled from 'styled-components';
import { useTheme } from './useTheme';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
`;

export default function ThemeSwitcher() {
    const {theme, setTheme} = useTheme();
    
    return (
        <ModeSwitcher onClick={setTheme}>
            {theme === 'light' ? (
                <IoMoonOutline size="14px" />
            ) : (
                <IoMoon size="14px" />
            )}
            <span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
        </ModeSwitcher>
    )
}
