import { useEffect, useState } from "react";
import {
  addTodoInList,
  deleteItem,
  fetchTodo,
  updateItem,
} from "../service/board.service";
import { toast } from "react-toastify";

export const todoHook = () => {
  const [droppedItems, setDroppedItems] = useState([]);
  const [todoData, setTodoData] = useState({});

  const fetchData = async () => {
    const response = await fetchTodo();
    if (response.success) {
      setDroppedItems(response.data);
    } else {
      toast.error(response.message);
    }
  };

  const deleteTodo = async (id) => {
    const response = await deleteItem(id);
    if (response?.success) {
      fetchData();
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  };

  const totoUpdate = async (updateObj) => {
    const response = await updateItem(updateObj);
    if (response.success) {
      fetchData();
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  };

  const addToto = async (addTotoObj) => {
    const response = await addTodoInList(addTotoObj);
    if (response.success) {
      fetchData();
      toast.success(response.message);
      setTodoData({});
    } else {
      toast.error(response.message);
    }
  };

  const handleDropInProgress = (item) => {
    console.log(item);
    setDroppedItems((prevItems) => [...prevItems, item]);
    totoUpdate({ id: item.id, type: "in-progress" });
  };

  const handleDropDone = (item) => {
    setDroppedItems((prevItems) => [...prevItems, item]);
    totoUpdate({ id: item.id, type: "done" });
  };

  const handleRemoveItem = (index, item) => {
    const updatedItems = [...droppedItems];
    updatedItems.splice(index, 1);
    setDroppedItems(updatedItems);
    deleteTodo(item.id);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTodoData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!todoData.title || !todoData.description) {
      alert("Felid is required");
    }
    await addToto(todoData);
  };

  const handleEditSubmit = async (editData) => {
    totoUpdate(editData);
  };

  return {
    droppedItems,
    handleDropInProgress,
    handleRemoveItem,
    handleDropDone,
    handleInputChange,
    handleSubmit,
    todoData,
    handleEditSubmit,
  };
};
