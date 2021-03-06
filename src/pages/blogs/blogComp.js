import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Calendar from "../../components/calendar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function BlogComp() {
    let history = useHistory();
    var [title, setTitle] = useState("");
    var [description, setDescription] = useState("");
    var [mainBody, setMainBody] = useState("");
    var [date, setDate] = useState(new Date());

    const handleSubmit = async (e) => {
        e.preventDefault() // used for the history.push at the end of this section of code
        let newBlogData = await fetch("http://localhost:4000/blogs/", { 
            //
            // ----------------  Need to add some data checking that all fields have data and that the date field is correctly formatted.
            //
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, description, mainBody, date })
        })
        let newBlog = newBlogData.json();
        console.log(newBlog);
        history.push("/adminBlogs"); // trying to redirect to the blogs page -- NOT WORKING ---------------- ??????????????????
    }

    return (
        <div className="blogUpdateContainer">
            <form onSubmit={handleSubmit}>
                <lable for="titleN" >Title: </lable><br></br>
                <input type="text" id="titleN" name="titleN" onChange={e => setTitle(e.target.value)} size="50"/><br></br>
                <lable for="descN" >Description: </lable><br></br>
                <textarea id="descN" name="descN" onChange={e => setDescription(e.target.value)} rows="2" cols="80"></textarea><br></br>
                {/* <input type="text" onChange={e => setDescription(e.target.value)} size="60"/><br></br> */}
                <lable for="bodyN" >Main Body: </lable><br></br>
                <textarea id="bodyN" name="bodyN" onChange={e => setMainBody(e.target.value)} rows="10" cols="130"></textarea><br></br>
                {/* <texta type="text" onChange={e => setMainBody(e.target.value)} /><br></br> */}
                <lable for="dateN" >Date: </lable><br></br>
                {/* <input id="dateN" name="dateN" type="date" onChange={e => setDate(e.target.value)} /> */}
                <DatePicker selected={date} onChange={date => setDate(date)}></DatePicker>
                <br></br><br></br>
                <input type="submit" />
            </form>
            {/* <Calendar /> */}
        </div>
    )
}

export default BlogComp;