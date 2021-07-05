import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MoonScape = () => {
  const footerRef = useRef(null);
  const moonOneRef = useRef(null);
  const moonTwoRef = useRef(null);
  useEffect(() => {
    const moonOneX = gsap.utils.mapRange(0, window.innerWidth, -10, 25);
    const moonTwoX = gsap.utils.mapRange(0, window.innerWidth, 10, -10);
    const footX = gsap.utils.mapRange(0, window.innerWidth, -5, 5);
    const moonOneY = gsap.utils.mapRange(0, window.innerHeight, 20, -25);
    const moonTwoY = gsap.utils.mapRange(0, window.innerHeight, -30, 10);
    const footY = gsap.utils.mapRange(0, window.innerHeight, 5, -5);
    const UPDATE = ({ x, y }) => {
      gsap.set(moonOneRef.current, {
        xPercent: moonOneX(x),
        yPercent: moonOneY(y)
      });
      gsap.set(moonTwoRef.current, {
        xPercent: moonTwoX(x),
        yPercent: moonTwoY(y)
      });
      gsap.set(footerRef.current, {
        xPercent: footX(x),
        yPercent: footY(y)
      });
    };

    window.addEventListener('pointermove', UPDATE);

    return () => {
      window.removeEventListener('pointermove', UPDATE);
    };
  }, []);

  return (
    <svg
      className="absolute bottom-0 left-0"
      viewBox="0 0 720 573"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g stroke="#000" strokeWidth={2}>
        <g ref={moonOneRef}>
          <path
            d="M294.5 319.5c0 94.428-77.219 171-172.5 171s-172.5-76.572-172.5-171 77.219-171 172.5-171 172.5 76.572 172.5 171z"
            fill="hsl(210, 86%, 48%)"
          />
          <path
            d="M156.423 213.733s.26 8.21 3.077 12.267c2.489 3.586 8.923 6.733 8.923 6.733M252.345 271l2.155 18s.111 7.956-.5 13c-.673 5.551-2.378 8.443-3 14-.695 6.21 0 16 0 16M164.423 210.5s-.74 4.443 2.077 8.5M254.103 339.2s1.397 2.3 4.397 3.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <g ref={moonTwoRef}>
          <path
            d="M298.5 347.5c0 94.428-77.219 171-172.5 171s-172.5-76.572-172.5-171 77.219-171 172.5-171 172.5 76.572 172.5 171z"
            fill="hsl(210, 88%, 22%)"
          />
          <path
            d="M160.423 241.733s.26 8.21 3.077 12.267c2.489 3.586 8.923 6.733 8.923 6.733M256.345 299l2.155 18s.111 7.956-.5 13c-.673 5.551-2.378 8.443-3 14-.695 6.21 0 16 0 16M168.423 238.5s-.74 4.443 2.077 8.5M258.103 367.2s1.397 2.3 4.397 3.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <path
          d="M-64.5 202v-7.914c.63.038 1.444.089 2.427.154 2.595.172 6.372.447 11.092.856 9.44.818 22.646 2.175 37.706 4.326 30.15 4.308 67.619 11.786 97.184 24.457 14.645 6.276 31.591 18.861 49.017 34.329 17.401 15.446 35.176 33.671 51.478 51.128 8.149 8.727 15.924 17.256 23.098 25.145l2.544 2.798c6.185 6.805 11.885 13.076 16.934 18.501 5.729 6.155 10.649 11.251 14.508 14.815 1.927 1.779 3.624 3.209 5.048 4.203.712.496 1.387.906 2.013 1.197.605.281 1.277.505 1.951.505 5.628 0 27.774 2.248 49.545 5.258 10.862 1.502 21.579 3.187 30.038 4.863 4.232.839 7.875 1.671 10.677 2.471 1.402.4 2.572.786 3.49 1.153.943.377 1.523.697 1.819.931 1.674 1.326 3.73 3.935 6.228 7.564 1.603 2.328 3.33 4.987 5.206 7.877a975.435 975.435 0 003.207 4.915c6.284 9.549 13.995 20.577 23.277 29.074 2.248 2.058 4.255 3.945 6.116 5.694 4.996 4.696 8.941 8.404 13.68 11.795 6.559 4.692 14.634 8.788 29.185 14.307 14.74 5.591 30.822 6.948 47.992 7.999 1.691.103 3.394.204 5.108.305 15.737.929 32.414 1.913 50.113 5.76 40.701 8.845 71.817 15.997 100.595 31.848 14.477 7.973 66.576 38.458 115.089 66.969a52729.639 52729.639 0 0188.644 52.217H-64.5V202z"
          fill="hsl(120, 2%, 45%)"
        />
        <path
          d="M17.307 299.605S66.012 301.399 88.5 319.5c9.373 7.544 11.335 15.5 20.5 23 9.165 7.499 42 20.5 51.5 29s4.785 9.5 16.5 20.5 85 8 99.5 21.5 20 31.5 20 31.5 23.104 60.948 31.5 100"
          strokeLinecap="round"
        />
        <path
          d="M208 400s19.928 4.777 30 12.5c19.602 15.029 15.291 58.399 15.291 58.399M328.863 387.015S325.302 400.307 326 408.5c1.076 12.627 13.429 15.181 18 27 4.145 10.719 2.072 17.887 5 29 3.622 13.746 13 34 13 34"
          strokeLinecap="round"
        />
        <path
          d="M348 457s12.5 2.5 19 8 6.5 18.5 10.5 30 9.891 16.915 9.891 16.915M348.5 487.5s.076 8.342 1.274 13.5c.887 3.816 3.226 9.5 3.226 9.5M459.5 518s7-.958 13.5 5c6 5.5 6 28 6 28M396.5 519.5s4.5 1 8 4M410.5 535s1 4 0 9M463 535.5s-3.326 5.836-4.5 11c-2.5 11 22.5 33 22.5 33M313.5 570.499s44.664-6.415 73.255-2.999c16.745 2 40.745 9 40.745 9"
          strokeLinecap="round"
        />
        <path
          ref={footerRef}
          d="M357.5 551.5l-1.395.55.042.108.058.099 29.692 50.763-449.362 3.468 3.95-173.821 42.411-39.452 32.385-18.646 131.721 22.368.065.036c.19.102.47.253.835.447.731.389 1.803.951 3.174 1.651a305.11 305.11 0 0011.487 5.543c9.602 4.393 22.674 9.799 36.518 13.826 10.398 3.025 19.797 4.551 28.77 6.008 2.98.484 5.914.96 8.821 1.481 11.692 2.095 23.145 4.933 36.119 11.893 24.109 12.933 44.933 41.355 59.792 66.793 7.407 12.681 13.291 24.548 17.323 33.244a354.708 354.708 0 014.614 10.364 224.16 224.16 0 011.486 3.581l.032.078.043.108.018.046.004.011.001.003 1.396-.55z"
          fill="hsl(180, 1%, 26%)"
        />
      </g>
    </svg>
  );
};

export default MoonScape;
