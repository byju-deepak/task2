import React from 'react'

export default function FormContainer({heading, element}) {
    return (
        <div className="tw-min-w-[50vw] tw-min-h-3/5 tw-shadow-md tw-rounded-md tw-border-px tw-px-4 tw-border-2 tw-border-gray-300 tw-bg-white tw-flex tw-flex-col">
            <div className='tw-py-4'>
                <h3 className="tw-font-bold tw-text-3xl">{heading}</h3>
            </div>
            <div className='tw-h-full'>
                {element}
            </div>
        </div>
    )
}
