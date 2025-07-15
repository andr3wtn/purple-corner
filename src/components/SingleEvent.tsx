import React from "react";

interface EventProps {
    id: number;
    name: string;
    date: string;
    time: string;
    showsDesc?: boolean;
}


export default function SingleEvent({ id, name, date, time, showsDesc }: EventProps){
    return (             
        <div
            key={id}
            className="relative bg-purple-800/10 rounded-lg mb-5 px-6 py-4 flex flex-col 
            sm:flex-row sm:items-center sm:justify-between gap-4 hover:bg-purple-700/5 transition-colors cursor-pointer"
        >
            <div className="flex-1 lg:flex-2">
                <h4 className="text-xl font-semibold mb-2">{name}</h4>
                <div className="text-gray-900">
                    <p className="text-lg">{date}</p>
                    <p className="text-sm">{time}</p>
                </div>
            </div>

            {showsDesc? (<div className="flex-1 lg:flex-3 line-clamp-2 sm:line-clamp-3">Shows desc! Shows desc! Shows 
                desc! Shows desc! Shows desc! Shows desc! Shows desc! asdfaShows desc! Shows desc! Shows desc! Shows desc! Shows desc! 
                </div>) : (<div>Nooooo</div>)}
            
            <div className="text-center">
                <button
                
                    className="bg-purple-600 w-2/3 sm:w-full hover:bg-purple-700 hover:scale-105 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 whitespace-nowrap tracking-wide"
                >
                    RSVP
                </button>
            </div>
        </div>)
    }