import React, {useState,useEffect, useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from "@fortawesome/free-solid-svg-icons"
import PropTypes from 'prop-types'
import useKeyPress from "../hooks/useKeyPress";

const FileSearch = ({title, onSearchFile})=>{
    const [inputActive, setInputActive] = useState(false)
    const [value, setValue]= useState('')
    const closeSearch =(e)=>{
        e.preventDefault()
        setInputActive(false)
        setValue('')
    }
    const node= useRef()
    const enterPressed=useKeyPress(13)
    const escPressed = useKeyPress(27)
    useEffect(()=>{
       if(enterPressed && inputActive){
        onSearchFile(value)
       }
       if(escPressed && inputActive){
        closeSearch()
       }
    })
    useEffect(()=>{
        if(inputActive){
            node.current.focus()
        }
    },[inputActive])
    return (
        <div className="alert alert-primary">
           {
              !inputActive && 
              <div className="d-flex justify-content-between align-items-center">
                <span>{title}</span>
                <button type="button" className="btn icon-button" onClick={()=>{setInputActive(true)}}>
                    <FontAwesomeIcon title="搜索" icon={faSearch} size="lg"/>
                </button>
              </div>
           }
           {
              inputActive && 
              <div className="row">
                <input ref={node} className="col-8" value={value} onChange={e=> setValue(e.target.value)}/>
                <button type="button" className="btn btn-primary col-4" onClick={closeSearch}>关闭</button>
              </div>
           }
        </div>
    )
}
FileSearch.propTypes={
    title:PropTypes.string,
    onFileSearch:PropTypes.func.isRequired,
}

export default FileSearch;