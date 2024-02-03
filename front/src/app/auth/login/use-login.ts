import { gql, useMutation } from "@apollo/client";
import { Login, Token } from "../auth-type";
import { SubmitHandler, useForm } from "react-hook-form";

const DO_LOGIN = gql`
    mutation Login($email: String!, $password: String!) {
        login(loginInput: { email: $email, password: $password }) {
            access_token
        }
    }
`;
type LoginResponse = { login: Token };

export function useLogin() {
    const { register, handleSubmit } = useForm<Login>();
    const [login, { loading, error }] = useMutation<LoginResponse, Login>(
        DO_LOGIN
    );
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
