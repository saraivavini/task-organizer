import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { CreateTaskScreen } from '../features/task-manager/create-task';
import { TaskListScreen } from '../features/task-manager/task-list';

export type MainStackParamsList = {
  taskList: undefined;
  createTask: undefined;
};

export type AuthNavigatorRouteProps =
  NativeStackNavigationProp<MainStackParamsList>;

const { Navigator, Screen } = createNativeStackNavigator<MainStackParamsList>();

export function MainRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="taskList" component={TaskListScreen} />
      <Screen name="createTask" component={CreateTaskScreen} />
    </Navigator>
  );
}
