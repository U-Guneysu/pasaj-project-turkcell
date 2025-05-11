import { useEffect } from 'react';

const useScrollingTitle = (title, speed = 200, isActive = true) => {
    useEffect(() => {
        if (!isActive) return;

        let index = 0;
        let currentTitle = title + ' ';
        const scroll = () => {
            document.title =
                currentTitle.substring(index) + currentTitle.substring(0, index);
            index = (index + 1) % currentTitle.length;
        };

        const insterval = setInterval(scroll, speed);
        return () => clearInterval(insterval);
    }
    , [title, speed, isActive]);
    };

    export default useScrollingTitle;


    // Sekme scrolling title'ı sayfa değiştirince farklı bir text e geçecek şekilde ayarla 