const url = 'https://jsonplaceholder.typicode.com/users';

export const loadData = async (id: string | null = null) => {
    const res = await fetch(`${url}/${id ? id : ''}`);
    const data = await res.json();
    return data;
};