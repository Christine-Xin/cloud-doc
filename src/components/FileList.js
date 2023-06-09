import React, {useState,useEffect, useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit,faTrash,faTimes} from "@fortawesome/free-solid-svg-icons"
import {faMarkdown} from "@fortawesome/free-brands-svg-icons"
import PropTypes from 'prop-types'
import useKeyPress from "../hooks/useKeyPress";

const FileList=({files,onFileClick, onSaveEdit, onFileDelete})=>{
    const [editStatus, setEditStatus]=useState(false)
    const [value, setValue]=useState('')
    const closeSearch=(e)=>{
        e.preventDefault()
        setValue('')
        setEditStatus(false)
    }
    const enterPressed=useKeyPress(13)
    const escPressed = useKeyPress(27)
    useEffect(()=>{
        if(enterPressed && editStatus){
            const editItem = files.find(file => file.id === editStatus)
            onSaveEdit(editItem.id, value)
            setValue('')
            setEditStatus(false)
        }
        if(escPressed && editStatus){
            closeSearch()
        }
        
    })
    return (
        <ul className="list-group list-group-flush file-list">
            {
                files.map(file => (
                    <li 
                        className="list-group-item bg-light row d-flex align-items-center file-item"
                        key={file.id}
                    >
                        {
                            (file.id !== editStatus) &&
                            <>
                                <span className="col-2">
                                    <FontAwesomeIcon size="lg" icon={faMarkdown}/>
                                </span>
                                <span className="col-8 c-link" onClick={()=>{onFileClick(file.id)}}>{file.title}</span>
                                <button type="button" className="icon-button col-1 icon-button" onClick={()=>{setEditStatus(file.id); setValue(file.title)}}>
                                    <FontAwesomeIcon title="编辑" size="lg" icon={faEdit}/>
                                </button>
                                <button type="button" className="icon-button col-1 icon-button" onClick={()=>{onFileDelete(file.id)}}>
                                    <FontAwesomeIcon title="删除" size="lg" icon={faTrash}/>
                                </button>
                            </>
                        }
                        {
                            (file.id === editStatus) &&
                            <>
                                <input
                                    className="col-10"
                                    value={value}
                                    onChange={(e)=>{setValue(e.target.value)}}
                                ></input>
                                <button type="button" className="icon-button col-2" onClick={closeSearch}>
                                    <FontAwesomeIcon title="关闭" size="lg" icon={faTimes}/>
                                </button>
                            </>
                        }
                    </li>
                ))
            }
        </ul>
    )
}
FileList.propTypes={
    files:PropTypes.array,
    onFileClick:PropTypes.func,
    onFileDelete:PropTypes.func,
    onSaveEdit:PropTypes.func,
}
export default FileList;