import React from "react";

const CustomButton = ({ primary = true, disabled, handleClick, children }) => {
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={`px-5 py-1 rounded-lg font-semibold  drop-shadow-lg flex items-center justify-normal gap-1 hover:cursor-pointer ${
        disabled ? "opacity-50" : "hover:opacity-90"
      } ${
        primary
          ? "bg-primary text-midnight"
          : "bg-midnight text-whisper dark:bg-whisper dark:text-midnight "
      }
      `}
    >
      {children}
    </button>
  );
};

// export const NavigationButton = ({ rest, children }) => {
//   return (
//     <button
//       className="p-4 transition-all duration-75 rounded-full bg-midnight text-whisper dark:bg-whisper dark:text-midnight hover:bg-primary"
//       {...rest}
//     >
//       {children}
//     </button>
//   );
// };

export default CustomButton;
