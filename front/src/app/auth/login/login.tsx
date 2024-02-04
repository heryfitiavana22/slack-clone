import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'src/app/components/button/button';
import { GuestGuard } from 'src/app/components/guard/guest-guard';
import { Input } from 'src/app/components/input/input';
import { H2 } from 'src/app/components/typography/typography';
import { useLogin } from './use-login';
import { Loading } from 'src/app/components/loading/loading';

export function Login({}: LoginProps) {
  const { loading, onSubmit, register } = useLogin();

  if (loading) return <Loading />;

  return (
    <GuestGuard>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <H2 className="mt-10 text-center tracking-tight text-gray-900">
            Slack Clone
          </H2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form method="post" className="space-y-6" onSubmit={onSubmit()}>
            <Input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              label="Email :"
              {...register('email', { required: true })}
            />
            <Input
              type="password"
              id="password"
              placeholder="****"
              label="Mot de passe :"
              {...register('password', { required: true })}
            />
            <div className="flex items-center justify-end">
              <div className="text-sm">
                <Link to="#" className="font-semibold text-secondary">
                  Forgot password?
                </Link>
              </div>
            </div>

            <div>
              <Button className="w-full">Se connecter</Button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm">
            <Link to="#" className="font-semibold leading-6  text-secondary">
              Créer un compte
            </Link>
          </p>
        </div>
      </div>
    </GuestGuard>
  );
}

type LoginProps = PropsWithChildren<{}>;
