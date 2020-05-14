import {useEffect} from 'react';

const LifecycleEventsHandler = (
  componentDidMount,
  componentDidUpdate,
  componentWillUnmount,
  dependencies = [],
) => {
  useEffect(() => {
    if (componentDidMount) {
      componentDidMount();
    }
  }, []);
  useEffect(
    () => {
      if (componentDidUpdate) {
        componentDidUpdate();
      }
      return () => {
        if (componentWillUnmount) {
          componentWillUnmount();
        }
      };
    },
    dependencies ? [...dependencies] : undefined,
  );
};

export default LifecycleEventsHandler;
