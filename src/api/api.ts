const url = 'https://jsonplaceholder.typicode.com/users';

export const loadUsersList = async () => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
};

export const loadUser = async (id: string | undefined) => {
    const res = await fetch(`${url}/${id}`);
    const data = await res.json();
    return data;
};