import React, { useState } from "react";
import { Link } from "react-router-dom";

function Dropdown({ label = "filter", options }) {
    const [isActive, setisActive] = useState("hidden");
    const handleClick = () => {
        setisActive((prev) => (prev === "hidden" ? "active" : "hidden"));
    };

    return (
        <>
            <div className='flex gap-8 '>
                <div className='fixed top-2 md:top-5'>
                    <details className='group [&_summary::-webkit-details-marker]:hidden'>
                        <summary className='flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600'>
                            <span className='text-sm font-medium'> {label} </span>

                            <span className='transition group-open:-rotate-180'>
                                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-4'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
                                </svg>
                            </span>
                        </summary>

                        <div className='z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2'>
                            <div className='w-fit rounded border border-gray-200 bg-white'>
                                <div className='p-4'>
                                    {options.map((option) => (
                                        <label key={option.key} className='flex items-center gap-2'>
                                            <input type='radio' className='w-4 h-4' />
                                            <span className='text-sm text-gray-600'>{option.text}</span>
                                        </label>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </details>
                </div>
            </div>
        </>
    );
}

export default Dropdown;