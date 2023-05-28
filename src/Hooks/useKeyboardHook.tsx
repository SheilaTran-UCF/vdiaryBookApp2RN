import { useEffect, useState } from 'react';
import { Keyboard, Dimensions, KeyboardEvent } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useKeyboardHook = () => {
  const [isShowKeyboard, setShowKeyboard] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(
    Dimensions.get('window').height / 3,
  );

  useEffect(() => {
    _getCacheKeyboard();
    const showSubscription = Keyboard.addListener(
      'keyboardWillShow',
      _keyboardWillShow,
    );
    const hideSubscription = Keyboard.addListener(
      'keyboardWillHide',
      _keyboardWillHide,
    );
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const _getCacheKeyboard = async () => {
    const cache = await AsyncStorage.getItem('HEIGHT_KEY_BOARD');
    if (cache) {
      setKeyboardHeight(JSON.parse(cache));
    }
  };

  const _keyboardWillShow = (event: KeyboardEvent) => {
    setShowKeyboard(true);
    const value = event.endCoordinates.height || 0;
    if (keyboardHeight !== value) {
      setKeyboardHeight(value);
      AsyncStorage.setItem('HEIGHT_KEY_BOARD', JSON.stringify(value));
    }
  };

  const _keyboardWillHide = () => {
    setShowKeyboard(false);
  };

  return { isShowKeyboard, keyboardHeight };
};

export default useKeyboardHook;
