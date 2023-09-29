import React from 'react';
import jwtinterceptor from '../helper/jwtinterceptor'

const useCrud = (apiUrl) => {
    const jwtAxios = jwtinterceptor();
    const [dataCRUD, setDataCRUD] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await jwtAxios.get(apiUrl, {});
            if (response.status === 200) {
                const data = response.data;
                setDataCRUD(data);
                setError(null);
            } else {

                setError(`Unexpected status code: ${response.status}`);
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return { fetchData, dataCRUD, error, isLoading };
};

export default useCrud;