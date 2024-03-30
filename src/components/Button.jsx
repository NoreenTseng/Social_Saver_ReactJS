import React from 'react'

export const ConfirmButton = ({
    children,
    onClick,
    disabled = false,
    style,
    className,
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            style={{
                borderRadius: '3.125rem',
                boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
                fontFamily: 'Josefin Slab',
                fontSize: '1.88506rem',
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: 'normal',
                ...style,
            }}
            className={`
        px-4 py-2 border border-transparent text-sm font-medium
        text-[color:var(--yellow)] bg-[color:var(--dark-wood)] hover:bg-[color:var(--yellow)] hover:text-[color:var(--dark-wood)]
        ${
            disabled
                ? 'opacity-50 cursor-not-allowed bg-color[var(--grey)]'
                : 'active:bg-[color:var(--light-brown)] active:text-[color:var(--dark-wood)'
        }
       ${className}`}
        >
            {children}
        </button>
    )
}
export const CancelButton = ({
    children,
    onClick,
    disabled = false,
    style,
    className,
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            style={{
                borderRadius: '3.125rem',
                boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
                fontFamily: 'Josefin Slab',
                fontSize: '1.88506rem',
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: 'normal',
                ...style,
            }}
            className={`
        px-4 py-2 border border-transparent text-sm font-medium
        bg-[color:var(--yellow)] text-[color:var(--dark-wood)]
        ${
            disabled
                ? 'opacity-50 cursor-not-allowed bg-color[var(--grey)]'
                : 'active:bg-[color:var(--light-brown)] active:text-[color:var(--dark-wood)'
        }
       ${className}`}
        >
            {children}
        </button>
    )
}
