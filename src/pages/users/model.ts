// import { Effect, ImmerReducer, Reducer, Subscription } from 'umi'

// const UserModel = {
//   namespace: 'users',

//   state: {
//     name: ''
//   },

//   effects: {
//     *query({ payload }, { call, put }) {}
//   },

//   reducers: {
//     save(state, action) {
//       const data = [
//         {
//           key: '1',
//           name: 'John Brown',
//           age: 32,
//           address: 'New York No. 1 Lake Park',
//           tags: ['nice', 'developer'],
//         },
//         {
//           key: '2',
//           name: 'Jim Green',
//           age: 42,
//           address: 'London No. 1 Lake Park',
//           tags: ['loser'],
//         },
//         {
//           key: '3',
//           name: 'Joe Black',
//           age: 32,
//           address: 'Sidney No. 1 Lake Park',
//           tags: ['cool', 'teacher'],
//         },
//       ]
//       return data
//     }
//   },

//   subscriptions: {
//     setup({ dispatch, history }) {
//       return history.listen(({ pathname }) => {
//         if (pathname === '/users') {
//           dispatch({
//             type: 'save'
//           })
//         }
//       })
//     }
//   }
// }

// export default UserModel
import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import { getRemoteList } from './service';

interface UserModelType {
  namespace: 'users';
  state: {};
  reducers: {
    getList: Reducer;
  };
  effects: {
    getRemote: Effect;
  };
  subscriptions: {
    setup: Subscription;
  };
}

const UserModel: UserModelType = {
  namespace: 'users',
  state: {},
  reducers: {
    getList(state, { payload }) {
      console.log(payload, '666');
      return payload;
    },
  },
  effects: {
    *getRemote(action, { put, call }) {
      const data = yield call(getRemoteList);
      console.log(data, 555);
      yield put({
        type: 'getList',
        payload: data,
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }, done) {
      return history.listen((loacation, action) => {
        if (loacation.pathname === '/users') {
          dispatch({
            type: 'getRemote',
          });
        }
      });
    },
  },
};

export default UserModel;
