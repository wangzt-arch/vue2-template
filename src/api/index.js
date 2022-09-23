import serve from '../axios'

export default function axiosA(data) {
  return serve({
    url:`api/tabModel/selectList`,
    method:'post',
    data:data
}) 
}
