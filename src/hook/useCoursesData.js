import { useEffect, useState } from 'react';

export default function useCoursesData() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3000/courses');
        if (!response.ok) {
          throw new Error('houve algum problema de rede')
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error(`erro de fetch: ${ error }`)
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return { courses, isLoading };
}
