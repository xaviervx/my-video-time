import React from 'react';

export function Button({ children, onClick }) {
  return (
    <button className="bg-[#5599fe] text-center w-full h-[46px] text-white rounded-full text-xl font-medium" type="submit" onClick={ onClick }>{ children }</button>
  )
}
