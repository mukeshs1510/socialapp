
import React from 'react';
import { View, Text,Image, Button } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

// const Skipbtn = () => (
//   <Button
//     title="Skip"
//     color="#000000"
//     />
// );
// const DoneBtn = () => (
//   <Button
//     title="Next"
//     color="#000000"
//     />
// );

const OnboardingScreen = ({ navigation }) => {

  return (
    <Onboarding
    // SkipButtonComponent={Skipbtn}
    // NextButtonComponent={DoneBtn}
    transitionAnimationDuration={260}
    onSkip={() => navigation.navigate("Login")}
    onDone={() => navigation.navigate("Login")}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: <Image style={{width:250,height:250}} source={require('../images/firr.png')} />,
          title: 'Onboarding 1',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image style={{width:250,height:250}} source={require('../images/thii.png')} />,
          title: 'Onboarding 2',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: <Image style={{width:250,height:250}} source={require('../images/thir.png')} />,
          title: 'Onboarding 3',
          subtitle: 'Done with React Native Onboarding Swiper',
        },

      ]}
    />
  );
};

export default OnboardingScreen;

