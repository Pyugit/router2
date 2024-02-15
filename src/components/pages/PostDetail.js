import { Params, useParams } from "react-router-dom";
const PostDetail = () => {
    let {category} =useParams();
    return (
      <>
        <h1>{category} PostDetail page</h1>
        <h3>{category} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid quod, 
        veniam sunt odio cum repellendus. Aperiam sapiente a laborum similique et, numquam accusantium 
        voluptatum aspernatur fuga non necessitatibus saepe!
        </h3>
      </>
    );
  };
  
  export default PostDetail;
  