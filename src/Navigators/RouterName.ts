import { AuthStackRouter } from './Stack/AuthStack';
import { BottomTabStackRouter } from './Stack/BottomTabStack';
// import { AuthStackRouter } from './Stack/AuthStack';
import { EventStackRouter } from './Stack/EventStack';
import { IntroStackRouter } from './Stack/IntroStack';
import { GroupStackRouter } from './Stack/GroupStask';

const RouterName = {
  ...IntroStackRouter,
  ...AuthStackRouter,
  ...BottomTabStackRouter,
  // ...AuthStackRouter,
  ...BottomTabStackRouter,
  ...EventStackRouter,
  ...GroupStackRouter,
};

export default RouterName;
