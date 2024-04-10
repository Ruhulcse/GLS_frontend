import JoditEditor from 'jodit-react';
import { useRef } from 'react';
const TextEditor = ({setContent,content,label, data}) => {
	const editor = useRef(null);
	return (
		<div>
			<label htmlFor="id">{label}</label>
			<JoditEditor
			ref={editor}
			value={data?.body}
			tabIndex={1}
			onChange={(content)=> setContent(content)}
			// onChange={newContent => {}}
		/>
		</div>
	);
};

export default TextEditor