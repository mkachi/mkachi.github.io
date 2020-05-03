import React from 'react'
import Frame, { FrameType } from '../components/molecules/Frame'
import Footer from '../components/organisms/Footer'
import PostTemplate from '../components/templates/PostTemplate'
import Helmet from 'react-helmet'
import { IPost } from '../models/post'

interface IProps {
  post: IPost
}

const Post: React.FC<IProps> = ({ post }) => {
  return (
    <Frame type={FrameType.Content}>
      <Helmet>
        <title>{post.title}</title>
      </Helmet>
      <Frame type={FrameType.Container}>
        <PostTemplate post={post} />
      </Frame>
      <Footer />
    </Frame>
  )
}

export default Post