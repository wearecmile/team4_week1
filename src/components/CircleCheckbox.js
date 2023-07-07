import React from "react";

const CircleCheckbox = ({ checked, onChange }) => {
  return (
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={onChange}
      />
      <span
        className={`flex items-center justify-center w-6 h-6 border-2 ${
          checked ? "border-green-600" : "border-gray-400"
        } rounded-full cursor-pointer`}
      >
        <svg
          className={`w-4 h-4 ${
            checked ? "text-green-600" : "text-gray-400"
          } fill-current`}
          viewBox="0 0 20 20"
        >
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </span>
    </label>
  );
};

export default CircleCheckbox;
