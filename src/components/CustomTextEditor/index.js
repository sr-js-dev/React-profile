import React, { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { config } from './editorConfig'

const CustomTextEditor = (props) => {
    const { item, setItem } = props
    const [txt, setTxt] = useState('')

    useEffect(() => {
        if(Object.keys(item).length > 0) setTxt(item['empaseContent'])
    }, [item])

    const handleChange = (data) => {
        setTxt(data)
        setItem({...item, empaseContent: data})
    }

ClassicEditor.defaultConfig = config
        return (
            <div className="custom-text-editor">
                <CKEditor
                    editor={ ClassicEditor }
                    data={txt}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        handleChange(data)
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
            </div>
        );
}

export default CustomTextEditor;