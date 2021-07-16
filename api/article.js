import {request} from '@/plugins/request'

// 获取公共的文章列表
export const getArticles = params => {
  return request({
    method: 'get',
    url: '/api/articles',
    params
  })
}
// 获取关注的用户的文章列表
export const getFeedArticles = params => {
  return request({
    method: 'get',
    url: '/api/articles/feed',
    //Authorization: Token jwt.token.here
    // headers: {
    //   // 注意数据格式Token空格数据
    //   Authorization: `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTc4MTIyLCJ1c2VybmFtZSI6Imx4anRlc3QiLCJleHAiOjE2MzA3NTM5MTB9.wzXTFNH3QQtQwXi-UaOPlVwZw7JbGN2dDrJZHYZMitA`,
    // },
    params
  })
}

// 添加点赞
export const addFavorite = slug => {
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  })
}

// 取消点赞
export const deleteFavorite = slug => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  })
}

// 获取文章详情
export const getArticle = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}`
  })
}

// 获取文章评论
export const getComments = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  })
}

// 删除文章评论
export const deleteComments = (slug, id )=> {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}/comments/${id}`
  })
}
// 添加文章评论
export const addComments = (slug, data)=> {
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/comments`,
    data
  })
}

// 发布文章
export const addPost = (data)=> {
  return request({
    method: 'POST',
    url: `/api/articles`,
    data
  })
}

// 修改文章
export const updatePost = (slug, data)=> {
  return request({
    method: 'PUT',
    url: `/api/articles/${slug}`,
    data
  })
}
