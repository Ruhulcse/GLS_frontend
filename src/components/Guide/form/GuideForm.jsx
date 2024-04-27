import TextEditor from "@/components/Blogs/form/TextEditor";
import Fileinput from "@/components/ui/Fileinput";
import Select from "@/components/ui/Select";
import Textinput from "@/components/ui/Textinput";
import useToast from "@/hooks/useToast";
import { getGuideBlog } from "@/store/api/guideblog/guidesblogSlice";
import fetchWrapper from "@/util/fetchWrapper";
import { yupResolver } from '@hookform/resolvers/yup';
import { Jodit } from "jodit-react";
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { TagsInput } from "react-tag-input-component";
import * as yup from 'yup';
const categories = [
  {
    label: "Shipper",
    value: "Shipper",
  },
  {
    label: "Carrier",
    value: "Carrier",
  },
  {
    label: "Broker",
    value: "Broker",
  },
];

const FormValidationSchema = yup
	.object({
		title: yup.string().required(),
		category: yup.string().required(),
		video: yup.string().optional(),
	})
	.required();
const GuideForm = () => {
  const [tags, setTags] = useState([]);
  const [videoType, setVideoType] = useState(true);
  const [image, setImage] = useState(null);
  const [content, setContent] = useState('');
  const description = Jodit.modules.Helpers.stripTags(content);
  const { errorToast, successToast } = useToast();
  const navigate = useNavigate()
  const { id } = useParams();
  const dispatch = useDispatch();
	const { guideblog } = useSelector(state => state.guideblog);
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    reset,
} = useForm({
    resolver: yupResolver(FormValidationSchema),
    mode: 'all',
    // reValidateMode: 'onChange',
});


const toBase64 = (file) =>
new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = (error) => reject(error);
});

const uplpadImage = (e) => {
  setImage(e.target.files[0], false);
};

useEffect(() => {
  if (id) {
    dispatch(getGuideBlog({ id }));
  }
}, [id, dispatch]);

useEffect(() => {
  if (id && guideblog) {
    reset(prev => ({
      ...prev,
      ...guideblog,
    }));
  }
}, [id, reset, guideblog]);
const type = !videoType ? 'Guide Blog' : 'Guide Video'
const onSubmit = async data => {
  if (id) {
    updateData(data);
  } else {
    storeData(data);
  }
};
const storeData = async data => {
  try {
    let base64Data
    if(image){
    base64Data = await toBase64(image);
    }
    const payload = { ...data, type, tags, body: description, image: base64Data }
    console.log(payload)
    const response = await fetchWrapper.post(`guide/create`, payload);
    if (response) {
      successToast('Guide Blog Create successfully!');
      navigate('/guideblog-list');
    }
  } catch (error) {
    errorToast(error.message);
    console.log(error)
  }
};
const updateData = async data => {
  try {
    let base64Data
    if(image){
    base64Data = await toBase64(image);
    }
    const payload = { ...data, type, tags, body: description, image:base64Data }
    const response = await fetchWrapper.put(`guide/${id}`, payload);
    if (response) {
      successToast('Update Success!');
      navigate('/guideblog-list');
    }
  } catch (error) {
    errorToast(error.message);
  }
};
  return (
    <div>
        {
          !id && 
      <div className="flex gap-4 my-4">
          <button onClick={()=> setVideoType(!videoType)} className={`${videoType && "bg-black-700 text-white font-medium text-sm p-2 rounded-md"}`}>Video</button>
          <button onClick={()=> setVideoType(!videoType)} className={`${!videoType && "bg-black-700 text-white font-medium text-sm p-2 rounded-md"}`}>Blog</button>
      </div>
        }
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="lg:grid-cols-2 grid gap-5 grid-cols-1">
        <Textinput 
        label="Title" 
        placeholder="Title" 
        name="title"
        register={register}
        error={errors.title}
        />
        <Select
          label="Select Category"
          placeholder="Select Category"
          disabled={false}
          name="category"
          register={register}
          options={categories}
          error={errors.category}
        />
        {
          videoType && !id &&
          <Textinput 
          type="text"
          label="Enter Video Link" 
          placeholder="Enter Video Link" 
          name="video"
          register={register}
          error={errors.video}
          />
        }
        {
          id && guideblog.type === "Guide Video" &&
          <Textinput 
          type="text"
          label="Enter Video Link" 
          placeholder="Enter Video Link" 
          name="video"
          register={register}
          error={errors.video}
          />
        }
        <div>
          <label htmlFor="id" className="tag-label">Add Tags</label>
          <TagsInput
            value={tags}
            defaultValue={id && guideblog.tags}
            onChange={setTags}
            name="tags"
            placeHolder="Enter Tags"
            className="h-20"
            error={errors.tags}
          />
        </div>
        {
          id && guideblog.type === 'Guide Blog' &&
          <Fileinput
          type="file"
          label="Upload Image"
          placeholder="Choose your file"
          onChange={uplpadImage}
          name="image"
          selectedFile={image}
          className="mt-8"
        />
        }
        {
          !videoType &&
          <Fileinput
          type="file"
          label="Upload Image"
          placeholder="Choose your file"
          onChange={uplpadImage}
          name="image"
          selectedFile={image}
          className="mt-8"
        />
        }
        </div>
        <div className="my-4">
        {
          videoType && id && guideblog.type === "Guide Blog" && (
            <TextEditor
            label={'Blog'}
            setContent={setContent}
            value={id && guideblog.body}
            />
          )
        }
        {
          !videoType && !id && (
            <TextEditor
            label={'Blog'}
            setContent={setContent}
            value={id && guideblog.body}
            />
          )
        }
        </div>
              
        <div className="ltr:text-right rtl:text-left my-4">
          <button type="submit" className="btn  text-center">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default GuideForm;
