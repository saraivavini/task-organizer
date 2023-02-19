import { uuidv4 } from '@firebase/util';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import { uuid } from 'uuidv4';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export type Task = {
  id: string;
  isCompleted: boolean;
  title: string;
  date: Date;
  userId: string;
};

function snapToTask(
  snap:
    | FirebaseFirestoreTypes.QueryDocumentSnapshot<FirebaseFirestoreTypes.DocumentData>
    | FirebaseFirestoreTypes.DocumentSnapshot<FirebaseFirestoreTypes.DocumentData>
) {
  if (!snap.exists) return;

  const snapData = snap.data();

  if (!snapData) return;

  const convertedSnap = snapData as Task;
  const snapTimestamp = snapData.date as FirebaseFirestoreTypes.Timestamp;

  const task = {
    ...convertedSnap,
    date: snapTimestamp.toDate(),
  };

  return task;
}

function sortByDate(a: Task, b: Task) {
  return b.date.getTime() - a.date.getTime();
}

export const TasksRespository = () => {
  const db = firestore().collection('tasks');
  const user = auth().currentUser as FirebaseAuthTypes.User;

  const getTasksByUserId = async (userId: string): Promise<Array<Task>> => {
    const data: Array<Task> = [];

    const querySnapshot = await db
      .where('userId', '==', userId)
      .limit(10)
      .get();

    querySnapshot.docs.forEach((snap) => {
      const newTask = snapToTask(snap);

      if (newTask) {
        data.push(newTask);
      }
    });

    return data.sort(sortByDate);
  };

  const completeTask = async (taskId: string) => {
    await db.doc(taskId).update({
      isCompleted: true,
    });

    const task = await getTaskById(taskId);

    return task as Task;
  };

  const deleteTask = async (taskId: string) => {
    return db.doc(taskId).delete();
  };

  const getTaskById = async (taskId: string) => {
    const snap = await db.doc(taskId).get();

    return snapToTask(snap);
  };

  const createTask = async (task: Pick<Task, 'title' | 'date'>) => {
    const taskId = uuidv4();
    const userId = user.uid;

    await db.doc(taskId).set({
      id: taskId,
      isCompleted: false,
      title: task.title,
      userId,
      date: task.date,
    });

    return getTaskById(taskId);
  };

  return {
    getTasksByUserId,
    completeTask,
    deleteTask,
    createTask,
    getTaskById,
  };
};
