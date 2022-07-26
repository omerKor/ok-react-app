import Button from './Button';
import Header from './Header';
import Profile from './Profile';

import { useTheme } from "../context/ThemeContext";

function Container() {
    const { theme } = useTheme();
    return (
        <div className={`app ${theme}`}>
            <Button />

            <hr></hr>

            <Header />
            <hr></hr>

            <Profile />

        </div >
    )
}

export default Container