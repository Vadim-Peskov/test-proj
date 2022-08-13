import React, { useMemo } from "react";
import { Table } from "antd";
import { data } from '../data';
import { dataItem } from '../types/types';

export const AntdTable = () => {
  const dataSource = useMemo(() => {
    return data.map((i, ind) => ({...i, key: ind}));
  }, []);

  const namesFilter = useMemo(() => {
    return data.map(i => ({text: i.username, value: i.username}))
  }, []);

  const actionsFilter = useMemo(() => {
    let actionKeys = data.reduce((acc: string[], i) => {
      if (!acc.includes(i.action)) acc.push(i.action);
      return acc;
    }, [])
    return actionKeys.map(i => ({text: i, value: i}))
  }, []);

  const timesFilter = useMemo(() => {
    let timesKeys = data.reduce((acc: string[], i) => {
      if (!acc.includes(i.action_createad_at)) acc.push(i.action_createad_at);
      return acc;
    }, [])
    return timesKeys.map(i => ({text: i, value: i}))
  }, []);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'username',
      key: 'username',
      filters: namesFilter,
      onFilter: (value: any, item: dataItem) => item.username.includes(value),
      sorter: (a: dataItem, b: dataItem) => a.username > b.username ? 1 : -1,
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      filters: actionsFilter,
      onFilter: (value: any, item: dataItem) => item.action.includes(value),
      sorter: (a: dataItem, b: dataItem) => a.action > b.action ? 1 : -1,
    },
    {
      title: 'Time',
      filters: timesFilter,
      dataIndex: 'action_createad_at',
      key: 'action_createad_at',
      onFilter: (value: any, item: dataItem) => item.action_createad_at.includes(value),
      sorter: (a: dataItem, b: dataItem) => a.action_createad_at > b.action_createad_at ? 1 : -1,
    },
  ];

  return (
    <Table 
      dataSource={dataSource}
      columns={columns}
      pagination={{
        defaultPageSize: 5,
        showSizeChanger: true,
        pageSizeOptions: [5, 10],
        position: ['bottomCenter'],
      }}
    />
  )
}

export default AntdTable;