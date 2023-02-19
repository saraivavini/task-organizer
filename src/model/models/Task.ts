import { uuidv4 } from '@firebase/util';
import firestore from '@react-native-firebase/firestore';
import { uuid } from 'uuidv4';

export type Task = {
  id: string;
  isCompleted: boolean;
  title: string;
  date: string;
  userId: string;
};

export const TasksRespository = () => {
  const db = firestore().collection('tasks');

  const getTasksByUserId = async (userId: string): Promise<Array<Task>> => {
    const data: Array<Task> = [];

    const querySnapshot = await db.where('userId', '==', userId).get();

    querySnapshot.forEach((snap) => data.push(snap.data() as Task));

    return data;
  };

  const completeTask = async (taskId: string) => {
    return db.doc(taskId).update({
      isCompleted: true,
    });
  };

  const deleteTask = async (taskId: string) => {
    return db.doc(taskId).delete();
  };

  const createTask = async (task: Omit<Task, 'id'>) => {
    const taskId = uuidv4();

    return db.doc(taskId).set({
      id: taskId,
      isCompleted: false,
      title: task.title,
      userId: task.userId,
      data: task.date,
    });
  };

  return {
    getTasksByUserId,
    completeTask,
    deleteTask,
    createTask,
  };
};
