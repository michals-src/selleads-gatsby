import React from 'react'

const Wrapper = ({ bg, color, children, ...props }) => {


    const cnames = [
        'inline-flex', 'flex-row', 'flex-nowrap', 'items-center',
        'px-8', 'py-2', 'rounded-2xl', 'hover:no-underline'
    ];

    if (!bg) {
        // Podstawowe wartości
        cnames.push('bg-gray-200');
        cnames.push('hover:bg-gray-300');
    } else {
        // Default & Hover warianty
        for (const [, variant] of bg.entries()) {
            cnames.push(variant);
        }
    }

    if (!color) {
        // Podstawowe wartości
        cnames.push('text-gray-900');
        cnames.push('hover:text-gray-700');
    } else {
        // Default & Hover warianty
        for (const [, variant] of color.entries()) {
            cnames.push(variant);
        }
    }

    return (
        <button className={cnames.join(' ')} {...props}>
            {children}
        </button>
    )

}

function Button({ lIcon, rIcon, children, ...props }) {
    return (
        <>
            <Wrapper {...props}>
                {lIcon && (<span className="mr-3">{lIcon}</span> ) }
                <span className="font-bold text-sm">{children}</span>
                {rIcon && (<span className="ml-3">{rIcon}</span> ) }
            </Wrapper>
        </>
    )
}

export default Button
