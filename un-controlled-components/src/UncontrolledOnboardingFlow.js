import React, { useState } from 'react'

export const UncontrolledOnboardingFlow = ({ children, onFinish }) => {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = stepData => {
    const nextIndex = currentIndex + 1;

    const updateData = {
      ...onboardingData,
      ...stepData,
    };

    console.log(updateData);

    if (nextIndex < children.length) {
      setCurrentIndex(nextIndex);
    } else {
      onFinish(updateData);
    }
    
    setOnboardingData(updateData);
  }

  const currentChild = React.Children.toArray(children)[currentIndex]; //First component array
  console.log(currentChild);

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }
  return currentChild;
}
