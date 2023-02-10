import React from 'react'
import { useState } from 'react'

const Student = () => {
    const students=[
    {"name":"Aman","course":"bca",semester:"1"},
    {"name":"Sujal","course":"bca",semester:"3"},
    {"name":"Prity","course":"bca",semester:"5"},
    {"name":"xyz","course":"bca",semester:"2"},
    ]
  return (
    <>
        {/*{console.log(students)}*/}
    {
      students.map(student => <h1> Name :{student.name} Course: {student.course} Semester: {student.semester} </h1>)
    }
    </>
  )
}

export default Student
