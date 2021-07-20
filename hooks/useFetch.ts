import { AxiosRequestConfig } from 'axios';
import { useState, useEffect, useRef } from 'react';
import instance from '../config/axios';

interface State<T> {
  loading: boolean;
  error: boolean;
  data: T;
}

const useFetch = <T>(config: AxiosRequestConfig): State<T> => {
  const [state, setState] = useState<State<T>>({
    loading: true,
    error: false,
    data: null,
  });
  const fetchConfig = useRef(config);

  useEffect(() => {
    instance(fetchConfig.current)
      .then(response => {
        setState({
          loading: false,
          error: false,
          data: response.data,
        });
      })
      .catch(err => {
        setState({
          loading: false,
          error: true,
          data: null,
        });
      });
  }, []);

  return state;
};

export default useFetch;
