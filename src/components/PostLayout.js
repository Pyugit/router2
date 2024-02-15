import { Outlet } from "react-router-dom";

const PostLayout = () => {
  return (
    <>
      <h1>this is PostLayout</h1>
      <Outlet />
    </>
  );
};

export default PostLayout;
