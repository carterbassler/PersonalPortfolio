import React from 'react';

class Proj {
    name: string
    icon: string
    devStage: string
    description: string;
    externalLink: string;
    liveImage: string;
    constructor(_name: string, _icon: string, _devStage: string, _description: string, _externalLink: string, _liveImage: string) {
        this.name = _name
        this.icon = _icon
        this.devStage = _devStage
        this.description = _description
        this.externalLink = _externalLink
        this.liveImage = _liveImage
    }
}

type Props = {
    trigger: boolean;
    setTrigger: (value: boolean) => void;
    proj: Proj;
};

function Popup({ trigger, setTrigger, proj }: Props) {
    return trigger ? (
        <div className='fixed top-0 left-0 flex items-center justify-center w-screen h-screen backdrop-filter backdrop-blur-sm'>
            <div className='w-2/3 sm:h-3/4 h-1/2 rounded-lg flex flex-col items-center justify-center'
                style={{ backgroundColor: '#2A2A2D' }}>
                <h1 className='text-2xl font-bold mt-8'>{proj.name}</h1>
                <div className='flex flex-col sm:flex-row justify-between p-8 items-center'>
                    <div className='w-full sm:w-1/2'>
                        <img
                            src={proj.liveImage}
                            className='hidden md:block md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-contain
          md:rounded-lg md:w-64 md:h-96 xl:w-[450px] xl:h-[300px]'
                        />
                    </div>
                    <div className='w-full sm:w-1/2 flex flex-col justify-center text-center'>
                        <p className='md:text-lg text-sm'>{proj.description}</p>
                        <a
                            href={proj.externalLink}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='hover:underline mt-4 text-center text-blue-500'
                        >
                            {proj.devStage}
                        </a>
                    </div>
                </div>
                <button
                    className='px-4 py-2 rounded-md'
                    onClick={() => setTrigger(false)}
                    style={{ backgroundColor: '#8f1d21', color: 'white' }}
                >
                    Close
                </button>
            </div>
        </div>
    ) : null;
}

export default Popup;