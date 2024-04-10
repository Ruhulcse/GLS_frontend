import useToast from '@/hooks/useToast';
import { usePostBlogMutation } from '@/store/api/blogs/blogsApi';
import { Jodit } from 'jodit-react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextEditor from "./TextEditor";

const BlogUploadForm = () => {
  const [addBlog, { isSuccess,isError, error}] = usePostBlogMutation()
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState(null)
  const [content, setContent] = useState('')
  const description = Jodit.modules.Helpers.stripTags(content);
  const navigate = useNavigate()
  const { errorToast, successToast } = useToast();
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  const handleSubmit = async (e) => {
    e.preventDefault();
    let base64Data;
    if (image) {
      base64Data = await toBase64(image);
    }
    const payload = {
      title,
      category,
      body:description,
      image:base64Data
    }
     if(payload){
      addBlog(payload)
      successToast("Blog Upload Successfully")
      navigate("/blogs")
     }
     if(isError){
       errorToast(error)
      }
};

  return (
    <div>
       <form
        onSubmit={handleSubmit}
        
      >
        <div className="lg:grid-cols-2 grid gap-5 grid-cols-1 my-4">

        <div>
          <label
            for="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Title"
            required
            onChange={(e)=> setTitle(e.target.value)}
          />
        </div>
        <div>
        <label
            for="category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select Category
          </label>
          <select value={category} onChange={(e)=> setCategory(e.target.value)} className="select select-bordered w-full max-w-xs">
            <option disabled selected>
            Select Category
            </option>
            <option value="Shipment">Shipment</option>
            <option value="Carrier">Carrier</option>
          </select>
        </div>
        <div>
        <label
            for="upload image"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Upload Image
          </label>
          <input type="file" required onChange={(e)=> setImage(e.target.files[0], false)} />
        </div>
        </div>
        <div className="mb-4">
        <TextEditor
          label="Content"
          name="content"
          setContent={setContent}
        />
        </div>
        <div className="lg:col-span-2 col-span-1">
          <div className="ltr:text-right rtl:text-left">
            <button className="btn btn-dark  text-center" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BlogUploadForm;
