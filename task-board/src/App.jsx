//App.js

import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragItem from "./components/DragItem";
import DropZone from "./components/DropZone";
import { todoHook } from "./hooks/todo.hook";
import { CardBox } from "./components/CardBox";

const App = () => {
  const {
    droppedItems,
    handleDropInProgress,
    handleRemoveItem,
    handleDropDone,
    handleInputChange,
    handleSubmit,
    todoData,
    handleEditSubmit,
  } = todoHook();

  return (
    <>
      <div className="flex w-10 h-10 flex-1  m-5 gap-5">
        <input
          type="text"
          placeholder="Title"
          name={"title"}
          value={todoData?.title ?? ""}
          onChange={(e) => handleInputChange(e)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text-area"
          placeholder="description"
          name={"description"}
          value={todoData?.description ?? ""}
          onChange={(e) => handleInputChange(e)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => handleSubmit()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Button
        </button>
      </div>
      <DndProvider className="w-100" backend={HTML5Backend}>
        <div className="flex w-600px ">
          <div className="border p-[20px] border-[1px] w-full ">
            <h1 className="text-center bold text-4xl uppercase m-5">
              task board
            </h1>

            <div className="flex-1 gap-5 flex justify-around">
              <div className="flex-1 border-[1px] p-[10px] rounded-md border-amber-50 ">
                <h2 className="text-center bold text-2xl uppercase m-5">
                  todo
                </h2>

                <CardBox
                  droppedItems={droppedItems}
                  type="todo"
                  handleRemove={(index, item) => handleRemoveItem(index, item)}
                  handleEditSubmit={handleEditSubmit}
                />
              </div>
              <div className="flex-1 border-[1px] p-[10px] rounded-md border-amber-50">
                <h2 className="text-center bold text-2xl uppercase m-5">
                  In progress
                </h2>
                <DropZone onDrop={handleDropInProgress} />

                <CardBox
                  droppedItems={droppedItems}
                  type="in-progress"
                  handleRemove={(index, item) => handleRemoveItem(index, item)}
                  handleEditSubmit={handleEditSubmit}
                />
              </div>
              <div className="flex-1 border-[1px] p-[10px] rounded-md border-amber-50">
                <h2 className="text-center bold text-2xl uppercase m-5">
                  Done
                </h2>
                <DropZone onDrop={handleDropDone} />
                <CardBox
                  droppedItems={droppedItems}
                  type="done"
                  handleRemove={(index, item) => handleRemoveItem(index, item)}
                  handleEditSubmit={handleEditSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </DndProvider>
    </>
  );
};

export default App;
