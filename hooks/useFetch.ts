import { AxiosRequestConfig } from 'axios';
import { useState, useEffect, useRef } from 'react';
import instance from '../config/axios';

interface State {
  loading: boolean;
  error: boolean;
  data: any;
}

type UseFetchType = (config: AxiosRequestConfig) => State;

const useFetch: UseFetchType = config => {
  const [state, setState] = useState<State>({
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

  return { ...state };
};

export default useFetch;
