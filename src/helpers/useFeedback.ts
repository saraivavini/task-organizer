import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

type UseFeedbackProps = {
  error?: string | null;
  translationPrefix?: string;
};

type Feedback = {
  type: 'error' | 'success';
  message: string;
};

type UseFeedbackResponse = {
  feedback?: Feedback;
};

export function useFeedback(props: UseFeedbackProps): UseFeedbackResponse {
  const { error, translationPrefix } = props;
  const { t } = useTranslation();

  const [feedback, setFeedback] = useState<Feedback | undefined>();

  useEffect(() => {
    setFeedback(
      error
        ? {
            type: 'error',
            message: t(`${translationPrefix}.${error}`),
          }
        : undefined
    );
  }, [error]);

  return { feedback };
}
