import { NavigationContainer } from '@react-navigation/native';
import { AuthRoutes } from './auth.routes';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { MainRoutes } from './main.routes';
import { useEffect, useState } from 'react';

export function Routes() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const onAuthStateChanged = (newUser: FirebaseAuthTypes.User | null) => {
    setUser(newUser);
    if (isLoading) setIsLoading(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber;
  }, []);

  return (
    <NavigationContainer>
      {user ? <MainRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
