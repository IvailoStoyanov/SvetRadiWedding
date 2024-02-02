// import {
//     useEffect,
//     useState,
// } from 'react';
// import mobile from 'is-mobile';
// import throttle from 'lodash/throttle';

//   const useResponsive = () => {
//     // const onlyMobile = mobile();

//     var MobileDetect = require('mobile-detect');
//     // md = new MobileDetect(req.headers['user-agent']);

//     var mobile = require('is-mobile');

//     const [isMobile, setIsMobile] = useState();

//     const handleResize = throttle(() => {
//       const width = window.innerWidth;

//       setIsMobile(width < 768);
//     }, 200);

//     useEffect(() => {
//       handleResize();

//       window.addEventListener('resize', handleResize);

//       return () => {
//         window.removeEventListener('resize', handleResize);
//       };
//     }, []);

//     return {isMobile};
//   };

// export default useResponsive;

//Deprecated but try to fixe it