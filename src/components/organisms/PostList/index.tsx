import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

import useDB from '../../../hooks/useDB'
import Layout, { Direction } from '../../molecules/Layout'
import Card from '../../molecules/Card'
import A, { LinkType } from '../../atoms/A'
import P from '../../atoms/P'

interface IProps {
  className?: string
  pageIndex: number
  showPostCount: number
}

const PostList: React.FC<IProps> = ({ className, pageIndex, showPostCount }) => {
  const { postList } = useDB()
  const beginIndex = (pageIndex - 1) * showPostCount
  const endIndex = pageIndex * showPostCount
  const posts = postList.slice(beginIndex, endIndex)

  return (
    <Layout className={className} direction={Direction.Column}>
      {posts.map(post => {
        return (
          <Card>
            <Layout direction={Direction.Column}>
              <P className={styles.date} text={post.date} />
              <A className={styles['post-link']} to={`/post/${post.key}`} type={LinkType.Route}>
                <P className={styles.title} text={post.title} />
              </A>
              <Layout className={styles['tag-list']} direction={Direction.Row}>
                {post.tags.map(tag => (
                  <span className={styles.tag}>{`#${tag}`}</span>
                ))}
              </Layout>
            </Layout>
          </Card>
        )
      })}
    </Layout>
  )
}

export default PostList
