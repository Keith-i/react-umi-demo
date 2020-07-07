import { request } from 'umi';
export const getRemoteList = async params => {
  return request('http://public-api-v1.aspirantzhang.com/users', {
    method: 'get',
    // params: { id: 1 },
  })
    .then(function(response) {
      console.log(response);
      return response;
    })
    .catch(function(error) {
      console.log(error);
    });

  // return data
};
