import { MutableRefObject, useEffect } from 'react';

export function useOutsideClick<T extends HTMLElement>(
  ref: MutableRefObject<T | null>,
  callback: React.Dispatch<React.SetStateAction<boolean>> | undefined
) {
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      if (callback) {
        callback(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
}
