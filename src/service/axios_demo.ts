console.log('-------axios-----')
import axios from 'axios'

//axios 配置选项
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 10000

// get 请求，并且传入参数
axios
  .get('/get', {
    params: {
      name: 'zhangsan',
      age: 10
    },
    timeout: 500
  })
  .then((res) => {
    console.log(res.data)
  })

// post 请求
axios
  .post('/post', {
    data: {
      name: 'zhangsan'
    }
  })
  .then((res) => {
    console.log(res.data)
  })

// axios.all 多个请求，一并返回
axios
  .all([
    axios.get('/get', { params: { name: 'zhangsan' } }),
    axios.post('/post', { data: { name: 'zhangsan' } })
  ])
  .then((res) => {
    console.log('all', res[0])
    console.log('all', res[1])
  })

// 拦截器
// axios.get('/home/multidata').then((res) => {
//   console.log(res.data, res.status)
// })
