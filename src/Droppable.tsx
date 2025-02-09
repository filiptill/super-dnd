import React from "react";

interface DroppableProps {
  children: React.ReactNode;
}

export const Droppable: React.FC<DroppableProps> = ({ children }) => {
  return <div className="p-4 border-dashed border-2 border-gray-400">{children}</div>;
};