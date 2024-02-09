import { useLoginMutation } from 'src/graphql-request';
import { Login } from '../auth-type';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AccessTokenPersistence } from '../token-persistence';
import { useAuth } from '../use-auth';

export function useLogin() {
  const { refetchUser } = useAuth();
  const { register, handleSubmit } = useForm<Login>();
  const [login, { loading, error }] = useLoginMutation();

  const submit: SubmitHandler<Login> = async ({ email, password }) => {
    try {
      const response = await login({ variables: { email, password } });
      // console.log(response);
      if (response.data) {
        AccessTokenPersistence.save(response.data.login.access_token);
        return refetchUser();
      }
    } catch (error) {}
  };

  return {
    loading,
    error,
    register,
    onSubmit: () => handleSubmit(submit),
  };
}
