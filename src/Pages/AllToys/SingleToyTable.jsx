import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../Proverders/AuthProverders';



const SingleToyTable = ({singleData,index}) => {
    const {user}=useContext(authContext)
    console.log(user);
    const {_id,toy_name,toy_img,price,sub_category,quantity,rating,review,description,seller_name,user_email,user_img}=singleData;
    return (
        <tbody>
       
        {/* <button onClick={notify}>Notify!</button> */}
     <tr className="bg-white border-b text-center dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
         <td className="w-4 p-4">
            #{index+1}
         </td>
         <th scope="row" className="flex items-center justify-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">

            {user_img ? <img className="w-10 h-10 rounded-full" src={user_img} alt="Jese image" />:
<div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
 <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
</div>
}


             <div className="pl-3 ">
                 <div className="text-base font-semibold">{seller_name}</div>
                 <div className="font-normal">{user_email}</div>
             </div>
         </th>
         <td className="px-6 py-4 text-black font-semibold">
             {toy_name}
         </td>
         <td className="px-6 py-4 text-black font-semibold">
             <div className="flex items-center text-black">
           {sub_category}
             </div>
         </td>
         <td className="px-6 py-4 text-black font-semibold">
             <a href="" className="font-medium  dark:text-blue-500 ">{quantity}</a>
         </td>
         <td className="px-6 py-4 text-black font-semibold">
             <a href="" className=" text-black font-semibold dark:text-blue-500 ">$ {price}</a>
         </td>
         <th >
             <Link to={`/productdetails/${_id}`} className="text-sm text-blue-500 px-6 py-4 font-semibold dark:text-blue-500 hover:underline">View details</Link>
         </th>
     </tr>
 </tbody>
)};

export default SingleToyTable;