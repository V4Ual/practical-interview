import { useEffect, useState } from "react";

export const CardBox = ({
  droppedItems = [],
  type,
  handleRemove,
  handleEditSubmit,
}) => {
  const [isEdit, setIsEdit] = useState(null);
  const [editData, setEditData] = useState();

  useEffect(() => {
    const findObj = droppedItems.find((_, index) => index === isEdit);
    setEditData(findObj);
    console.log(findObj);
  }, [isEdit]);

  const handleEditInputChange = (e) => {
    const { value, name } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  if (droppedItems) {
    return (
      droppedItems &&
      droppedItems?.map(
        (item, index) =>
          item.status === type && (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "5px",
                marginTop: "10px",
                backgroundColor: "lightblue",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className="flex flex-col gap-1">
                {isEdit !== index ? (
                  <>
                    <h1 className="bold text-2xl">{item.title}</h1>
                    <p>{item.description}</p>
                  </>
                ) : (
                  <>
                    <input
                      onChange={(e) => handleEditInputChange(e)}
                      name={"title"}
                      value={editData && editData.title}
                      className="p-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                      type="text-area"
                      onChange={(e) => handleEditInputChange(e)}
                      name={"description"}
                      value={editData && editData.description}
                      className="p-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </>
                )}
              </div>
              <div className="flex gap-5">
                {isEdit === index ? (
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                      handleEditSubmit(editData);
                      setIsEdit(null);
                    }}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setIsEdit(index)}
                  >
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                      />
                    </svg>
                  </button>
                )}

                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleRemove(index, item)}
                >
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18 17.94 6M18 18 6.06 6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )
      )
    );
  } else {
    return;
  }
};
