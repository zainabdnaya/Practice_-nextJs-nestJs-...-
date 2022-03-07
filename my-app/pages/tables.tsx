import { Table, Tag, Space, Button, Avatar } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useEffect, useState } from "react";
// import {Breakpoint} from "antd"

// import { useState, useEffect } from "react";
// import throttle from "lodash.throttle";




export default function _table() {

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    
  ];

  const columns: ColumnsType<{
    key: string;
    title:string;
  }> = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
    ];
  return (
    <div>
      <div className="tab" >
        {/* <Table dataSource={dataSource} columns={columns} responsive={Breakpoint[]} /> */}
        <Table dataSource={dataSource} columns={columns} />
        {/* <div style={{ textAlign: 'center', width: '100%', position: 'absolute' }}> */}
        {/* <Table columns={columns}  dataSource={dataSource} pagination={{ pageSize: 7 }} */}
        {/* // scroll={{ y: 5 }}
                    // style={{ width: '50%', }} */}
        {/* /> */}
      </div>
    </div>
  );
}

