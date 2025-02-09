import React, { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import { Draggable } from "./Draggable";

interface ListItem {
  id: string;
  children?: ListItem[];
}

const initialItems: ListItem[] = [
  { id: "Item 1", children: [] },
  { id: "Item 2", children: [{ id: "Subitem 1" }] },
  { id: "Item 3", children: [] },
];

export const SortableList: React.FC = () => {
  const [items, setItems] = useState(initialItems);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over) return;

    // Find indexes
    const oldIndex = items.findIndex((item) => item.id === active.id);
    const newIndex = items.findIndex((item) => item.id === over.id);

    // Move items within the same level
    if (oldIndex !== newIndex) {
      setItems(arrayMove(items, oldIndex, newIndex));
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items.map((item) => item.id)} strategy={verticalListSortingStrategy}>
        {items.map((item) => (
          <Draggable key={item.id} id={item.id}>
            <div className="p-4 bg-blue-500 text-white rounded-md my-2">
              {item.id}
              {item.children?.length > 0 && (
                <div className="ml-4 border-l-2 border-gray-400 pl-4 mt-2">
                  {item.children.map((child) => (
                    <Draggable key={child.id} id={child.id}>
                      <div className="p-2 bg-green-500 text-white rounded-md">{child.id}</div>
                    </Draggable>
                  ))}
                </div>
              )}
            </div>
          </Draggable>
        ))}
      </SortableContext>
    </DndContext>
  );
};
