import Fileinput from "@/components/ui/Fileinput";
import Select from "@/components/ui/Select";
import Textinput from "@/components/ui/Textinput";
import useToast from "@/hooks/useToast";
import { getBlog } from "@/store/api/blogs/blogsSlice";
import fetchWrapper from "@/util/fetchWrapper";
import { yupResolver } from "@hookform/resolvers/yup";
import { Jodit } from "jodit-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import TextEditor from "./TextEditor";
const category = [
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
  })
  .required();
const BlogUploadForm = () => {
  const [title, setTitle] = useState("");
  const [categorye, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [content, setContent] = useState("");
  const description = Jodit.modules.Helpers.stripTags(content);
 
  const { id } = useParams();
	const { blog } = useSelector(state => state.blog);
	const dispatch = useDispatch();
	const { errorToast, successToast } = useToast();
	const navigate = useNavigate();
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
			dispatch(getBlog({ id }));
		}
	}, [id, dispatch]);

	useEffect(() => {
		if (id && blog) {
			reset(prev => ({
				...prev,
				...blog,
			}));
		}
	}, [id, reset, blog]);

	const onSubmit = async data => {
		if (id) {
			updateData(data);   
		} else {
			storeData(data);
		}
	};

	const storeData = async data => {
		try {
      const base64Data = await toBase64(image);
      const payload = {...data, body:description, image:base64Data}
			const response = await fetchWrapper.post(`blogs/create`, payload);
			if (response) {
				successToast('Blog saved successfully!');
				navigate('/blogs');
			}
		} catch (error) {
			errorToast(error.message);
		}
	};
	const updateData = async data => {
		try {
      let base64Data
      if(image){
      base64Data = await toBase64(image);
      }
      const payload = {...data, body:description, image:base64Data}
			const response = await fetchWrapper.put(`blogs/${id}`, payload);
			if (response) {
				successToast('Update Success!');
				navigate('/blogs');
			}
		} catch (error) {
			errorToast(error.message);
		}
	};
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="lg:grid-cols-2 grid gap-5 grid-cols-1 my-4">
          <Textinput
            type="text"
            label="Title"
            placeholder="Title"
            name="title"
            register={register}
            error={errors.title}
          />
          <Select
            label="Select Category"
            type="text"
            name="category"
            register={register}
            options={category}
            error={errors.category}
          />
          <Fileinput
            type="file"
            label="Upload Image"
            placeholder="Choose your file"
            onChange={uplpadImage}
            name="image"
            error={errors.image}
            selectedFile={image}
          />
        </div>
        <TextEditor 
        label="Content" 
        setContent={setContent}
        value={id && blog.body}
        />
        <div className="ltr:text-right rtl:text-left my-4">
          <button type="submit" className="btn  text-center">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogUploadForm;
