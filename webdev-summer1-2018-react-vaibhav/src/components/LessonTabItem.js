import React from 'react';
import {NavLink} from 'react-router-dom';

export default class LessonTabItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className="nav-item">
                <NavLink className="nav-link" activeStyle={{
                    fontWeight: 'bold',
                    color: 'red',

                }} exact to={`/course/
                ${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lesson.id}`}
                         >
                    {this.props.lesson.title}
                    &nbsp;&nbsp;
                    <span className="float-right">
                            <button className=" btn-danger"  onClick={()=>
                            {this.props.delete
                            (this.props.lesson.id)}}>
                    <i className="fa fa-times"></i>
                </button>
                </span>
                </NavLink>



            </li>
        )
    }
}