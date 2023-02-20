import { NavigationContainer } from '@react-navigation/native';
import { AuthRoutes } from './auth.routes';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { MainRoutes } from './main.routes';
import { useEffect, useState } from 'react';
import messaging from '@react-native-firebase/messaging';
import { NotificationTokensRepository } from '../model/models/NotificationToken';

export function Routes() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  async function onAppBootstrap() {
    await messaging().registerDeviceForRemoteMessages();
    const token = await messaging().getToken();

    NotificationTokensRepository().postNotificationToken(token);
  }

  const onAuthStateChanged = (newUser: FirebaseAuthTypes.User | null) => {
    setUser(newUser);
    if (isLoading) setIsLoading(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber;
  }, []);

  useEffect(() => {
    if (user?.uid) {
      onAppBootstrap();
    }
  }, [user]);

  return (
    <NavigationContainer>
      {user ? <MainRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
