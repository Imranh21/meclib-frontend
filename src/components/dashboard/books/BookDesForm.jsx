import React, { useState } from "react";
import {MdOutlineClose} from 'react-icons/md'



const categories = ["CSE", "EEE", "CE"];

const BookDesForm = ({
  toggleModal,
  bookDesSubmit,
  setDescription,
  setAuthors,
  setPublishers,
  setEdition,
  setCategory,
  setBookCategories,
  isLoading
}) => {

  return (
    <form
      className="w-[90%] relative bg-white p-[20px] pt-[30px] flex flex-col sm:w-[30%]"
      onSubmit={bookDesSubmit}
    >
      <MdOutlineClose onClick={toggleModal} className="absolute top-[10px] right-[10px]"/>

      <div className="flex flex-col mb-[10px] ">
        <label htmlFor="">Description</label>
        <textarea
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write book description..."
          className="py-[6px] px-[10px] bg-slate-100 rounded"
        />
      </div>

      <div className="flex flex-col mb-[10px] ">
        <label htmlFor="">Authors</label>
        <input
          type="text"
          onChange={(e) => setAuthors(e.target.value)}
          placeholder="If multiple? Then provide comma after every name"
          className="py-[6px] px-[10px] bg-slate-100 rounded"
        />
      </div>

      <div className="flex flex-col mb-[10px] ">
        <label htmlFor="">Category</label>
        <select  onChange={e => setCategory(e.target.value)}>
        {categories.map(el => (
          <option value={el}>{el}</option>
        ))}
        </select>
        
      </div>

      <div className="flex flex-col mb-[10px] ">
        <label htmlFor="">Sub categories</label>
        <input
          type="text"
          onChange={(e) => setBookCategories(e.target.value)}
          placeholder="If multiple? Then provide comma after every name"
          className="py-[6px] px-[10px] bg-slate-100 rounded"
        />
      </div>

      <div className="flex flex-col mb-[10px] ">
        <label htmlFor="">Edition</label>
        <input
          type="text"
          onChange={(e) => setEdition(e.target.value)}
          className="py-[6px] px-[10px] bg-slate-100 rounded"
        />
      </div>

      <div className="flex flex-col mb-[60px] ">
        <label htmlFor="">Publishers</label>
        <input
          type="text"
          onChange={(e) => setPublishers(e.target.value)}
          placeholder="If multiple? Then provide comma after every name"
          className="py-[6px] px-[10px] bg-slate-100 rounded"
        />
      </div>

      <div className="flex flex-col absolute bottom-[20px] right-[20px]">
        {isLoading ? <button disabled className="bg-gray-900 text-white text-white py-[6px] px-[12px]">
          Loading
        </button>: <button className="bg-gray-900 text-white text-white py-[6px] px-[12px]">
          Submit
        </button>}
      </div>
    </form>
  );
};

export default BookDesForm;
