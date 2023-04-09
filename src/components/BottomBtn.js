import React, {useState,useEffect, useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PropTypes from 'prop-types'
const BottomBtn=({text, colorClass, icon, onClick})=>(
    <button
        type="button"
        className={`btn btn-block no-border ${colorClass} btnWidth`}
    >
        <FontAwesomeIcon size="lg" icon={icon}/>
        {text}
    </button>
)
BottomBtn.prototypes={
    text:PropTypes.string,
    colorClass:PropTypes.string,
    icon: PropTypes.element.isRequired,
    onClick:PropTypes.func,
}
BottomBtn.defaultProps={
    text:'新建'
}
export default BottomBtn;