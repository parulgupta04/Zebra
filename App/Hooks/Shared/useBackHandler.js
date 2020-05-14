import LifecycleEventsHandler from '../../Utilities/LifecycleEventsHandler';
import BackButtonHandler from '../../Utilities/BackButtonHandler';

function useBackHandler(navigation, back) {
  function componentDidMount() {
    BackButtonHandler.mount(back ? true : false, navigation);
  }
  function componentWillUnmount() {
    BackButtonHandler.unmount();
  }
  LifecycleEventsHandler(componentDidMount, null, componentWillUnmount);
}

export default useBackHandler;
