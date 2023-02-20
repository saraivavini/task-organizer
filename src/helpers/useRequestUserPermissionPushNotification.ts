import messaging from '@react-native-firebase/messaging';
import { useEffect, useState } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';

export function useRequestUserPermissionPushNotifications() {
  const [authorized, setAuthorized] = useState<boolean>(false);

  const requestPermissionIOS = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    setAuthorized(enabled);
  };

  const requestPermissionAndroid = async () => {
    const enabled = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATION
    );

    setAuthorized(enabled === PermissionsAndroid.RESULTS.GRANTED);
  };

  useEffect(() => {
    if (Platform.OS === 'ios') {
      requestPermissionIOS();
    }

    if (Platform.OS === 'android') {
      requestPermissionAndroid();
    }
  }, []);

  return {
    authorized,
  };
}
