/* eslint-disable no-unused-vars */
import React from 'react';
import { useFetch } from './useFetch';
import { DataGrid } from '@mui/x-data-grid';
import './Page1.scss';

const baseURL = "https://jsonplaceholder.typicode.com";

const columns = {
    users: [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'phone', headerName: 'Phone', width: 150 },
    ],
    posts: [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'title', headerName: 'Title', width: 200 },
        { field: 'body', headerName: 'Body', width: 400 },
    ],
    todos: [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'title', headerName: 'Title', width: 300 },
        { field: 'completed', headerName: 'Completed', width: 150, type: 'boolean' },
    ],
};

function Page1() {
    const { data: userData } = useFetch(baseURL, "users");
    const { data: postData } = useFetch(baseURL, "posts");
    const { data: todoData } = useFetch(baseURL, "todos");

    const getRows = (data, type) => {
        return data ? data.map(item => ({
            id: item.id,
            ...(type === 'users' && { name: item.name, email: item.email, phone: item.phone }),
            ...(type === 'posts' && { title: item.title, body: item.body }),
            ...(type === 'todos' && { title: item.title, completed: item.completed }),
        })) : [];
    };

    return (
        <div className='page1'>
            {['users', 'posts', 'todos'].map(type => (
                <div key={type}>
                    <h1 className={`${type}_title`}>{`${type.charAt(0).toUpperCase() + type.slice(1)} Data`}</h1>
                    <div className='data_container'>
                        <div style={{ height: 300, width: '100%' }}>
                            <DataGrid
                                rows={getRows(type === 'users' ? userData : type === 'posts' ? postData : todoData, type)}
                                columns={columns[type]}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                                checkboxSelection
                                disableRowSelectionOnClick
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Page1;
