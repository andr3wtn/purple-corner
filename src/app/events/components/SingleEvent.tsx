import React from "react";
import { EventItem } from "@/types/events";

interface EventProps extends EventItem {
  isAdmin?: boolean; // Defaults to false
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
  onArchive?: (id: number) => void;
}

interface ButtonContainerProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function SingleEvent({ id, name, date, startTime, endTime, desc, isAdmin=false, onEdit, onDelete, onArchive }: EventProps){

    const ButtonContainer = ({ className, children, onClick }: ButtonContainerProps) => {
        return (
            <div className="text-center">
                    <button 
                        className={`${className} w-[80px] hover:scale-105 text-white font-semibold py-2 rounded-lg transition-all duration-200 whitespace-nowrap tracking-wide`}
                        onClick={ onClick }
                    >
                        { children }
                    </button>
            </div>);
    }

    return (             
        <div
            className="relative bg-purple-700/10 rounded-lg mb-5 px-6 py-4 flex flex-col 
            sm:flex-row sm:items-center sm:justify-between gap-4 hover:bg-purple-800/15 transition-colors"
        >
            <div className="flex-1 lg:flex-2">
                <h4 className="text-xl font-semibold mb-2">{name}</h4>
                <div className="text-gray-900">
                    <p className="text-lg">{date}</p>
                    <p className="text-sm">{startTime} {endTime && (`- ${endTime}`)}</p>
                </div>
            </div>

            {desc && (<div className="flex-1 lg:flex-3 line-clamp-2 sm:line-clamp-3">{ desc } 
                </div>)}
            
            {isAdmin? 
                (<div className="flex gap-3">
                    {/* Edit Button - primary color */}
                    <ButtonContainer className="bg-blue-600 hover:bg-blue-700" onClick={() => onEdit?.(id)}>Edit</ButtonContainer>

                    {/* Delete Button - danger color */}
                    <ButtonContainer className="bg-red-600 hover:bg-red-700" onClick={() => onDelete?.(id)}>Delete</ButtonContainer>

                    {/* Archive Button - alert color */}
                    <ButtonContainer className="bg-yellow-600 hover:bg-yellow-700" onClick={() => onArchive?.(id)}>Archive</ButtonContainer>
                </div>
                
                ) : 
                (<div className="text-center">
                    <button
                        className="bg-purple-600 w-2/3 sm:w-full hover:bg-purple-700 hover:scale-105 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 whitespace-nowrap tracking-wide"
                    >
                        RSVP
                    </button>
                </div>)}
        </div>)
    }