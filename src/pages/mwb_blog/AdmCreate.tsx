import { useNavigate } from 'react-router-dom';
import PostEditor from '../../components/PostEditor'
import  {useEffect} from 'react'

const CreateBlog = () => {
    const router = useNavigate();
    useEffect(() => {
        const tkn = localStorage.getItem('tkn');
        if (tkn === null){
            router("/wariobanew");
        }
        return;
    }, []);
  return (
    <div>
      <PostEditor post={null}/>
    </div>
  )
}

export default CreateBlog
