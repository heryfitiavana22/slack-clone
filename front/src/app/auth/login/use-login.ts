import { useLoginMutation } from 'src/graphql-request';
import { Login } from '../auth-type';
import { SubmitHandler, useForm } from 'react-hook-form';

export function useLogin() {
  const { register, handleSubmit } = useForm<Login>();
  const [login, { loading, error }] = useLoginMutation();

  const submit: SubmitHandler<Login> = async ({ email, password }) => {
    const response = await login({ variables: { email, password } });
    console.log(response);
  };

  return {
    loading,
    error,
    register,
    onSubmit: () => handleSubmit(submit),
    handleSubmit,
    submit,
  };
}
