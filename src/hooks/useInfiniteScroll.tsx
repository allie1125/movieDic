import { useState, useRef, useEffect, MutableRefObject } from 'react';

const useInfiniteScroll = (ref: MutableRefObject<Element | null>, options: any = {}, forward: boolean = true) => {
  const [element, setElement] = useState<Element | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observer = useRef<null | IntersectionObserver>(null);

  const cleanOb = () => {
    if (observer.current) {
      observer.current.disconnect();
    }
  };

  useEffect(() => {
    setElement(ref.current);
  }, [ref]);

  useEffect(() => {
    if (!element) return;
    cleanOb();
    let ob;
    observer.current = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        if (!forward) {
          setIsIntersecting(isElementIntersecting);
        } else if (forward && !isIntersecting && isElementIntersecting) {
          setIsIntersecting(isElementIntersecting);
          cleanOb();
        }
      },
      { ...options }
    );
    ob = observer.current;
    ob.observe(element);
    // return () => {
    //   cleanOb();
    // };
  }, [element, options]);

  return isIntersecting;
};

export default useInfiniteScroll;
