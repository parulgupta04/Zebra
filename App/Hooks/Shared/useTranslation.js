import { useEffect, useMemo, useState } from "react";
import { TranslatorFactory } from 'react-native-power-translator';

function useTranslation(dependecyArray, noTranslate, children) {
    const [textChildren, setTextChildren] = useState('');

    useEffect(() => {
        const functionAsync = async () => {
            if (noTranslate) {
                setTextChildren(children)
            } else {
                try {
                    const translator = TranslatorFactory.createTranslator();
                    const tempText = await translator.translate(children);
                    setTextChildren(tempText)
                }
                catch (error) {
                    setTextChildren(children)
                }
            }
        }
        functionAsync();
    }, dependecyArray);

    return textChildren;

}

export default useTranslation
