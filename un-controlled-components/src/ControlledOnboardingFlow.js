import React from 'react'

export const ControlledOnboardingFlow = ({ children, onFinish, currentIndex, onNext }) => {
  const goToNext = stepData => {
    if (currentIndex + 1 < children.length) {
      onNext(stepData);
    } else {
      onFinish();
    }
  }
  const currentChild = React.Children.toArray(children)[currentIndex]; //First component array
  console.log(currentChild);

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }
  return currentChild;
}