import { useFetch } from './useFetch';

export default function useServicesData() {
  const [isLoading, error, data] = useFetch('/services', 'GET');

  return { isLoading, error, data: data ?? [] };
}
