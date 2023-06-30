import React from "react";
import Card from "./Card";
const Cards=({courses})=>{

     let allCourses=[];
     const getCourses =()=>{
                    
         Object.values(courses).forEach((courseCategory)=>{
            courseCategory.forEach((course)=>{
                allCourses.push(course);
            })
        })
        return allCourses;

     }

    return(
        <div>
            {
            getCourses().map((course) => {
                return (
                <Card key="course.id" course={course}>
                </Card>)
            })  
        }
        </div>
    )

}
export default Cards