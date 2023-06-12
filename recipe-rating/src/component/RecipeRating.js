import React, {useState} from "react";

export default function RecipeRating() {

    const [rating, setRating] = useState();

    const handleSetRating = (event) => setRating(event.target.value);
    

    return (
        <>
            <hr className="my-3 w-full"/>
            {rating && (
                <p>
                    <strong>Rating: </strong>{rating}
                </p>
            )}


            <select onChange={handleSetRating} className="block w-full border rounded-lg border-sky-500 focus:border-sky-500 p-2 my-3">
                <option value="">-- Select a rating --</option>
                <option value="4 😋" >4 - It's super delicious!</option>
                <option value="3 😁" >3 - I'll make it again!</option>
                <option value="2 😐" >2 - It needs work!</option>
                <option value="1 😞" >1 - I'll never make this again!</option>
            </select>
        </>
    )
}