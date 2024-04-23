import TextEditor from "@/components/Blogs/form/TextEditor";
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
		type: yup.string().required(),
	})
	.required();
const GuideForm = () => {
  const [tags, setTags] = useState([]);
  const [videoType, setVideoType] = useState(false);
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

const onSubmit = async data => {
  if (id) {
    updateData(data);
  } else {
    storeData(data);
    console.log(data)
  }
};
const blogtype = [
  {
    label: "Guide Blog",
    value: "Guide Blog",
  }
]
const videotype = [
  {
    label: "Guide Video",
    value: "Guide Video",
  },
]
const storeData = async data => {
  try {
    const payload = { ...data, tags, body: description }
    console.log(payload)
    const response = await fetchWrapper.post(`guide/create`, payload);
    if (response) {
      successToast('Guide Blog Create successfully!');
      navigate('/guideblog-list');
    }
  } catch (error) {
    errorToast(error.message);
  }
};
const updateData = async data => {
  try {
    const payload = { ...data, tags, body: description }
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
          <button onClick={()=> setVideoType(false)} className={`${!videoType && "bg-black-700 text-white font-medium text-sm p-2 rounded-md"}`}>Guide Blog</button>
          <button onClick={()=> setVideoType(true)} className={`${videoType && "bg-black-700 text-white font-medium text-sm p-2 rounded-md"}`}>Guide Video</button>
      </div>
        }
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="lg:grid-cols-2 grid gap-5 grid-cols-1">
        {
          !videoType ?
          <Select
          label="Type"
          placeholder="Seletct Type"
          name="type"
          // defaultValue={!videoType && "Guide Blog"}
          disabled={false}
          register={register}
          options={blogtype}
          error={errors.type}
          />
          :
        <Select
          label="Type"
          placeholder="Seletct Type"
          name="type"
          // defaultValue={!videoType && "Guide Blog"}
          disabled={false}
          register={register}
          options={videotype}
          error={errors.type}
          />
        }
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
          !videoType &&
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
        </div>
        <div className="my-4">
        {
          !videoType && id && guideblog.type === "Guide Blog" && (
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
