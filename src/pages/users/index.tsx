import React from 'react';
import { Table, Tag, Space } from 'antd';
import { connect } from 'umi';

const index = state => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Create_time',
      dataIndex: 'create_time',
      key: 'create_time',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Edit</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  return (
    <div className="list-table">
      {console.log(state, 'state')
      // <Table columns={columns} dataSource={state.users.data} />
      }
      <Table columns={columns} dataSource={state.users.data} />
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  console.log(users, 'aaa');
  return {
    users,
  };
};

export default connect(mapStateToProps)(index);
