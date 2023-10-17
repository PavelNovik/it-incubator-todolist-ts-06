import React, {ChangeEvent, useState} from 'react';

type EditableSpanPropsType = {
    title: string
    changeTitle: (title: string) => void
}
const EditableSpan = (props: EditableSpanPropsType) => {
    const [isEditable, setIsEditable] = useState(false)
    const [title, setTitle] = useState(props.title)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const changeEditeMode = () => {
        setIsEditable(prevState => {
            props.changeTitle(title)
            return !prevState
        })
        // setIsEditable(!isEditable)
        // if (isEditable) {
        //     props.changeTitle(title)
        // }
    }
    return (
        isEditable ? <input onBlur={changeEditeMode} onChange={onChangeHandler} type="text" value={title} autoFocus/> :
            <span onDoubleClick={changeEditeMode}>{title}</span>
    );
};

export default EditableSpan;