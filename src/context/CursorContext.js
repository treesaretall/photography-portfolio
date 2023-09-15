import React, { useState, useEffect, createContext, useCallback } from "react";
import debounce from "lodash.debounce";

export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  });

  const [cursorBG, setCursorBG] = useState("default");

  const mobileViewportIsActive = window.innerWidth < 768;

  // Memoize the mouseMove handler using useCallback
  const handleMouseMove = useCallback(
    debounce((e) => {
      setCursorPos({
        x: e.clientX,
        y: e.clientY,
      });
    }, 16),
    []
  ); // Adjust the debounce delay as needed

  useEffect(() => {
    if (!mobileViewportIsActive) {
      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    } else {
      setCursorBG("none");
    }
  }, [mobileViewportIsActive, handleMouseMove]); // Add dependencies to the useEffect

  const cursorVariants = {
    default: {
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      backgroundColor: "#0e1112",
    },
    text: {
      width: "150px",
      height: "150px",
      x: cursorPos.x - 72,
      y: cursorPos.y - 72,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
    none: {
      width: 0,
      height: 0,
      backgroundColor: "rgba(255,255,255,1)",
    },
  };

  // Memoize mouseEnterHandler and mouseLeaverHandler using useCallback
  const mouseEnterHandler = useCallback(() => {
    if (!mobileViewportIsActive) {
      setCursorBG("text");
    } else {
      setCursorBG("none");
    }
  }, [mobileViewportIsActive]);

  const mouseLeaverHandler = useCallback(() => {
    if (!mobileViewportIsActive) {
      setCursorBG("default");
    } else {
      setCursorBG("none");
    }
  }, [mobileViewportIsActive]);

  return (
    <CursorContext.Provider
      value={{
        cursorVariants,
        cursorBG,
        mouseEnterHandler,
        mouseLeaverHandler,
      }}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;

// import React, { useState, useEffect, createContext } from "react";

// import debounce from "lodash.debounce";

// export const CursorContext = createContext();

// const CursorProvider = ({ children }) => {
//   const [cursorPos, setCursorPos] = useState({
//     x: 0,
//     y: 0,
//   });

//   const [cursorBG, setCursorBG] = useState("default");

//   const mobileViewportIsActive = window.innerWidth < 768;

//   useEffect(() => {
//     if (!mobileViewportIsActive) {
//       const handleMouseMove = debounce((e) => {
//         setCursorPos({
//           x: e.clientX,
//           y: e.clientY,
//         });
//       }, 16);
//       window.addEventListener("mousemove", handleMouseMove);

//       return () => {
//         window.removeEventListener("mousemove", handleMouseMove);
//       };
//     } else {
//       setCursorBG("none");
//     }
//   });

//   const cursorVariants = {
//     default: {
//       x: cursorPos.x - 16,
//       y: cursorPos.y - 16,
//       backgroundColor: "#0e1112",
//     },
//     text: {
//       width: "150px",
//       height: "150px",
//       x: cursorPos.x - 72,
//       y: cursorPos.y - 72,
//       backgroundColor: "#fff",
//       mixBlendMode: "difference",
//     },
//     none: {
//       width: 0,
//       height: 0,
//       backgroundColor: "rgba(255,255,255,1)",
//     },
//   };

//   const mouseEnterHandler = () => {
//     setCursorBG("text");
//   };

//   const mouseLeaverHandler = () => {
//     setCursorBG("default");
//   };

//   return (
//     <CursorContext.Provider
//       value={{
//         cursorVariants,
//         cursorBG,
//         mouseEnterHandler,
//         mouseLeaverHandler,
//       }}>
//       {children}
//     </CursorContext.Provider>
//   );
// };

// export default CursorProvider;
