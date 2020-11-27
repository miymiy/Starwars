const request = <T>(url: string): Promise<T> => fetch(url.replace('http://', 'https://')).then((res) => res.json());

export default request;
