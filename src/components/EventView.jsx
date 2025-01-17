import React from 'react';
import Header from './Header';
import MapContainer from './MapContainer';

const EventView = () => {
    return (
        <div className='flex flex-col w-full h-screen'>
        <Header />
        <div className='p-1 m-1 flex flex-row'>
            <div className='w-1/5 p-3 pr-4 flex flex-col'>
                <img src="afisha.jpg" alt="afisha" />
                <div className='text-xl font-semibold text-center mt-2'>Organisator:</div>
                <div className='text-base font-semibold text-center mt-2 flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                    <div className='ml-1'>
                        The Ukrainian council
                    </div>
                </div>
                <div className='text-xl font-semibold text-center mt-2 flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                    <div className='ml-1'>
                        User list:
                    </div>
                </div>
                <div className='mt-3 w-full max-h-screen overflow-y-scroll'>
                    <p className='w-full text-base text-center my-1'>User nickname 1</p>
                </div>
            </div>
            <div className='p-2 m-2 flex flex-col w-full h-full border-l-2'>
                <p className='text-center text-3xl font-semibold font-serif tracking-wider'>Title of event</p>
                <div className='flex flex-row justify-around p-5 m-5'>
                    <div className='flex flex-col justify-center items-center m-2 w-1/3 text-xl font-semibold'>
                        <div className='m-1 w-full flex justify-center items-center'>
                            <div className='m-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                </svg>
                            </div>
                            <div>
                                01.01.2023, Monday
                            </div>
                        </div>
                        <div className='w-full flex justify-center items-center'>
                            <div className='m-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </div>
                            <div className='text-sm font-semibold text-center'>
                                Международный центр культуры и искусств Федерации профсоюзов Украины
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center w-1/6'>
                        <div className='text-base font-semibold p-1 h-1/2'>Tickets left in stock: 100</div>
                        <div className='h-1/3 border w-full text-center font-semibold rounded-full cursor-pointer'>Buy tickets</div>
                    </div>
                    <div className='flex flex-col items-center w-1/5'>
                        <div className='font-semibold p-1 h-1/2 text-xl'>Price:</div>
                        <div className='h-1/2 w-full text-center font-bold text-xl'>150 грн.</div>
                    </div>
                </div>
                <div className='w-full h-full flex items-center justify-center'>
                    <MapContainer />
                </div>
                <div className='w-full h-full flex flex-col m-1 p-1 mt-4'>
                    <div className='w-full text-center text-2xl font-semibold'>
                        Description:
                    </div>
                    <div className='p-3'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum, turpis quis ultricies sagittis, odio tortor commodo dui, id suscipit mauris nisi bibendum nibh. Duis turpis elit, viverra nec orci et, pharetra luctus urna. Proin lacinia, nunc in porttitor ornare, eros orci accumsan purus, id feugiat ipsum metus a neque. Duis egestas nibh vel justo fringilla posuere. Etiam placerat efficitur lectus, id lacinia tortor sagittis cursus. Nam vestibulum nisl ante, eget accumsan mauris rhoncus tincidunt. Ut luctus est felis, in blandit purus pulvinar sit amet. Quisque vulputate odio quis pharetra lobortis. Duis imperdiet dapibus lorem, non imperdiet felis tempor nec. Aenean vulputate, sem sit amet egestas eleifend, urna lacus porta risus, et tincidunt odio diam sed ipsum.
                        <br />
                        Sed imperdiet libero ut justo mattis luctus eget vel nunc. Aliquam sit amet rutrum tellus. Donec euismod ipsum non tellus dictum porta. Duis sollicitudin et augue sit amet consectetur. Phasellus vitae sagittis nunc. Vestibulum id arcu placerat, molestie nisi nec, convallis magna. Mauris dictum imperdiet nisi placerat semper. Ut maximus tempus leo commodo convallis. Praesent luctus rutrum dolor sodales bibendum. Phasellus posuere vel mi et auctor. Suspendisse potenti.
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default EventView;
