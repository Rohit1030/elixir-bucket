import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { SearchOutlined } from "@ant-design/icons";

type myObj = {
    key: string;
    name: string;
    email: string;
    type: string;
    enrollmentNumber: number;
    departmentName: string;
}

const dataSource: myObj[] = [
    {
      key: '1',
      name: 'John',
      email: 'john123@gmail.com',
      type: 'Student',
      enrollmentNumber: 4568,
      departmentName: 'Math'
    },
    {
      key: '2',
      name: 'Ross',
      email: 'john123@gmail.com',
      type: 'Teacher',
      enrollmentNumber: 8975,
      departmentName: 'History'
    },
    {
        key: '3',
        name: 'Rose',
        email: 'rose619@gmail.com',
        type: 'Student',
        enrollmentNumber: 6687,
        departmentName: "Biology"
      }
];

const columns: ColumnsType<myObj> = [
    {
        key: 'name',
        title: 'Name',
        dataIndex: 'name',
        filters: dataSource.map(item => {
            return {
              text: item.name,
              value: item.name
            }
          }),
          filterMode: 'menu',
          filterIcon: filtered => <SearchOutlined />,
          filterSearch: true,
          onFilter: (value: any, record) => record.name.startsWith(value)
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email'
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
        filters: [
          {
            text: 'Student',
            value: 'Student'
          },
          {
            text: 'Teacher',
            value: 'Teacher'
          },
          {
            text: 'Admin',
            value: 'Admin'
          }
        ],
        onFilter: (value: any, record) => record.type.startsWith(value)
    },
    {
        key: 'enrollmentNumber',
        title: 'Enrollment Number',
        dataIndex: 'enrollmentNumber',
        defaultSortOrder: 'ascend',
        sorter: (a, b) => a.enrollmentNumber - b.enrollmentNumber
    },
    {
        title: 'Department Name',
        dataIndex: 'departmentName',
        key: 'departmentName',
        filters: dataSource.map(item => {
          return {
            text: item.departmentName,
            value: item.departmentName
          }
        }),
        filterMode: 'menu',
        filterIcon: filtered => <SearchOutlined />,
        filterSearch: true,
        onFilter: (value: any, record) => record.departmentName.startsWith(value)
      }
]

export default function MyTable(){
    return (
        <Table 
            columns={columns} 
            dataSource={dataSource} 
            style={
                {
                    width: '88%', 
                    marginTop: '3rem',
                    marginRight: 'auto', 
                    marginLeft: 'auto',
                    boxShadow: '0 0 30px -15px'
                }
            } 
            pagination={false}/>
    );
}