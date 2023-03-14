import React from 'react';

const checkExceptions = (e: MouseEvent, exceptions: string[] | undefined): boolean => {
    const target = e.target as HTMLElement;
    if (!target.className?.includes || !exceptions) return false;
    return exceptions.reduce(
        (_, currentException) => target.className.includes(currentException),
        false
    );
};

const outsideClickHandler =
    ({ callback, ref, exceptions }: Arguments) =>
    (e: MouseEvent): void => {
        const shouldClose = !checkExceptions(e, exceptions) && !ref?.current?.contains(e.target);
        if (shouldClose) callback(false);
    };

interface Arguments {
    ref: React.MutableRefObject<any> | null;
    callback: (toggle: boolean) => void;
    exceptions?: string[];
}
export const useOnClickOutside = (args: Arguments) => {
    const listener = React.useCallback(outsideClickHandler(args), []);
    React.useEffect(() => {
        document.addEventListener('click', listener);
        return () => {
            document.removeEventListener('click', listener);
        };
    }, []);
};

export default useOnClickOutside;
