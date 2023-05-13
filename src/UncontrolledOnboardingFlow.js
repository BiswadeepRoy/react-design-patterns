import React, { useState } from 'react'

export const UncontrolledOnboardingFlow = ({ children, onFinish }) => {
    const [onboardingData, setOnboardingData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentChild = React.Children.toArray(children)[currentIndex];

    const goToNext = stepData => {
        const nextIndex = currentIndex + 1
        const updatedData = {
            ...onboardingData,
            ...stepData
        };
        setOnboardingData(updatedData)

        console.log(updatedData)

        if (nextIndex === children.length) {
            onFinish(updatedData)
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    }


    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { goToNext })
    } else {
        return currentChild;
    }
}