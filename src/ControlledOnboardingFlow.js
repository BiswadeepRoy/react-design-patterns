import React from 'react'

export const ControlledOnboardingFlow = ({ children, onFinish, currentIndex, onNext }) => {

    const currentChild = React.Children.toArray(children)[currentIndex];

    const goToNext = stepData => {
        onNext({ stepData })
        if (currentIndex === (children.length - 1)) {
            onFinish({ stepData })
        }
    }


    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { goToNext })
    } else {
        return currentChild;
    }
}