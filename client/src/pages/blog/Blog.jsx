

import { CommentList } from '../../feature/comment/component/CommentList'
import { CommentCard } from '../../feature/comment'
import Layout from '../../layout'
import BreadCrumb from '../../shared/BreadCrumb'

function Blog() {
  return (
    <Layout>
        <BreadCrumb text="Blog" page="Blog" navlink="/blog" />
     <div className='px-[100px] py-[70px]'>
         <p className="text-[40px] font-bold text-[#012E4A] py-3">
          Blog Post
        </p>
        <CommentList />
     </div>
    </Layout>
  )
}

export default Blog
