import React from "react";
import RecipeRating from "./RecipeRating";

export default function Recipe({data}) {
    
    return (
        <div className="flex flex-col justify max-w-sm bg-white border border-gray-200 rounded-lg shadow  ">
            <a href="#">
                <img className=" rounded-lg w-full h-64 px-3 pt-3" src={data.strMealThumb} alt={data.strMeal} />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{data.strMeal}</h5>
                </a>
                <span className="text-gray-900">
                    {data.strCategory} | <a className=" text-sky-500 visited:text-purple-600" href={data.strYoutube} target="_blank" rel="noreferrer">View Video</a>
                </span>
                <RecipeRating />
                
                {/* <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a> */}
            </div>
        </div>

        // <div className="card  flex flex-col justify-center items-start ">
        //     <div>
        //         <img className="rounded-lg max-w-none" src={props.image}  alt="image of pancakes "/>
        //     </div>
        //     <h2 className="text-3xl font-bold py-10 ">{props.name}</h2>
        // </div>
    );
}
