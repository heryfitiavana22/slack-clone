import { useCreateUserMutation } from 'src/graphql-request';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'src/app/routes';
import { SignUp } from '../auth-type';

export function useSignup() {
  const { register, handleSubmit } = useForm<SignUp>();
  const [createUser, { loading, error }] = useCreateUserMutation();
  const navigate = useNavigate();

  const submit: SubmitHandler<SignUp> = async (data) => {
    try {
      const response = await createUser({ variables: data });
      console.log(response);
      if (response.data) {
        return navigate(ROUTES.login());
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
