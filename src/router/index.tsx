
import { useRoutes, Navigate } from 'react-router-dom';
import Home from '../pages/home/Home';
import Layout from '../layout';
import AboutUs from '../pages/aboutus';
import ProductsServices from '../pages/products';
import ContactUs from '../pages/contactus';
import NewsBlog from '../pages/news/News';
import BlogDetails from '../pages/news/BlogDetails';
import EditBlogDetails from '../pages/news/EditBlog';
import LoginPage from '../pages/mwb_blog/LoginAdm';
import Blogs from '../pages/mwb_blog/CreateBlog';
import CreateBlog from '../pages/mwb_blog/AdmCreate';

export default function Routeer() {
  
    const routes = useRoutes([
      {
        path: "/",
        element: (
          <>
            <Layout />
          </>
        ),
        children: [
            { element: <Navigate to="/home" />, index: true },
            { path: "home", element: <Home /> },
            { path: "aboutus", element: <AboutUs /> },
            { path: "products", element: <ProductsServices /> },
            { path: "contactus", element: <ContactUs /> },
            { path: "news", element: <NewsBlog /> },
            { path: "wariobanew", element: <LoginPage /> },
            { path: "wariobanew/create", element: <Blogs /> },
            { path: "wariobanew/create/agribusinessblog", element: <CreateBlog /> },
            { path: "news/:postid", element: <BlogDetails /> },
            { path: "news/:postid/edit", element: <EditBlogDetails /> },
            
        ],
      },
 
   
    //   {
    //     path: "*",
    //     element: <Navigate to="/404" replace />,
    //     element: <PageNotFound />,
    //   },
    ]);
  
    return routes;
  }