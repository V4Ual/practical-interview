import { api } from "../axiosApi";

export const fetchTodo = async () => {
  try {
    const response = await api.get("/board/task");

    return response.data;
  } catch (error) {
    return error.response.message;
  }
};

export const deleteItem = async (id) => {
  try {
    const response = await api.delete(`/board/task/${id}`);

    return response.data;
  } catch (error) {
    return error.response.message;
  }
};

export const updateItem = async (updateObject) => {
  try {
    const response = await api.put("/board/task", updateObject);

    return response.data;
  } catch (error) {
    return error.response.message;
  }
};

export const addTodoInList = async (addObject) => {
  try {
    const response = await api.post("/board/task", addObject);

    return response.data;
  } catch (error) {
    return error.response.message;
  }
};
