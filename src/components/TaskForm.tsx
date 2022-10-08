import React from 'react'

const TaskForm = ({submitHandler}:any) => {
  return (
      <div className="w-1/2">
          <form
              onSubmit={submitHandler}
              className="flex flex-col items-stretch">
              <label htmlFor="description"> Description: </label>
              <input
                  type="text"
                  name="description"
                  className="rounded-full px-2"
                  required
              />
              <label htmlFor="startTime"> Date: </label>
              <input
                  type="date"
                  name="startTime"
                  className="rounded-full px-2"
                  defaultValue={String(new Date().toLocaleDateString('en-CA'))}
              />
              <label htmlFor="duration"> Duration(mins): </label>
              <input
                  type="number"
                  name="duration"
                  className="rounded-full px-2"
              />
              <label htmlFor="taskType"> Task Type: </label>
              <select
                  name="taskType"
                  defaultValue={'Break'}
                  className="rounded-full px-2">
                  <option value="Work">Work</option>
                  <option value="Meeting">Meeting</option>
                  <option value="Break">Break</option>
              </select>
              <button
                  type="submit"
                  className="bg-white rounded-full p-1 m-2 w-2/5 self-center hover:scale-110 transition-all">
                  Add
              </button>
          </form>
      </div>
  );
}

export default TaskForm